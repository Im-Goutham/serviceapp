
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';



class SelectLocationScreen extends Component {
  
    render() {
       return (
           <View style={{flex:1}}>
               <View style={styles.container}>
                <TouchableHighlight onPress={()=> {this.props.navigation.navigate('login')}}>
                    <Text>Select Location</Text>
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

export default SelectLocationScreen;