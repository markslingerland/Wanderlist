import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ListView, Image, Alert, TouchableWithoutFeedback, Modal} from 'react-native';
import { listPoints } from '../reducers/pointReducer'
import FavoriteComponent from '../components/Core/favoriteComponent'

class WanderlistContainer extends React.Component {
    componentDidMount() {
        this.props.listPoints();
    }

    onPress(e){
        console.log("Pressed: " + e.area)

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
                onPress={this.onPress.bind(this,rowData)}>
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
    let storedPoints = points.map(point => ({ key: point.id, ...point }));
    return {
      points: storedPoints
    };
  };
  
  const mapDispatchToProps = {
    listPoints
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