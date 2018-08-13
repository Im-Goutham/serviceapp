
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class EditProfileScreen extends Component {

  
    render() {
       return (
          <View style={styles.container}>
               <Text>EditProfileScreen</Text>
               <Text>EditProfileScreen</Text>
               <Text>EditProfileScreen</Text>
               <Text>EditProfileScreen</Text>
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

export default EditProfileScreen;