

import React, {Component} from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class FacebookLogin extends Component {
  render() {
    return (
      <LoginButton
          readPermissions={["public_profile email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
    );
  }
}
