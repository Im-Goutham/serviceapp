
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { Icon } from 'native-base';
import Header from '../components/Header';
import Advertisement from '../components/Advertisement';

class SubscriptionScreen extends Component {
  
    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Subscriptions'}/>
               <Advertisement/>
               <ScrollView style={styles.container}>
               <View style={{flex:1}}>
                 <View style={{flex:1}}>
                    <Text style={{fontSize:22,marginVertical:20}}>You don't have Premium Account</Text>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Your current credit Balance</Text>
                 </View>
                 <View style={{flex:1,flexDirection:'row'}}>
                   <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}><Text style={{fontSize:24,marginVertical:20}}><Text style={{fontSize:22,fontWeight:"bold"}}>0</Text> Point</Text></View>
                   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:18,color:'#1f90f9'}}>Add Credit <Icon name='md-add' style={{fontSize:18,color:'#1f90f9'}}/></Text></View> 
                </View>
               </View>
               <View style={{flex:2}}>
                   
               </View>
               </ScrollView>
           </View>
       )
    }
}

const styles = StyleSheet.create({
      container: {
         backgroundColor:'white',
         paddingHorizontal: 10
    }
})

export default SubscriptionScreen;