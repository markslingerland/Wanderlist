import React from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';
import { listCategories, getCategoryColor } from '../reducers/categoryReducer';
import { addWanderpoint } from '../reducers/pointReducer';

class AddWanderpointScreen extends React.Component {

    render() {
        return (
        <View style={styles.container}>
            <Text>Add Wanderpoint!</Text>
        </View>
        );
    }
}

const mapDispatchToProps = {
    addWanderpoint,
    listCategories,
    getCategoryColor
};

export default connect(null, mapDispatchToProps)(AddWanderpointScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});