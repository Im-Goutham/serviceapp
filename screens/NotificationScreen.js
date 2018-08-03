
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
// import { BannerView } from 'react-native-fbads';

class NotificationScreen extends Component {
  
    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Notifications'}/>
               <View style={styles.container}>
               <Text>NotificationScreen</Text>
               <Text>NotificationScreen</Text>
               <Text>NotificationScreen</Text>
               <Text>NotificationScreen</Text>
               </View>
               {/* <BannerView
                placementId="2061533000525974_2077225645623376"
                type="standard"
                onPress={() => console.log('click')}
                onError={(err) => console.log('error', err)}
            /> */}
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

export default NotificationScreen;