import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { connect } from 'react-redux';

export default class UnescoComponent extends React.Component {
    render() {
        if (this.props.selectedPoint.UNESCO == true){
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>
                        UNESCO
                    </Text>
                </View>
                
              );

            } else {
                return (
                    <View>

                    </View>
                  );
            }
    }
  }


 //connect(null, UnescoComponent)



  const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        top: '0%',
        left: '0%',
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    text: {
        padding: '2%',
        textAlign:'center'
    }
})