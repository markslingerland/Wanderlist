import React from 'react';
import { StyleSheet, Text, View, ListView, Image, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class WanderlistContainer extends React.Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: 
        ds.cloneWithRows([
                        {country:'Japan', title:'Kiyomizu-dera', image:'https://upload.wikimedia.org/wikipedia/commons/3/3c/Kiyomizu.jpg', area:'Kyoto', isFavorite: true, location:{long:'longitude',lat:'latitude'}, tags:['tag1','tag2','tag3'], UNESCO:true },
                        {country:'Germany', title:'Berlin Wall', image:'http://www.wendemuseum.org/sites/default/files/Noir.jpg', area:'Berlin', isFavorite: true, location:'geolocation here', tags:['tag1','tag2','tag3'], UNESCO:true},
                        {country:'France', },
                        {country:'Egypt', },
                        {country:'China', },
                        {country:'Australia', },
                        {country:'Norway', },
                        {country:'UK', },
                        {country:'America', },
                        {country:'Canada', },
                        {country:'Hawaii', },
                        ]),
        //ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6']),
        };
    }

    render() {
        return (
        <ListView
            style={styles.list}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => 
                <View
                    style={styles.item}>
                    <Image
                        style={{
                        flex: 1,
                        resizeMode: "cover",
                        marginTop: '3%',
                        position: 'absolute',
                        top: 0,
                        left: 0,   
                        width: '100%',
                        height: '130%',
                        top: '-5.5%',
                        borderRadius: 10,
                        }}
                        source={{ uri: rowData.image }}
                    />
                    <View style={styles.header}>
                        <Text style={styles.title}>{rowData.title}</Text>
                        <Text style={styles.subtitle}>{rowData.area},{rowData.country}</Text>
                        <Ionicons 
                            name='ios-star' 
                            size={32} 
                            color="#EE6C4D" 
                            style={{
                                position: 'absolute',
                                top: '25%',
                                left: '90%'
                            }}/>
                    </View>
                    
                </View>}
        />
        );
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#98C1D9',
        width: '100%'
    },
    item: {
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: '3%',
        height: 250,
        borderRadius: 10,
        shadowOffset:{  width: 0,  height: 3,  },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 4,
        backgroundColor: 'rgba(45,45,45,0.0)',
    },
    header: {
        backgroundColor: 'rgba(41,50,65,0.4)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding:10,
        position: 'absolute',
        top: 0,
        left: 0, 
        width: '100%',
        flex: 1 ,    
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontSize: 10,         
    }
});