

import React, {Component} from 'react';
import {View, Image} from 'react-native';
import { scale } from '../global';
// import {
//     AdMobBanner,
//     AdMobInterstitial,
//     PublisherBanner,
//     AdMobRewarded,
//   } from 'react-native-admob';

export default class Advertisement extends Component {

  render() {
    return (
        <View style={{ height: scale(90)}}>
               <Image source={require('../images/advertisement.png')} style={{ width: '100%', height: scale(90) }} resizeMode="contain" resizeMethod="resize" />
        </View>
    );
  }
}


// <AdMobBanner
// adSize="smartBannerPortrait"
// adUnitID="ca-app-pub-3940256099942544/6300978111"
// testDevices={[AdMobBanner.simulatorId]}
// onAdFailedToLoad={error => console.log(error)}
// />