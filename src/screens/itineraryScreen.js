import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ModalFilter from '../components/modalFilter';

export default class ItineraryScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <ModalFilter/>
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