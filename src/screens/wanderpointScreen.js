import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import WanderPointContainer from '../components/wanderPointContainer'


export default class WanderpointScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            text: 'Bilnaat'
        }
    }
    render() {
        return (
        <ImageBackground source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kiyomizu.jpg/1200px-Kiyomizu.jpg'}} resizeMode='cover' style={styles.container}>
                <WanderPointContainer/>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center',
    },

});