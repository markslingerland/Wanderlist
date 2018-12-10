import React from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import { connect } from 'react-redux';
import { toggleIsVisited } from '../../reducers/pointReducer'

class ToggleIsVisited extends React.Component {

    render() {
      return (
        <View style={styles.isVisited}>
            <Text style={styles.isVisitedText}> I have visited this place </Text>
            <Switch
                //onValueChange={value => this.setState({ isHidden: value })}
                onValueChange={() => this.props.toggleIsVisited(this.props.selectedPoint.id)}
                //onValueChange={() => console.log(this.props.selectedPoint.isVisited)}
                value={this.props.selectedPoint.isVisited}
            />
        </View> 
        
      );
    }
  }

const mapDispatchToProps = {
    toggleIsVisited
};

export default connect(null, mapDispatchToProps)(ToggleIsVisited)

  const styles = StyleSheet.create({
    container: {
        width: '200%',
        position: 'absolute',
        top: '35%',
        left: '90%'
    },
})