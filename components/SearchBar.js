import React, { Component } from 'react';
import { View,Image, StyleSheet} from 'react-native';
import { Item, Input, Icon } from 'native-base';
import {scale} from '../global';


class SearchBar extends Component {

  componentDidMount(){
    if(this.props.showKeyBoard){
       this.refs.searchField._root.focus();
    }
  }
  render() {
    let {title, left, right, showKeyBoard,placeholder} = this.props;
    console.log('showKeyBoard is ',showKeyBoard)
    return (
      <View>
         <Item style={styles.inputBox}>
            <Image source={require('../assets/icons/search_black.png')} style={{ width: scale(18), height: scale(18)}} resizeMode="contain" resizeMethod="resize"/>
            <Input placeholder={placeholder}
            ref='searchField' 
            style={styles.inputField}   
            placeholderTextColor='rgba(0,0,0,0.3)'
           />
          </Item>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    inputBox: {
        backgroundColor:'white',
        borderRadius:scale(10),
        paddingHorizontal:scale(15),
    },
    inputField: {
      fontFamily: 'Montserrat-Medium',
      marginHorizontal:scale(10),
    }
  })
  

export default SearchBar;
