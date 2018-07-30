
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';


class LoginScreen extends Component {
  
    render() {
      console.log('navigation props are ',this.props);
       return (
           <View style={{flex:1}}>
               <View style={styles.container}>
               <Text>LoginScreen</Text>
               <Text>LoginScreen</Text>
               <Text>LoginScreen</Text>
               <Text>LoginScreen</Text>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('register')}>
                  <Text>Register</Text>
                </TouchableOpacity> 
               <TouchableOpacity onPress={() => this.props.navigation.navigate('selectServiceProvider')}>
                  <Text>Sumbit</Text>
                </TouchableOpacity> 
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

export default LoginScreen;