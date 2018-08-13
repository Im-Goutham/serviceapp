
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';

  import { pushNotifications } from '../services';


class NotificationScreen extends Component {

     handleOnPress = () => {
        pushNotifications.localNotification();
      };
     
    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'NotificationScreen'}/>
               <View style={styles.container}>
               <Text>NotificationScreen</Text>
               <Text>NotificationScreen</Text>
               <Text>NotificationScreen</Text>
               <Text>NotificationScreen</Text>
               <Button
                title={'Press Me'}
                onPress={this.handleOnPress.bind(this)}/>
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

export default NotificationScreen;