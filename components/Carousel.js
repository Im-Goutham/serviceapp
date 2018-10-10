
import React, {Component} from 'react';
import {StyleSheet, View,Image} from 'react-native';
import Carousel , { Pagination } from 'react-native-snap-carousel';
import {scale,width} from '../global';

class CarouselComponent extends Component {
    constructor() {
        super();
       
        this.state = {
             entries: [1,2,3,4],
             activeSlide:0
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
              containerStyle={{ backgroundColor: 'transparent',paddingVertical:0}}
              dotStyle={{
                 backgroundColor:'#0076E7', width: scale(24), height: scale(2),borderRadius: 0,marginHorizontal:scale(-7)
              }}
              inactiveDotStyle={{
                  backgroundColor:'#979797', width: scale(28), height: scale(2),borderRadius: 0, marginHorizontal:scale(-7)
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.8}
            />
        );
    }
 
    render() {
       
        return (
            <View>
             <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width-width/scale(4.2)}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              />
              <View style={{marginTop:scale(10)}}>
                    { this.pagination }
              </View>
              
            </View>
        );
    }
}

var styles = StyleSheet.create({
     adBox: { 
        backgroundColor:'transparent', 
        flex: 1,
        width:width-width/scale(6),
        paddingHorizontal:scale(15),
        borderRadius:scale(10),
     },
     imgStyle:{
        width: '100%',
        marginLeft:scale(-20),
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
     }
});
export default CarouselComponent;