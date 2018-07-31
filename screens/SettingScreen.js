
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';


class SettingScreen extends Component {
  
    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Settings'}/>
               <View style={styles.container}>
               <Text>SettingScreen</Text>
               <Text>SettingScreen</Text>
               <Text>SettingScreen</Text>
               <Text>SettingScreen</Text>
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

export default SettingScreen;