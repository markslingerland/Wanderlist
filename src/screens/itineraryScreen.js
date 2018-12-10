import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class ItineraryScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={{textAlign: 'center'}}><Text style={{fontWeight: 'bold'}}>Wanderlist v0.0.1</Text>{'\n\n'}by:{'\n\n'}Roman Reichardt{'\n'}Mark Slingerland{'\n'}Alexandra de Jonge{'\n'}Wessel Meijer</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});