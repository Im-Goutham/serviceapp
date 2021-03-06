import React, { Component } from 'react';
import {  StyleSheet, Text, View, TouchableOpacity, Platform, Image } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import { Auth } from 'aws-amplify';
import {scale} from '../global';


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
        <TouchableOpacity style={styles.button} onPress={() => this._signIn()}>
         <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

            <Image source={require('../assets/icons/gmail_transparent.png')} style={{ width: scale(30), height: scale(30)}} resizeMode="contain" resizeMethod="resize"/>

               <Text style={styles.btnText}>Gmail</Text>

         </View>
         </TouchableOpacity>
      );
  }

  _signIn = async () => {
    console.log('_signIn is ');
    try {
      const user = await GoogleSignin.signIn();
      console.log('user is ',user);
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
    borderRadius:scale(30),
    paddingTop:scale(12),
    paddingBottom:scale(12),
    marginTop: scale(5),
    marginBottom: scale(5),
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  btnText: {
    paddingHorizontal:scale(10),
    fontSize: scale(16),
    textAlign :'left',
    color:'white',
    fontFamily:'Montserrat-bold'
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
