
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';


class MyAccountScreen extends Component {
  
    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'MyAccount'}/>
               <View style={styles.container}>
               <Text>MyAccountScreen</Text>
               <Text>MyAccountScreen</Text>
               <Text>MyAccountScreen</Text>
               <Text>MyAccountScreen</Text>
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

export default MyAccountScreen;