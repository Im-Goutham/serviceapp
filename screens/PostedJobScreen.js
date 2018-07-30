
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';


class PostedJobScreen extends Component {
  
    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'PostedJob'}/>
               <View style={styles.container}>
               <Text>PostedJobScreen</Text>
               <Text>PostedJobScreen</Text>
               <Text>PostedJobScreen</Text>
               <Text>PostedJobScreen</Text>
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

export default PostedJobScreen;