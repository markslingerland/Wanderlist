import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';
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
          <TouchableHighlight style={styles.modal} onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
            <View style={styles.outer}>
              <View style = {styles.inner}>
                <RowItem/>
              </View>
            </View>
          </TouchableHighlight>
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
      marginTop: "20%",
      marginLeft: "10%",
      width: "80%",
      height: "70%",
      backgroundColor: "#e7e7e7",
      borderRadius: 10,
      
    },
    inner: {},
    exit: {
      flexDirection: "row",
      justifyContent: "flex-end",
      margin: "2%"
    },
});