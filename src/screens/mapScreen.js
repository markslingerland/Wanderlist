import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { MapView } from 'expo';
import LogoTitle from '../components/logoTitle'
import { listPoints, selectPoint } from '../reducers/pointReducer'
import FavoriteComponent from '../components/Core/favoriteComponent'

class MapScreen extends React.Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <LogoTitle />
    };

    componentDidMount() {
        this.props.listPoints();
      }

    onPress(point){
        this.props.selectPoint(point);
        //this.props.addTagToPoint(point.id, "Testtag")
        this.props.navigation.navigate('Wanderpoint');
    }
    
    renderMarker(point){ 
    return <MapView.Marker
        key={point.key}
        coordinate={{latitude: point.latitude , longitude: point.longitude}}
    >
    <MapView.Callout tooltip>
        <TouchableWithoutFeedback onPress={() => this.onPress(point)}>
        <View style={styles.item} >
             <Image
                style={styles.backgroundImage}
                source={{ uri: point.image }}
            />
            <View style={styles.header}>
                <Text style={styles.title}>{point.title}</Text>
                <Text style={styles.subtitle}>{point.area},{point.country}</Text>
                {(point.isFavorite) ? <FavoriteComponent state={true} itemId={point.id} /> : <FavoriteComponent state={false} itemId={point.id}/> }
            </View> 
        </View>
    </TouchableWithoutFeedback>
    </MapView.Callout>
    </MapView.Marker>}  

    render() {
        return (
            <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 36.2048,
              longitude: 138.2529,
              latitudeDelta: 22,
              longitudeDelta: 15,
            }}>
            {this.props.points.map(marker => (
               this.renderMarker(marker)
            ))}
        </MapView>
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
    listPoints,
    selectPoint
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    item: {
        // marginLeft: '3%',
        // marginRight: '3%',
        // marginTop: '3%',
        height: 250,
        width: 370,
        position: 'relative',
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
        marginTop: '3.8%',
        position: 'absolute',
        top: 0,
        left: 0,   
        width: '100%',
        height: 250,
        top: '-5.5%',
        borderRadius: 10,
        }
});