import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ListView, Image, TouchableWithoutFeedback} from 'react-native';
import { listPoints, selectPoint, addTagToPoint } from '../reducers/pointReducer'
import FavoriteComponent from '../components/Core/favoriteComponent'

class WanderlistContainer extends React.Component {
    componentDidMount() {
        this.props.listPoints();
    }

    onPress(point){
        console.log(this.props)
        this.props.selectPoint(point);
        //this.props.addTagToPoint(point.id, "Testtag")
        this.props.navigation.navigate('Wanderpoint');
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return (
        <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={ds.cloneWithRows(this.props.points)}
            renderRow={(rowData) => 
                <TouchableWithoutFeedback
                onPress={() => this.onPress(rowData)}>
                <View 
                style={styles.item} >
                    <Image
                        style={styles.backgroundImage}
                        source={{ uri: rowData.image }}
                    />
                    <View style={styles.header}>
                        <Text style={styles.title}>{rowData.title}</Text>
                        <Text style={styles.subtitle}>{rowData.area},{rowData.country}</Text>
                        {(rowData.isFavorite) ? <FavoriteComponent state={true} itemId={rowData.id} /> : <FavoriteComponent state={false} itemId={rowData.id}/> }
                    </View>
                </View>
                </TouchableWithoutFeedback>
            }
        />
        );
    }
}

const mapStateToProps = state => {
    const { points } = state.points;

    
    //CATEGORY+TAG FILTERING
    if(state.points.categoryFilter.length > 0 || state.points.tagFilter.length > 0){
        // let categories = [...new Set(points.map(point => point.category))]

        let resultPoints = [];

        // CATEGORY FILTERING
        if (state.points.categoryFilter.length > 0){
            let filteredPoints = points.filter(item => state.points.categoryFilter.includes(item.category));
            let storedPoints = filteredPoints.map(point => ({ key: point.id, ...point }));

            resultPoints = resultPoints.concat(storedPoints);
        }


        // TAG FILTERING
        if (state.points.tagFilter.length > 0){
            let filteredPoints = points.filter(item => state.points.tagFilter.some(tag => item.tags.includes(tag)));
            let storedPoints = filteredPoints.map(point => ({ key: point.id, ...point }));

            resultPoints = resultPoints.concat(storedPoints)
        }

        return {
            points: resultPoints
        };
    }

    //ELSE
    let storedPoints = points.map(point => ({ key: point.id, ...point }));
    return {
        points: storedPoints
    };
};
  
const mapDispatchToProps = {
    listPoints,
    selectPoint,
    addTagToPoint 
};

export default connect(mapStateToProps, mapDispatchToProps)(WanderlistContainer)

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#fff',
        width: '100%'
    },
    item: {
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%',
        height: 250,
        borderRadius: 10,
        shadowOffset:{  width: 0,  height: 3,  },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 4,
        backgroundColor: 'rgba(45,45,45,0.0)',
    },
    header: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding:10,
        position: 'absolute',
        top: 0,
        left: 0, 
        width: '100%',
        flex: 1 ,    
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontSize: 10,         
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        marginTop: '3%',
        position: 'absolute',
        top: 0,
        left: 0,   
        width: '100%',
        height: '130%',
        top: '-5.5%',
        borderRadius: 10,
        }
});