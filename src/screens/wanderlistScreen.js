import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import WanderListContainer from '../components/wanderListContainer'
import LogoTitle from '../components/logoTitle'
import { MaterialIcons } from '@expo/vector-icons';
import ModalFilter from '../components/modalFilter';



export default class WanderlistScreen extends React.Component {
    static navigationOptions = {
        // headerTitle instead of title
        headerLeft: <TouchableOpacity style={{marginLeft: 13}}  onPress={() => alert("test")}>
                            <ModalFilter/>
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
        backgroundColor: '#fff',
    }
});