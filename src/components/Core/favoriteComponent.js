import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { toggleFavoritePoint } from '../../reducers/pointReducer'

class FavoriteComponent extends React.Component {
    render() {
      return (
        <TouchableWithoutFeedback onPress={() => this.props.toggleFavoritePoint(this.props.itemId)}>
            <View style={styles.container}>
                {(this.props.state) ? 
                    <FontAwesome 
                    name='star' 
                    size={32} 
                    color="#EE6C4D" 
                    /> :
                    <FontAwesome 
                    name='star' 
                    size={32} 
                    color="rgba(255, 255, 255, 0.5)" 
                    />
                }
            </View>
        </TouchableWithoutFeedback>
        
      );
    }
  }

const mapDispatchToProps = {
    toggleFavoritePoint
};

export default connect(null, mapDispatchToProps)(FavoriteComponent)



  const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '35%',
        left: '90%'
    },
})