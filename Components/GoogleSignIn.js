import React, { Component } from 'react';
import {  StyleSheet, Text, View, TouchableHighlight, Platform } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { Auth } from 'aws-amplify';

export default class GoogleSigninSampleApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null,
    };
  }

  async componentDidMount() {
    await this._configureGoogleSignIn();
    await this._getCurrentUser();
  }

  async _configureGoogleSignIn() {
    await GoogleSignin.hasPlayServices({ autoResolve: true });
    const configPlatform = {
      ...Platform.select({
        ios: {
          iosClientId: '954330942455-5742nq1qk0aifalcs26h3ee1kc7b216b.apps.googleusercontent.com',
        },
        android: {},
      }),
    };

    await GoogleSignin.configure({
      ...configPlatform,
      webClientId: '954330942455-t5gdbb0hc7rla4u7bsrotvdp6kvpd27c.apps.googleusercontent.com',
      offlineAccess: false,
    });
  }

  async _getCurrentUser() {
    try {
      const user = await GoogleSignin.currentUserAsync();
      this.setState({ user, error: null });
    } catch (error) {
      this.setState({
        error,
      });
    }
  }


    googleSignIn = (response) => {
    
      var data = {
        token: response.accessToken,
        expires: response.accessTokenExpirationDate,
        name: response.name
      }
      console.log('data before google login ',data);
      Auth.federatedSignIn('google', { token: data.token, expires_at: data.expires}, { name: data.name })
      .then(credentials => {
        console.log('get aws credentials', credentials);
        Auth.currentUserCredentials()
        .then(credentials => {
          console.log('Current user credentials are for google login --- ',credentials);
        }).catch(err => {
          console.log('error in google signin --- ',err)
        });
      }).catch(e => {
        console.log('error in google signin --- ',e);
      });
    }
  

  render() {
      return (
        <TouchableHighlight style={styles.button} onPress={() => {alert('clicked')}}><Text style={styles.btnText}>Sign in with Gmail</Text></TouchableHighlight>
      );
  }

  _signIn = async () => {
    try {
      const user = await GoogleSignin.signIn();
      this.setState({ user, error: null });
      this.googleSignIn(user);

    } catch (error) {
      if (error.code === 'CANCELED') {
        error.message = 'user canceled the login flow';
      }
      this.setState({
        error,
      });
    }
  };

  _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null });
    } catch (error) {
      this.setState({
        error,
      });
    }
  };
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'#DC493D',
    width: '100%',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#fff',
    paddingTop:10,
    paddingBottom:10,
    marginTop: 5,
    marginBottom: 5
  },
  btnText: { 
    textAlign :'center',
    color:'white',
    fontWeight:'bold'
  }
});


// <View>
// <GoogleSigninButton
//   style={{ width: 48, height: 48 }}
//   size={GoogleSigninButton.Size.Standard}
//   color={GoogleSigninButton.Color.Auto}
//   onPress={this._signIn}
// />
// {error && (
//   <Text>
//     {error.toString()} code: {error.code}
//   </Text>
// )}
// </View>