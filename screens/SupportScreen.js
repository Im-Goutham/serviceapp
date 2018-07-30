
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';


class SupportScreen extends Component {
  
    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'SupportScreen'}/>
               <View style={styles.container}>
               <Text>SupportScreen</Text>
               <Text>SupportScreen</Text>
               <Text>SupportScreen</Text>
               <Text>SupportScreen</Text>
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

export default SupportScreen;