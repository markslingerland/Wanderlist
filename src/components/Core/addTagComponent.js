import React from 'react';
import { StyleSheet, Button, TextInput, View} from 'react-native';
import { connect } from 'react-redux';
import { addTagToPoint }  from '../../reducers/pointReducer'


class AddTagComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Add a tag' };
      }
    
      render() {
        return (
        <View style={styles.container}>
          <TextInput
            style={styles.addTagInput}
            clearTextOnFocus={true}
            onSubmitEditing={() => this.props.addTagToPoint(this.props.selectedPoint.id , this.state.text)}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          </View>
        );
      }
    }

const mapDispatchToProps = {
    addTagToPoint
};

export default connect(null, mapDispatchToProps)(AddTagComponent)


const styles = StyleSheet.create({
    addTagInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        padding: 5,
        
    },
    container: {
        width: '100%',
        position: 'absolute',
        top: '0%',
        left: '0%',
        backgroundColor: 'rgba(255,255,255,0.9)',       
    }
});