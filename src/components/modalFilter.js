import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import RowItem from '../components/rowItem';

export default class ModalFilter extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
       
        <Modal 
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <TouchableWithoutFeedback onPress={() => {this.setModalVisible(false)}}>
          <View style={styles.modal} >
            <View style={styles.outer}>
              <View style = {styles.inner}>
                <RowItem/>
              </View>
            </View>
          </View>
          </TouchableWithoutFeedback>
        </Modal>

        <TouchableHighlight 
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <MaterialIcons
            name="filter-list"
            size={30}
            color="#293241"/>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    modal: {
      backgroundColor:'rgba(0,0,0,0.5)',
      height: "100%"
    },
    outer: {
      flex: 1,
      marginTop: '20%',
      marginLeft: "10%",
      marginBottom: '20%',

      width: "80%",
      height: "70%",
      justifyContent: 'center',

      backgroundColor: "#fff",
      borderRadius: 10,
      
    },
    inner: { paddingTop: '5%',marginBottom: '-22%'},
    exit: {
      flexDirection: "row",
      justifyContent: "flex-end",
      margin: "2%"
    },
});