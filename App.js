

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { LoginButton } from 'react-native-fbsdk';


export default class App extends Component {
  render() {
    return (
      <View>
      <LoginButton
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("Login failed with error: " + error.message);
            } else if (result.isCancelled) {
              alert("Login was cancelled");
            } else {
              alert("Login was successful with permissions: " + result.grantedPermissions)
            }
          }
        }
        onLogoutFinished={() => alert("User logged out")}/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
