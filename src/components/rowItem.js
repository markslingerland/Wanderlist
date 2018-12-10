import React from 'react';
import { View, StyleSheet, SectionList, Text, TouchableWithoutFeedback} from 'react-native';
import { toggleFilter } from '../reducers/pointReducer'
import { listCategories, getCategoryColor } from '../reducers/categoryReducer';
import { connect } from 'react-redux';
import RoundCheckbox from 'rn-round-checkbox';

class RowItem extends React.Component {
    componentDidMount(){
     
    }
        
    render() {
      return (
        <SectionList style = {styles.container}
            renderItem={({item, index, section}) => 
            <TouchableWithoutFeedback>
                <View style={styles.item_container} backgroundColor={item.color}>
                    <RoundCheckbox
                        size={24}
                        checked={item.selected}
                        onValueChange={() => {this.props.toggleFilter(item.name, item.type)}}
                        />
                    <Text style ={{marginLeft: "5%", paddingTop: '1.5%' }}key={index}>{item.name}</Text>
                </View>
            </TouchableWithoutFeedback>}

            renderSectionHeader={({section: {title}}) => (
            <TouchableWithoutFeedback>
                <View style={styles.title_container}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
            )}
            sections={[
                {title: 'Categories', data: this.props.categories},
                {title: 'Tags', data: this.props.tags},
            ]}
            keyExtractor={(item, index) => item + index}
        />
      );
    }
  }

const mapStateToProps = state => {
    const { points } = state.points;
    const selectedCategories = state.points.categoryFilter
    const selectedTags = state.points.tagFilter;
    const categoryList = state.categories.categories;

    console.log(categoryList);

    let uniqueCategories = [...new Set(points.map(point => point.category))]

    let categories = uniqueCategories.map(category => ({"name" : category, "selected" : selectedCategories.includes(category), "type" : "category"}))
    let allTags = [];
    points.forEach(function(point) {
        allTags = allTags.concat(point.tags)
    })
    var uniqueTags = [...new Set(allTags)];
    let tags = uniqueTags.map(tag => ({"name" : tag, "selected" : selectedTags.includes(tag), "type" : "tag"}))

    console.log(tags)
    return {
        tags: tags,
        categories: categories
    }

};

const mapDispatchToProps = {
    getCategoryColor,
    toggleFilter,
    listCategories,
    
};

export default connect(mapStateToProps, mapDispatchToProps)(RowItem)



const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    item_container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#fff",
        paddingLeft: '4%',
        padding: "4%",
        borderBottomWidth: 1,
        borderBottomColor: "#bcbcbc",
    },
    title_container: {
        padding: "4%",
        paddingTop: "3%",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#bcbcbc",
    },
    title: {
        fontSize: 30,
    },

  });