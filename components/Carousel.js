import Swipeout from 'react-native-swipeout';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableOpacity,ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';


class Carousel extends Component {
    constructor() {
        super();
       
        this.state = {
           
        };
    }

 
    render() {
       
        return (
            <View>
            <Swiper 
             showsButtons={false}
             style={{height:250}}
             dot={<View style={{backgroundColor:'rgb(216,216,216)', width: 20, height: 2,borderRadius: 0, marginLeft: 3, marginRight: 3, marginBottom: -50}} />}
             activeDot={<View style={{backgroundColor:'rgb(0,122,227)', width: 20, height: 2,borderRadius: 0, marginLeft: 3, marginRight: 3, marginBottom: -50}} />}
            >
                <View style={styles.adBox}>
                  <Image source={require('../images/banner.png')} style={styles.imgStyle} resizeMode="contain" resizeMethod="resize"/>
                </View>
                <View style={styles.adBox}>
                  <Image source={require('../images/banner.png')} style={styles.imgStyle} resizeMode="contain" resizeMethod="resize"/>
                </View>
                <View style={styles.adBox}>
                  <Image source={require('../images/banner.png')} style={styles.imgStyle} resizeMode="contain" resizeMethod="resize"/>
                </View>
                <View style={styles.adBox}>
                  <Image source={require('../images/banner.png')} style={styles.imgStyle} resizeMode="contain" resizeMethod="resize"/>
                </View>
            </Swiper> 
            </View>
        );
    }
}

var styles = StyleSheet.create({
     adBox: { 
        flex: 1,
        marginVertical: 20,
        borderRadius:10,
        backgroundColor:'white',
     },
     imgStyle:{
        width: '100%',
        height: 200,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
     }
});
export default Carousel;