import Swipeout from 'react-native-swipeout';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableOpacity,ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';

import Carousel , { Pagination } from 'react-native-snap-carousel';

class CarouselComponent extends Component {
    constructor() {
        super();
       
        this.state = {
             entries: [1,2,3,4]
        };
    }

    _renderItem ({item, index}) {
        return (
            <View style={styles.adBox}>
                 <Image source={require('../images/banner.png')} style={styles.imgStyle} resizeMode="contain" resizeMethod="resize"/>
            </View>
        );
    }

    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              firstItem={1}
              containerStyle={{ backgroundColor: 'transparent',paddingVertical:0}}
              dotStyle={{
                 backgroundColor:'rgb(0,122,227)', width: 28, height: 2,borderRadius: 0,marginHorizontal:-7
              }}
              inactiveDotStyle={{
                  backgroundColor:'grey', width: 28, height: 2,borderRadius: 0, marginHorizontal:-7
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.8}
            />
        );
    }
 
    render() {
       
        return (
            <View>
            {/* <Swiper 
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
            </Swiper>  */}


             <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={350}
              itemWidth={300}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              />
              { this.pagination }
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
export default CarouselComponent;