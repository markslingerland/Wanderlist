import React from 'react';
import { View, StyleSheet, SectionList, Text } from 'react-native';

export default class RowItem extends React.Component {
    render() {
      return (
        <SectionList style = {styles.container}
            renderItem={({item, index, section}) => 
                <View style={styles.item_container}>
                    <Text key={index}>{item}</Text>
                </View>}

            renderSectionHeader={({section: {title}}) => (
                <View style={styles.title_container}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            )}
            sections={[
                {title: 'Categories', data: ['item1', 'item2']},
                {title: 'Tags', data: ['item3', 'item4']},
            ]}
            keyExtractor={(item, index) => item + index}
        />
      );
    }
  }

const styles = StyleSheet.create({
    item_container: {
        backgroundColor: "#D3D3D3",
        paddingLeft: 10,
        padding: "4%",
        borderBottomWidth: 1,
        borderBottomColor: "#bcbcbc",
    },
    title_container: {
        padding: "4%"
    },
    title: {
        fontSize: 30,
    },

  });