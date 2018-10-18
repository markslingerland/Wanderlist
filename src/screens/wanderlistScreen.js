import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WanderListContainer from '../components/wanderListContainer'
import LogoTitle from '../components/logoTitle'

export default class WanderlistScreen extends React.Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <LogoTitle />
    };


    render() {
        return (
        <View style={styles.container}>
            <WanderListContainer/>
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