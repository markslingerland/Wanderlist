import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, } from 'react-native';
import TagsComponent from '../components/Core/tagsComponent'


export default class WanderPointContainer extends React.Component {
    render() {
        return (
        <View style = {styles.inner}>
            <ScrollView>
                <Text style = {styles.text}> {this.props.selectedPoint.description}</Text>
                <View style={styles.tagContainer} >
                    <TagsComponent selectedPoint = {this.props.selectedPoint} />
                </View>
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
    },
    tagContainer: {
        marginTop: '1%'
    }
});