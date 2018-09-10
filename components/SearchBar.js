import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import { Item, Input, Icon } from 'native-base';



class SearchBar extends Component {
  render() {
    let {title, left, right} = this.props;
    return (
      <View>
         <Item style={styles.inputBox}>
            <Icon active name='search' />
            <Input placeholder='Search here...' style={styles.inputField} placeholderStyle={{color:'rgb(188,188,188)'}}/>
          </Item>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    inputBox: {
        backgroundColor:'white',
        borderRadius:10,
        paddingHorizontal:15,
    },
    inputField: {
     
    }
  })
  

export default SearchBar;
