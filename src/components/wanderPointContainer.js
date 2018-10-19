import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';


export default class WanderPointContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            text: 'Bilnaat'
        }
    }

    render() {
        return (
        <View style = {styles.inner}>
           <Text> {this.state.text}</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    inner: {
        width: '80%',
        height: '30%',
        marginBottom: '10%',
        padding: '5%',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)'
    }
});