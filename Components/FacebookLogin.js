

import React, {Component} from 'react';
import { View, TouchableHighlight, StyleSheet,Text } from 'react-native'
import { Button ,Icon} from 'native-base'
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk'
import { Auth } from 'aws-amplify';


export default class FacebookLogin extends Component {


    handleFacebookLogin () {
      var self = this;
      LoginManager
        .logInWithReadPermissions(['public_profile'])
        .then(function (result) {
          if (result.isCancelled) {
            alert('Login cancelled');
          } else {
            AccessToken
              .getCurrentAccessToken()
              .then((data) => {
                console.log('token data is ',data);
              //  alert(accessToken.toString())
                let user = {};
                user.accessToken = data.accessToken;
                user.expiresIn = data.expirationTime;
                const responseInfoCallback = (error, result) => {
                  if (error) {
                    console.log(error)
                 //   alert('Error fetching data: ' + error.toString());
                  } else {
                    console.log('user data is ',result)
                    user.name = result.name;
                    self.facebookLogin(user);
                //    alert('Success fetching data: ' + result.toString());
                  }
                }

                const infoRequest = new GraphRequest('/me', {
                  accessToken: data.accessToken,
                  parameters: {
                    fields: {
                      string: 'email,name,first_name,middle_name,last_name'
                    }
                  }
                }, responseInfoCallback);

                // Start the graph request.
                new GraphRequestManager()
                  .addRequest(infoRequest)
                  .start()

              })
          }
        }, function (error) {
          alert('Login fail with error: ' + error);
        });
    }

    facebookLogin(user) {
     console.log(JSON.stringify(user));
      var data = {
       token: user.accessToken,
       expires: user.expiresIn,
       name: user.name
      }
      Auth.federatedSignIn('facebook', { token: data.token, expires_at: data.expires}, { name: data.name })
        .then(credentials => {
         console.log('get aws credentials', credentials);
           Auth.currentUserCredentials()
           .then(credentials => {
             console.log('Current user credentials are --- ',credentials);
           }).catch(err => {
             console.log('error in facebook signin --- ',err)
           });
          }).catch(e => {
           console.log('error in facebook signin --- ',e);
          });
  }
  render() {
    return (
            <TouchableHighlight style={styles.button} onPress={() => this.handleFacebookLogin()}><Text style={styles.btnText}> <Icon style={{color:'#fff',fontSize:22}} active name="logo-facebook" /> Facebook</Text></TouchableHighlight>
    );
  }
}




const styles = StyleSheet.create({
    button:{
      backgroundColor:'#3B5B95',
      width: '100%',
      borderRadius:30,
      paddingTop:15,
      paddingBottom:15,
      marginTop: 5,
      marginBottom: 5,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
    },
    btnText: { 
      fontSize: 18,
      textAlign :'center',
      color:'white',
      fontWeight:'bold'
    }
})
