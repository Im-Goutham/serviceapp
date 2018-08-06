
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
  } from 'react-native-admob'
  import { pushNotifications } from '../services';


class HomeScreen extends Component {

     handleOnPress = () => {
        console.log('notification called ..')
        pushNotifications.localNotification();
      };
     
    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Home'}/>
               <View style={styles.container}>
               <Text>HomeScreen</Text>
               <Text>HomeScreen</Text>
               <Text>HomeScreen</Text>
               <Text>HomeScreen</Text>
               <Button
                title={'Press Me'}
                onPress={this.handleOnPress.bind(this)}/>
               </View>
               <AdMobBanner
                adSize="fullBanner"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                testDevices={[AdMobBanner.simulatorId]}
                onAdFailedToLoad={error => console.log(error)}
                />  
           </View>
       )
    }
}

const styles = StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    }
})

export default HomeScreen;