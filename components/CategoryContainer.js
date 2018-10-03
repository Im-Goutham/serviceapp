import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native';



class CategoryContainer extends Component {
  render() {
    let {category,index } = this.props;
    return (
      <TouchableOpacity
        style={styles.mainBox}
        onPress={()=>{this.props.selectCategory(index)}}
        >
        <View style={[styles.categoryBox,{borderColor: category.selected ? '#3E85EF' : '#EDEDED'}]}>
              <Image source={category.image} style={{ width: 40, height: 40}} resizeMode="contain" resizeMethod="resize"/>
        </View>
        <Text style={[styles.categoryStyle,{color: category.selected ? '#3E85EF' : '#4A4A4A'}]}>{category.name}</Text>
      </TouchableOpacity>     
    )
  }
}


const styles = StyleSheet.create({
    mainBox: {width:90,height:110,marginHorizontal:5,marginVertical:20},
    categoryBox: {
      paddingVertical:20,
      flexDirection:'column',
      borderRadius:10,
      width: '100%',
      height: 90,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderColor:'#EDEDED',
    },
    categoryStyle: {
      color:'#4A4A4A',
      fontFamily:'Montserrat-Medium',
      paddingVertical:10,
      fontSize: 13,
      textAlign:'center'
  },
  })
  

export default CategoryContainer;
