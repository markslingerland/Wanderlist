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
          <View style={styles.modal}>
            <View style={styles.outer}>
              <View>
                <TouchableHighlight
                  style={styles.exit}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <MaterialIcons
                  name="clear"
                  size={20}
                  />
                </TouchableHighlight>
                <RowItem style = {styles.inner}/>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight 
          style = {styles.press}
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
      padding: "2%",
      width: "80%",
      height: "80%",
      backgroundColor: "#e7e7e7",
      borderRadius: 10
    },
    inner: {
      padding: "5%"
    },
    press: {

    },
    exit: {
      flexDirection: "row",
      justifyContent: "flex-end"
    },
});