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
             style={{height:250}}
             showsButtons={false}
             dot={<View style={{backgroundColor:'rgb(216,216,216)', width: 20, height: 2,borderRadius: 0, marginLeft: 3, marginRight: 3, marginBottom: -50}} />}
             activeDot={<View style={{backgroundColor:'rgb(0,122,227)', width: 20, height: 2,borderRadius: 0, marginLeft: 3, marginRight: 3, marginBottom: -50}} />}
            >
                <View style={styles.adBox}>
                  <Image source={require('../images/banner.png')} style={{ width: '100%', height: '100%'}} resizeMode="contain" resizeMethod="resize"/>
                </View>
                <View style={styles.adBox}>
                  <Image source={require('../images/banner.png')} style={{ width: '100%', height: '100%'}} resizeMode="contain" resizeMethod="resize"/>
                </View>
                <View style={styles.adBox}>
                  <Image source={require('../images/banner.png')} style={{ width: '100%', height: '100%'}} resizeMode="contain" resizeMethod="resize"/>
                </View>
                <View style={styles.adBox}>
                  <Image source={require('../images/banner.png')} style={{ width: '100%', height: '100%'}} resizeMode="contain" resizeMethod="resize"/>
                </View>
            </Swiper> 
            </View>
        );
    }
}

var styles = StyleSheet.create({
     adBox: { 
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 20,
        paddingVertical: 25,
        paddingHorizontal:20,
        borderRadius:10,
        backgroundColor:'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
     }
});
export default Carousel;