import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listPoints } from '../reducers/pointOfInterestReducer';

class WanderlistView extends Component {
    componentDidMount() {
      this.props.listPoints();
      console.log(this.props)
    }
  
    render() {
      const { points } = this.props;
      return (
          <View>
              <Text>{points.points.name}</Text>
          </View>        
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    item: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc'
    }
  });
  
  const mapStateToProps = state => {
    let storedPoints = state.points;
    console.log(storedPoints)
    return {
      points: storedPoints
    };
  };
  
  const mapDispatchToProps = {
    listPoints
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(WanderlistView);