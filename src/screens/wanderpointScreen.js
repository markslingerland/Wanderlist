import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import WanderPointContainer from '../components/wanderPointContainer'
import UnescoComponent from '../components/Core/unescoComponent'
import AddTagComponent from '../components/Core/addTagComponent'

class WanderpointScreen extends React.Component {
    componentWillMount() {
        this.props.navigation.setParams({ title: this.props.selectedPoint.title }) 
    }

    static navigationOptions = ({ navigation }) => {
        const { state: { params = {} } } = navigation;
        return {
          title: params.title || "",
        };
      }

    render() {
        return (
        <ImageBackground source={{uri: this.props.selectedPoint.image}} resizeMode='cover' style={styles.container}>
            <UnescoComponent selectedPoint = {this.props.selectedPoint}/>
            {/* <AddTagComponent selectedPoint = {this.props.selectedPoint}/> */}
            <WanderPointContainer selectedPoint={this.props.selectedPoint}/>
        </ImageBackground>
        );
    }
}

const mapStateToProps = state => {
    const { selectedPoint } = state.points;
    
    console.log(selectedPoint)
    return {
      selectedPoint: selectedPoint
    };
  };
  
export default connect(mapStateToProps)(WanderpointScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center',
    },

});