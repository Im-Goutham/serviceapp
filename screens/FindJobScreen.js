
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';


class FindJobScreen extends Component {
  
    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'FindJob'}/>
               <View style={styles.container}>
               <Text>FindJobScreen</Text>
               <Text>FindJobScreen</Text>
               <Text>FindJobScreen</Text>
               <Text>FindJobScreen</Text>
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

export default FindJobScreen;