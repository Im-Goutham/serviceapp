

import React, {Component} from 'react';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class GoogleSignIn extends Component {

signIn = async () => {
    console.log('came here')
    try {
        const user = await GoogleSignin.signIn();
        this.setState({ user });
    } catch (error) {
        if (error.code === 'CANCELED') {
        // user cancelled the login flow
        } else {
        // some other error happened
        }
    }
    };

  render() {
    return (
        <GoogleSigninButton
        style={{ width: 48, height: 48 }}
        size={GoogleSigninButton.Size.Icon}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn}/>
    );
  }
}
