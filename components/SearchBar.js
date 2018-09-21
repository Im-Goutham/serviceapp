import React, { Component } from 'react';
import { View,Image, StyleSheet} from 'react-native';
import { Item, Input, Icon } from 'native-base';



class SearchBar extends Component {
  render() {
    let {title, left, right} = this.props;
    return (
      <View>
         <Item style={styles.inputBox}>
            <Image source={require('../assets/icons/search_black.png')} style={{ width: 20, height: 20}} resizeMode="contain" resizeMethod="resize"/>
            <Input placeholder='Search here...' style={styles.inputField}   placeholderTextColor='rgb(188,188,188)'/>
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
      fontFamily: 'Montserrat-Regular'
    }
  })
  

export default SearchBar;
