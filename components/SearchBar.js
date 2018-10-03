import React, { Component } from 'react';
import { View,Image, StyleSheet} from 'react-native';
import { Item, Input, Icon } from 'native-base';



class SearchBar extends Component {

  componentDidMount(){
    if(this.props.showKeyBoard){
       this.refs.searchField._root.focus();
    }
  }
  render() {
    let {title, left, right, showKeyBoard} = this.props;
    console.log('showKeyBoard is ',showKeyBoard)
    return (
      <View>
         <Item style={styles.inputBox}>
            <Image source={require('../assets/icons/search_black.png')} style={{ width: 18, height: 18}} resizeMode="contain" resizeMethod="resize"/>
            <Input placeholder='Search here...' 
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
        borderRadius:10,
        paddingHorizontal:15,
    },
    inputField: {
      fontFamily: 'Montserrat-Medium',
      marginHorizontal:10,
    }
  })
  

export default SearchBar;
