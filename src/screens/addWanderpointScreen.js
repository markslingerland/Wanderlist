import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Switch, Button, Picker } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { listCategories, getCategoryColor } from '../reducers/categoryReducer';
import { addWanderpoint } from '../reducers/pointReducer';
import RNPickerSelect from 'react-native-picker-select';;

function generateWanderPoint(){
    
}

class AddWanderpointScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            area: '',
            latitude: '',
            longitude: '',
            country: '',
            UNESCO: false,
            isFavorite: false,
            description: '',
            tags: [],
            category: ''
        };
      }


    render() {
        return (
        <ScrollView style={styles.main}>
            <View style={styles.container}>
                <View style={styles.addImage}>
                    <Text style={styles.imageText}> Add Image </Text>
                    <FontAwesome
                    name='plus'
                    size={20}
                    
                    />
                </View>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    clearTextOnFocus={true}
                    onChangeText={(name) => this.setState({name})}
                    placeholder={"Name"}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    clearTextOnFocus={true}
                    onChangeText={(value) => this.setState({area: value})}
                    placeholder={"Area"}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    clearTextOnFocus={true}
                    onChangeText={(value) => this.setState({latitude: value})}
                    placeholder={"Latitude"}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    clearTextOnFocus={true}
                    onChangeText={(value) => this.setState({longitude: value})}
                    placeholder={"Longitude"}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    clearTextOnFocus={true}
                    onChangeText={(value) => this.setState({country: value})}
                    placeholder={"Country"}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    clearTextOnFocus={true}
                    onSubmitEditing={(value) => this.setState({ tags: this.state.tags.concat(value.nativeEvent.text)})}
                    placeholder={"Tags"}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.pickerField}>
                    <RNPickerSelect 
                        items={[{label:'Nature',
                                value: 'Nature'
                                },
                                {label:'Entertainment',
                                value: 'Entertainment'
                                },
                                {label:'Food',
                                value: 'Food '
                                }]}
                        placeholder={{}}
                        onValueChange={(value) => {
                        this.setState({
                            category: value
                        })  
                        }}>
                        <Text> Category </Text>
                    </RNPickerSelect>
                </View>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputFieldDescription}
                    clearTextOnFocus={true}
                    multiline={true}
                    onChangeText={(value) => this.setState({description: value})}
                    placeholder={"Add a description.."}
                />
            </View>
            <View style={styles.divider}></View>
            <View style={styles.switchContainer}>
                <Text style={styles.switchTag}>
                    UNESCO: 
                </Text>
                <Switch
                    onValueChange={(value) => this.setState({UNESCO: value})}
                    value={this.state.UNESCO}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.switchTag}>
                    Favorite  :
                </Text>
                <Switch
                    onValueChange={(value) => this.setState({isFavorite: value})}
                    value={this.state.isFavorite}
                />
            </View>
            
            
            
{/*             
            <View style={styles.buttonContainer}>
                <Button
                    onPress={() => }
                />
            </View> */}
        </ScrollView>
        );
    }
}



const mapDispatchToProps = {
    addWanderpoint,
    listCategories,
    getCategoryColor
};

export default connect(null, mapDispatchToProps)(AddWanderpointScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#dedede',
    },
    switchContainer: {
        backgroundColor: '#f2f2f2',
        height: 60,    
        alignItems: 'center',  
        flexDirection: "row"
    },
    headerText: {
        fontSize: 18,
        fontWeight: "400",
    },
    inputField: {
        width: '100%',
        height: 60,
        backgroundColor: "#f2f2f2",
        padding: 15,
    },
    pickerField: {
        width: '100%',
        height: 60,
        backgroundColor: "#f2f2f2",
        padding: 12,
        justifyContent: 'center',
    },
    main: {
        backgroundColor: '#fff',
    },
    addImage: {
        width: "95%",
        height: 250,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dedede',
        margin: '3%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageText: {
        textAlign: "right",
    },
    divider: {
        height: 15,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#DEDEDE"
    },
    switchTag: {
        paddingLeft: 15,
        paddingRight: "60%",
        borderBottomWidth: 1,
        borderColor: '#dedede'
    },
    inputFieldDescription: {
        width: '100%',
        height: 150 ,
        backgroundColor: "#f2f2f2",
        paddingLeft: 15,
        paddingTop: 15,
    }
});