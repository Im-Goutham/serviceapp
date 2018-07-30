
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';



class SelectServiceProviderScreen extends Component {
  
    render() {
       return (
           <View style={{flex:1}}>
               <View style={styles.container}>
                <TouchableHighlight onPress={()=> {this.props.navigation.navigate('home')}}>
                    <Text>Want to be a Service Provider</Text>
                </TouchableHighlight>
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

export default SelectServiceProviderScreen;