import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class WanderlistScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text>Wanderlist!</Text>
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
        marginTop: 50
    }
});