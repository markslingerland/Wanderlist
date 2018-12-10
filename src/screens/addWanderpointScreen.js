import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableWithoutFeedback, Image, Switch, Button } from 'react-native';
import { Permissions, ImagePicker } from 'expo'
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { listCategories, getCategoryColor } from '../reducers/categoryReducer';
import { addWanderpoint } from '../reducers/pointReducer';
import RNPickerSelect from 'react-native-picker-select';;
import { MapView } from 'expo';


class AddWanderpointScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            area: '',
            latitude: 0,
            longitude: 0,
            country: '',
            UNESCO: false,
            isFavorite: false,
            isVisited: false,
            description: '',
            tags: [],
            category: '',
            image: ''
        };
    }
    
    _pickImage = async () => {
        await Permissions.askAsync(Permissions.CAMERA);

        let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
    });

    console.log(result);

    if (!result.cancelled) {
        this.setState({ image: result.uri });
    }
};

    render() {
        return (
        <ScrollView style={styles.main}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => this._pickImage()}>
                    <View style={styles.addImage}>
                        { this.state.image == '' ? 
                        <View style={{alignItems: 'center'}}>>
                            <Text style={styles.imageText}> Add Image </Text>
                            <FontAwesome
                            name='plus'
                            size={20} />
                        </View> : 
                        <View style={{height: "100%", width: "100%", alignItems: "stretch"}}>
                            <Image style={{flex:1, height: "100%", width: "100%", resizeMode: "cover"}} source={{uri: this.state.image}}/>
                        </View>}
                        
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    clearTextOnFocus={true}
                    onChangeText={(value) => this.setState({title: value})}
                    placeholder={"Name"}
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
                    onChangeText={(value) => this.setState({area: value})}
                    placeholder={"Area"}
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
                                {label:'Religious',
                                value: 'Religious '
                                },
                                {label:'View',
                                value: 'View '
                                },
                                {label:'Hotel',
                                value: 'Hotel '
                                },
                                {label:'Relax',
                                value: 'Relax '
                                },
                                {label:'Food',
                                value: 'Food '
                                },
                                {label:'Drinks',
                                value: 'Drinks '
                                },
                                {label:'Shopping',
                                value: 'Shopping '
                                }]}
                        placeholder={{}}
                        onValueChange={(value) => {
                        this.setState({
                            category: value
                        })  
                        }}>
                        <Text> {this.state.category == '' ? "Category" : this.state.category} </Text>
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
            <View style={styles.switchContainer}>
                <Text style={styles.switchTag}>
                    Visited   :
                </Text>
                <Switch
                    onValueChange={(value) => this.setState({isVisited: value})}
                    value={this.state.isVisited}
                />
            </View>
            <MapView
                style={styles.addImage}
                onRegionChange={(region) => this.setState({ latitude: region.latitude, longitude: region.longitude})}>
                <MapView.Marker
                    coordinate={{latitude: this.state.latitude, longitude: this.state.longitude}}
                />
            </MapView>
            <View style={styles.buttonContainerWrapper}>         
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => generatePoint(this.state)}
                        title='Add WanderPoint'
                    />
                </View> 
            </View>   
        </ScrollView>
        );
    }
}

function generatePoint(x){
    console.log(x)
    addWanderpoint(x)
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
    },
    buttonContainer: {

        width: '50%',
        backgroundColor: '#EE6C4D',
        borderRadius: 10,
    },
    buttonContainerWrapper: {
        alignContent: 'center',
        justifyContent: 'center',
    }
});