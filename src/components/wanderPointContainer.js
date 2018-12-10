import React from 'react';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import TagsComponent from '../components/Core/tagsComponent'
import AddTagComponent from '../components/Core/addTagComponent'
import ToggleIsVisited from '../components/Core/toggleIsVisited'


export default class WanderPointContainer extends React.Component {

    render() {
        return (
        <View style = {styles.inner}>
            <ScrollView>
                <AddTagComponent selectedPoint={this.props.selectedPoint}/>
                <View style={styles.tagContainer} >
                    <TagsComponent selectedPoint = {this.props.selectedPoint} />
                </View>
                <Text style = {styles.text}> {this.props.selectedPoint.description}</Text>
            </ScrollView>
            {/* <ToggleIsVisited selectedPoint={this.props.selectedPoint}/> */}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    inner: {
        width: '80%',
        height: '50%',
        marginBottom:'10%',
        paddingTop:'5%',
        paddingLeft:'5%',
        paddingRight:'5%',
        borderRadius: 10,
        backgroundColor: 'rgb(255, 255, 255)'
    },
    text: {
        textAlign:'center',
    },
    tagContainer: {
        marginBottom: '1%'
    },
    isVisited: {
        flexDirection: 'row',
    },
    isVisitedText: {
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    }
});