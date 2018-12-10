import React from 'react';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View, ListView, Image, TouchableWithoutFeedback} from 'react-native';
import { listPoints, selectPoint, addTagToPoint, filterPoints } from '../reducers/pointReducer';
import { listCategories, getCategoryColor } from '../reducers/categoryReducer';
import FavoriteComponent from '../components/Core/favoriteComponent'

class WanderlistContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
    }

    componentDidMount() {
        this.props.listPoints();
        this.props.listCategories();
    }

    handleQueryChange(query){  
        console.log(this.props)
        this.setState(state => ({ ...state, query: query || "" }));
        this.props.filterPoints(query);
    }       

    handleSearchCancel = () => this.handleQueryChange("");


    onPress(point){
        this.props.selectPoint(point);
        //this.props.addTagToPoint(point.id, "Testtag")
        this.props.navigation.navigate('Wanderpoint');
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return (
        <View style={styles.searchBar}>
            <SearchBar
            containerStyle={{backgroundColor: '#FFF'}}
                platform="ios"
                onChangeText={text => this.handleQueryChange(text)}
                onCancel={this.handleSearchCancel}
                value={this.state.query}
                cancelButtonTitle="Cancel"
                placeholder='Search' />
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
        </View>
        );
    }
}

const mapStateToProps = state => {
    const { points } = state.points;
    console.log(state.categories);
    let resultPoints = points.map(point => ({ key: point.id, ...point }));

    //CATEGORY+TAG FILTERING
    if(state.points.categoryFilter.length > 0 || state.points.tagFilter.length > 0 || state.points.filterKeyword.length > 0){
        let resultPoints = [];

        if (state.points.filterKeyword.length > 0){
            let filteredPoints = points.filter(item => item.title.toLowerCase().includes(state.points.filterKeyword.toLowerCase()) || item.description.toLowerCase().includes(state.points.filterKeyword.toLowerCase()) || item.area.toLowerCase().includes(state.points.filterKeyword.toLowerCase()) || item.country.toLowerCase().includes(state.points.filterKeyword.toLowerCase()));
            let storedPoints = filteredPoints.map(point => ({ key: point.id, ...point }));
            resultPoints = resultPoints.concat(storedPoints);
        }

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

        resultPoints = [...new Set(resultPoints)]

        return {
            points: resultPoints,
            
        };
    }

    return {
        points: resultPoints,
        
    };
    //ELSE
    
};
  
const mapDispatchToProps = {
    listPoints,
    selectPoint,
    addTagToPoint,
    filterPoints,
    listCategories,
    getCategoryColor
};

export default connect(mapStateToProps, mapDispatchToProps)(WanderlistContainer)

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        marginTop: '-3%'
    },
    searchBar: {
        width: '100%',
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
        backgroundColor: 'rgba(35,35,35,0)',
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
        height: 250,
        top: '-5.5%',
        borderRadius: 10,
        }
});