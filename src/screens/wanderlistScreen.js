import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WanderListContainer from '../components/wanderListContainer'

export default class WanderlistScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <WanderListContainer></WanderListContainer>  
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