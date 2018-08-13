
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Button } from 'native-base';

class AddServiceCatScreen extends Component {

  
    render() {
       return (
          <View style={styles.container}>
               <Text>AddServiceCatScreen</Text>
               <Text>AddServiceCatScreen</Text>
               <Text>AddServiceCatScreen</Text>
               <Text>AddServiceCatScreen</Text>
               <Button onPress={() => {this.props.navigation.navigate('addServiceSubCatScreen')}}><Text>Next</Text></Button>
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

export default AddServiceCatScreen;