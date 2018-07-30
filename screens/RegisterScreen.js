
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';


class RegisterScreen extends Component {
  
    render() {
      console.log('navigation props are ',this.props);
       return (
           <View style={{flex:1}}>
               <View style={styles.container}>
               <Text>RegisterScreen</Text>
               <Text>RegisterScreen</Text>
               <Text>RegisterScreen</Text>
               <Text>RegisterScreen</Text>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
                  <Text>Login</Text>
                </TouchableOpacity> 
               <TouchableOpacity onPress={() => this.props.navigation.navigate('selectServiceProvider')}>
                  <Text>Submit</Text>
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

export default RegisterScreen;