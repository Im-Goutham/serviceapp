import React, { Component } from 'react';
import { View, Text,Image, StyleSheet} from 'react-native';



class CategoryContainer extends Component {
  render() {
    let {category } = this.props;
    return (
      <View style={styles.mainBox}>
        <View style={styles.categoryBox}>
              <Image source={category.image} style={{ width: 40, height: 40}} resizeMode="contain" resizeMethod="resize"/>
        </View>
        <Text style={styles.categoryStyle}>{category.name}</Text>
      </View>     
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
      borderColor:'rgb(237,237,237)',
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
