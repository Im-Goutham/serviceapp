import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import Header from '../components/Header';

class ChatScreen extends Component {


    render() {
       return (
           <View style={{flex:1}}>
            <Header navigation={this.props.navigation}  title={'Chat'}/>
            <View style={styles.container}>
               <Text>ChatScreen</Text>
               <Text>ChatScreen</Text>
               <Text>ChatScreen</Text>
               <Text>ChatScreen</Text>
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

export default ChatScreen;