import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import LogoTitle from '../components/logoTitle'
import { listPoints } from '../reducers/pointReducer'


class MapScreen extends React.Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <LogoTitle />
    };

    componentDidMount() {
        this.props.listPoints();
      }
    
    renderMarker(point){ 
    return <MapView.Marker
        key={point.key}
        coordinate={{latitude: point.latitude , longitude: point.longitude}}
        title={point.title}
        description={point.description}
    />}  

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
    listPoints
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});