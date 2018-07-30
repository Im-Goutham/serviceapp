
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';


class ServiceScreen extends Component {
  
    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Services'}/>
               <View style={styles.container}>
               <Text>ServiceScreen</Text>
               <Text>ServiceScreen</Text>
               <Text>ServiceScreen</Text>
               <Text>ServiceScreen</Text>
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

export default ServiceScreen;