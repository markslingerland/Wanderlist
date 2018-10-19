import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class WanderpointScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            backgroundImage: "text"
        }
    }
    render() {
        return (
        <ImageBackground source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kiyomizu.jpg/1200px-Kiyomizu.jpg'}} resizeMode='cover' style={styles.container}>
           
        </ImageBackground>
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