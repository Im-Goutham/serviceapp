import React, {Component} from 'react';
import { View, StyleSheet,Image, ScrollView,Text} from 'react-native';
import { Icon} from 'native-base';


export default class Documents extends Component {

  render() {
    return (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
            <View style={{flexDirection:'column',width:100}}>
                <View style={styles.imgsView}>
                <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                <Text style={{paddingTop:5,paddingBottom:5}}>Certificate1.jpeg</Text>
                </View> 
            </View>   
            <View style={{flexDirection:'column',width:100}}>
                <View style={styles.imgsView}>
                <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                <Text style={{paddingTop:5,paddingBottom:5}}></Text>
                </View> 
            </View> 
            <View style={{flexDirection:'column',width:100}}>
                <View style={styles.imgsView}>
                <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                <Text style={{paddingTop:5,paddingBottom:5}}></Text>
                </View> 
            </View> 
          </ScrollView>   
    );
  }
}



const styles = StyleSheet.create({
    plus: {
        color:'#3399ff',
        paddingLeft:10,
        fontSize:20,
        fontWeight: 'bold'
    },
    img_placeholder: {
        width: 90,
        height: 90,
        position: 'relative',
		top: 0,
		left: 0
      },
      close_img: {
        width: 18,
        height: 18,
        borderRadius:9,
        position: 'absolute',
		top: 14,
		right: 4
      },
})

