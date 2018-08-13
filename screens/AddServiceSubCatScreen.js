
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Button } from 'native-base';

class AddServiceSubCatScreen extends Component {

  
    render() {
       return (
          <View style={styles.container}>
               <Text>AddServiceSubCatScreen</Text>
               <Text>AddServiceSubCatScreen</Text>
               <Text>AddServiceSubCatScreen</Text>
               <Text>AddServiceSubCatScreen</Text>
               <Button onPress={() => {this.props.navigation.navigate('home')}}><Text>Next</Text></Button>
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

export default AddServiceSubCatScreen;