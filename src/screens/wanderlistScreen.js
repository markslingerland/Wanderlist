import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import WanderListContainer from '../components/wanderListContainer'
import LogoTitle from '../components/logoTitle'
import { Ionicons } from '@expo/vector-icons';
import ModalFilter from '../components/modalFilter';

export default class WanderlistScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return{ 
        // headerTitle instead of title
        headerLeft: <TouchableOpacity style={{marginLeft: 13}}>
                            <ModalFilter/>
                    </TouchableOpacity>,
        headerTitle: <LogoTitle />,
        headerRight: <TouchableOpacity style={{marginRight: 15}}  onPress={() => navigation.navigate('AddWanderpoint')}>
                        <View>
                            <Ionicons
                                name="md-add"
                                size={30}
                                color="#293241"/>
                        </View>
                    </TouchableOpacity>,
        }
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