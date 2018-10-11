import React, {Component} from 'react';
import {StyleSheet, View,Image,Dimensions} from 'react-native';
import Carousel , { Pagination } from 'react-native-snap-carousel';
import {scale} from '../global';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;


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
              containerStyle={{ backgroundColor: 'transparent',paddingVertical:10}}
              renderDots={ activeIndex => (
                entries.map((entry, i) => (
                  <View
                    style={{paddingHorizontal:scale(3)}}
                    key={ i }
                  >
                    <View style={{ backgroundColor: i === activeIndex ? '#0076E7' : 'rgba(0,0,0,0.1)', width: scale(24), height: scale(2.5),borderRadius: 0}}>
                      
                    </View>
                  </View>
                ))
              )}
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
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              />
              <View >
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
        borderRadius:scale(10),
     },
     imgStyle:{
        width: '100%',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
     }
});
export default CarouselComponent;