import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableWithoutFeedback, Image } from 'react-native';
import { Permissions, ImagePicker } from 'expo'
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { listCategories, getCategoryColor } from '../reducers/categoryReducer';
import { addWanderpoint } from '../reducers/pointReducer';
import { MapView } from 'expo';


class AddWanderpointScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            image: '',
            name: 'Name',
            location: 'Location',
            latitude: 'Latitude',
            longitude: 'longitude',
            country: 'Country',
            UNESCO: false,
            isFavorite: false,
            description: 'Add a description...',
            category: 'None',
            region: {
                latitude: 37.78825,
                longitude: -122.4324
            }
        };
    }
    
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
    });

    console.log(result);

    if (!result.cancelled) {
        this.setState({ image: result.uri });
    }
};

    render() {
        return (
        <ScrollView style={styles.main}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => this._pickImage()}>
                    <View style={styles.addImage}>
                        { this.state.image == '' ? 
                        <View style={{alignItems: 'center'}}>>
                            <Text style={styles.imageText}> Add Image </Text>
                            <FontAwesome
                            name='plus'
                            size={20} />
                        </View> : 
                        <View style={{height: "100%", width: "100%", alignItems: "stretch"}}>
                            <Image style={{flex:1, height: "100%", width: "100%", resizeMode: "cover"}} source={{uri: this.state.image}}/>
                        </View>}
                        
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    clearTextOnFocus={true}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    clearTextOnFocus={true}
                    onChangeText={(location) => this.setState({location})}
                    value={this.state.location}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    clearTextOnFocus={true}
                    onChangeText={(latitude) => this.setState({latitude})}
                    value={this.state.region.latitude.toString()}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    clearTextOnFocus={true}
                    onChangeText={(longitude) => this.setState({longitude})}
                    value={this.state.region.longitude.toString()}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    clearTextOnFocus={true}
                    onChangeText={(country) => this.setState({country})}
                    value={this.state.country   }
                />
            </View>
            <MapView
                style={styles.addImage}
                onRegionChange={(region) => this.setState({ region: region})}>
                <MapView.Marker
                    coordinate={{latitude: this.state.region.latitude, longitude: this.state.region.longitude}}
                />
            </MapView>
        </ScrollView>
        );
    }
}

const mapDispatchToProps = {
    addWanderpoint,
    listCategories,
    getCategoryColor
};

export default connect(null, mapDispatchToProps)(AddWanderpointScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#dedede',
    },
    headerText: {
        fontSize: 18,
        fontWeight: "400",
    },
    inputField: {
        width: '100%',
        height: 60,
        backgroundColor: "#f2f2f2",
        padding: 15,

    },
    main: {
        backgroundColor: '#fff',
    },
    addImage: {
        width: "95%",
        height: 250,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dedede',
        margin: '3%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageText: {
        textAlign: "right",
    }
    ,markerFixed: {
        left: '50%',
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: '50%'
      }

});