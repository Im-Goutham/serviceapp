
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';


class SubscriptionScreen extends Component {
  
    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Settings'}/>
               <View style={styles.container}>
               <Text>SubscriptionScreen</Text>
               <Text>SubscriptionScreen</Text>
               <Text>SubscriptionScreen</Text>
               <Text>SubscriptionScreen</Text>
               </View>
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

export default SubscriptionScreen;