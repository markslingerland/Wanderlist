import React from 'react';
import { StyleSheet, Text, View, ListView, Image } from 'react-native';


export default class WanderlistContainer extends React.Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6']),
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
                    <Text>{rowData}</Text>
                    <Image
                        style={{width: 250, height: 100}}
                       
                    ></Image>
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
        height: 200,
        borderRadius: 10,
        shadowOffset:{  width: 0,  height: 3,  },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 4,

        backgroundColor: 'white',
    }
});