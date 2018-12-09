import React from 'react';
import { View, StyleSheet, SectionList, Text } from 'react-native';

export default class RowItem extends React.Component {
    render() {
      return (
        <SectionList style = {styles.container}
            renderItem={({item, index, section}) => 
                <Text style={styles.item} key={index}>{item}</Text>}
            renderSectionHeader={({section: {title}}) => (
                <Text style={styles.title}>{title}</Text>
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
    container: {
       
    },
    title: {
        fontSize: 30,
        margin: "2%",
        backgroundColor: "#e7e7e7"
    },
    item: {
        fontSize: 15,
        margin: "2%",
    }
  });