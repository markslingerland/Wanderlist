import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import WanderListContainer from '../components/wanderListContainer'
import LogoTitle from '../components/logoTitle'
import { MaterialIcons } from '@expo/vector-icons';


export default class WanderlistScreen extends React.Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerLeft: <TouchableOpacity style={{marginLeft: 13}}  onPress={() => alert("test")}>
                        <MaterialIcons
                            name="filter-list"
                            size={30}
                            color="#293241"/>
                    </TouchableOpacity>,
        headerTitle: <LogoTitle />
    };
    
    render() {
        return (
        <View style={styles.container}>
            <WanderListContainer navigation={this.props.navigation}/>
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