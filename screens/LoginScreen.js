import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableHighlight, Image} from 'react-native';
import { connect } from 'react-redux';
import {  Item, Input, CheckBox, Toast } from 'native-base';
import * as actions from '../actions';
import { Auth } from 'aws-amplify';
import FacebookLogin from '../components/FacebookLogin';
import GoogleSignIn from '../components/GoogleSignIn';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', error: null, loading: false, checked: true };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }


  componentDidMount(){
     console.log('login screen is called ...');
  }

    focusNextField(id) {
        this.inputs[id]._root.focus();
    }



     handleSubmit = async () => {
     let {username , password} = this.state;


     if(!username){
           this.handleError("Username is required!")
           return false;
     }
     if(!password){
          this.handleError("Password is required!")
           return false;
     }
     this.setState({ error: null, loading: true });

     console.log('username is '+username,'password is ',password);
     Auth.signIn(username, password)
       .then(data => {
           console.log('data is ',data);
           Auth.currentUserCredentials()
           .then(credentials => {
             console.log('Current user credentials are --- ',credentials);
             this.props.navigation.navigate('home')
             this.setState({ loading: false });
           }).catch(err => {
             console.log('error in signin --- ',err)
             this.setState({ loading: false });
           });
       })
       .catch(err => {
         console.log('err is ',err );
       });
    //  try {
    //      let data = {username:this.state.username,password:this.state.password};
    //      this.props.signIn(data, () => {
    //          this.props.navigation.navigate('main');
    //      }).catch(error => {
    //        return error;
    //      });
    //    this.props.navigation.navigate('home')
    //    this.setState({ loading: false });
    //  } catch (err) {
    //    this.setState({ error: 'Something went wrong', loading: false });
    //  }
   }


   handleError(error){
     Toast.show({
               text: error,
               buttonText: "Okay",
               type: "danger"
         })
   }


    render() {
      let { checked } = this.state;
      return (  
        <View style={styles.container}>
        <View style={styles.logoContainer}>
            <View style={{flex: 1}}>
            <Image source={require('../images/logo.png')} style={styles.logo}/>
             </View> 
             <View style={{flex: 1}}>
                <Text style={{fontSize: 20,textAlign: 'center',color: '#666666'}}>Semper est ante cras sagitis himenaeos sem</Text>
             </View> 
        </View>  
        <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>EMAIL / USER ID</Text>
        <Item>
              <Input
                  style={styles.inputField}
                  value={this.state.username}
                  autoCapitalize='none'
                  onSubmitEditing={() => {
                    this.focusNextField('password');
                  }}
                  returnKeyType={ "next" }
                  ref={ input => {
                    this.inputs['username'] = input;
                  }}
                  onChangeText={username => this.setState({ username })}
                  />
            </Item>
            <Text style={styles.inputLabel}>PASSWORD</Text>
            <Item>
              <Input
                  style={styles.inputField}
                  value={this.state.password}
                  autoCapitalize='none'
                  secureTextEntry={true}
                  onSubmitEditing={() => {
                      this.handleSubmit()
                  }}
                  returnKeyType={ "done" }
                  ref={ input => {
                    this.inputs['password'] = input;
                  }}
                  onChangeText={password => this.setState({ password })}
                  />
            </Item>
            <View style={{marginBottom: 10,marginTop: 10,flexDirection:'row'}}>
                   <CheckBox checked={checked} color='grey' onPress={()=>this.setState({checked: !checked})}/> 
                   <Text style={{marginLeft:20}}>Remember Me</Text>
            </View>  
            <View style={{justifyContent: "center" }}>
                {this.state.loading ? <ActivityIndicator color="#8E24AA" size="large" /> :
               <TouchableHighlight style={styles.button} onPress={() => this.handleSubmit()}><Text style={styles.btnText}>SIGN IN</Text></TouchableHighlight>
                }
           </View>
         <Text style={styles.text} onPress={()=>{this.props.navigation.navigate('forgot')}}>Forgot ID/Password?</Text>  
        </View>  
        <View style={styles.socialLoginContainer}>
        <View style={{flex: 1}}>
             <Text style={{textAlign: 'center'}}>Or</Text>
        </View>  
        <View style={{flex: 2}}>
                <FacebookLogin/>
                <GoogleSignIn />
        </View> 
        <View style={{flex: 1}}>
        <Text style={{marginBottom:10,marginTop:10,textAlign: 'center'}}>Don't have an account  <Text style={{fontWeight: 'bold'}} onPress={()=>{this.props.navigation.navigate('register')}}>Sign up</Text></Text>
        </View>       
        </View> 
        </View>

      );
    }
}


const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'white',
          paddingTop: 50
      },
      logoContainer: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
      },
      logo: {
        width: 80,
        height: 80
      },
      inputContainer: {
          flex: 3,
          justifyContent: 'center',
          padding: 10
      },
      inputLabel: {
         textAlign:'left',
         fontSize: 12
      },
      inputField: {
          height: 40,
          borderRadius:20,
          backgroundColor: '#F2F2F2',
          paddingLeft : 15,
          paddingRight : 15,
          marginTop: 10,
          marginBottom: 10
      },
      orBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      socialLoginContainer: {
          flex: 2,
          padding: 10
      },
      text: {
        marginBottom: 15,
        marginTop: 15,
        fontSize: 15,
        textAlign: 'center',
      },
      button:{
        backgroundColor:'#4A4A4A',
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
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    }
})

export default connect(null, actions)(LoginScreen);
