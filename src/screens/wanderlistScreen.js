import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import LogoTitle from '../components/logoTitle'

export default class WanderlistScreen extends React.Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <LogoTitle />
    };


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
    }
});