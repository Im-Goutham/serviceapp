

import React, {Component} from 'react';
import { View, TouchableOpacity } from 'react-native'
import { Button ,Icon} from 'native-base'
import { LoginManager } from 'react-native-fbsdk'

export default class FacebookLogin extends Component {
  handleFacebookLogin () {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          console.log('Login success with permissions: ' + result.grantedPermissions.toString())
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error)
      }
    )
  }
  render() {
    return (
      <View>
      <TouchableOpacity onPress={this.handleFacebookLogin}>
       <Icon name='logo-facebook' />
     </TouchableOpacity>
     </View>
    );
  }
}
