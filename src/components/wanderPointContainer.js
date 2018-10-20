import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, } from 'react-native';
import { listPoints } from '../reducers/pointReducer'

export default class WanderPointContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            text: 'This UNESCO World Heritage Site is perched on the east of the Kyoto and a beautiful Buddhist temple to explore. Make sure to enjoy the view from the overlooking veranda and visit the stunning pagoda, too. It really is a very special place.This UNESCO World Heritage Site is perched on the east of the Kyoto and a beautiful Buddhist temple to explore. Make sure to enjoy the view from the overlooking veranda and visit the stunning pagoda, too. It really is a very special place.'
        }
    }


    render() {
        return (
        <View style = {styles.inner}>
            <ScrollView>
                <Text style = {styles.text}> {this.state.text}</Text>
           </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    inner: {
        width: '80%',
        height: '30%',
        marginBottom:'10%',
        paddingTop:'5%',
        paddingLeft:'5%',
        paddingRight:'5%',
        borderRadius: 10,
        backgroundColor: 'rgb(255, 255, 255)'
    },
    text: {
        textAlign:'center'
    }
});