import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from '../global';


class CategoryContainer extends Component {
  render() {
    let {category,index } = this.props;
    return (
      <TouchableOpacity
        style={styles.mainBox}
        onPress={()=>{this.props.selectCategory(index)}}
        >
        <View style={[styles.categoryBox,{borderColor: category.selected ? '#3E85EF' : '#EDEDED'}]}>
              <Image source={category.image} style={{ width: scale(40), height: scale(40)}} resizeMode="contain" resizeMethod="resize"/>
        </View>
        <Text style={[styles.categoryStyle,{color: category.selected ? '#3E85EF' : '#4A4A4A'}]}>{category.name}</Text>
      </TouchableOpacity>     
    )
  }
}


const styles = StyleSheet.create({
    mainBox: {width:scale(90),marginHorizontal:scale(5),marginVertical:scale(20)},
    categoryBox: {
      paddingVertical:scale(20),
      flexDirection:'column',
      borderRadius:scale(10),
      width: '100%',
      height: scale(90),
      justifyContent:'center',
      alignItems:'center',
      borderWidth:scale(1),
      borderColor:'#EDEDED',
    },
    categoryStyle: {
      color:'#4A4A4A',
      fontFamily:'Montserrat-Medium',
      paddingVertical:scale(10),
      fontSize: scale(13),
      textAlign:'center'
  },
  })
  

export default CategoryContainer;
