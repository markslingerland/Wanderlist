import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ExploreScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Text>Explore!</Text>
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