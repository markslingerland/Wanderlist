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
            {/* {this.state.points.map(marker => (
                <Marker
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
                />
            ))} */}
        </MapView>
        );
    }
}

const mapStateToProps = state => {
    // let storedPoints = state.points.map(repo => ({ key: repo.id.toString(), ...repo }));
    let storedPoints = state.points.points
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