import React from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';


export default class TagsComponent extends React.Component {


    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        console.log(this.props.selectedPoint.tags)

        return (
        <View>
            <ListView
                horizontal = {true}
                style={styles.tags}
                enableEmptySections={true}
                removeClippedSubviews={false}
                dataSource={ds.cloneWithRows(this.props.selectedPoint.tags)}
                renderRow={(rowData) => 
                    <View style={styles.tag}>
                        <Text style={styles.tagTitle}>{rowData}</Text>
                    </View>
                }
            />

        </View>
        );
    }
}


const styles = StyleSheet.create({
    tags: {
        width: '100%',
    },
    tag: {
        backgroundColor:"#EE6C4D",
        margin: 4,
        padding: 5,
        borderRadius: 10,

    },
    tagTitle: {
        color: 'white',
    }
    
});