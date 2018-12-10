import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class AddWanderpointScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Name',
            location: 'Location',
            latitude: 'Latitude',
            longitude: 'longitude',
            country: 'Country',
            UNESCO: false,
            isFavorite: false,
            description: 'Add a description...',
            category: 'None'
        };
      }

    render() {
        return (
        <ScrollView style={styles.main}>
            <View style={styles.container}>
                <View style={styles.addImage}>
                    <Text style={styles.imageText}> Add Image </Text>
                    <FontAwesome
                    name='plus'
                    size={20}
                    
                    />
                </View>
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
                    value={this.state.latitude}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    clearTextOnFocus={true}
                    onChangeText={(longitude) => this.setState({longitude})}
                    value={this.state.longitude}
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
        </ScrollView>
        );
    }
}

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

});