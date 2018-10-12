import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image,Platform, ScrollView, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {  Item, Input, CheckBox, Toast, Label } from 'native-base';
import * as actions from '../actions';
import { Auth } from 'aws-amplify';
import FacebookLogin from '../components/FacebookLogin';
import GoogleSignIn from '../components/GoogleSignIn';
import LinearGradient from 'react-native-linear-gradient';
import Header from "../components/Header";
import FloatingLabelInput from '../components/FloatingLabelInput';

const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';
import {scale} from '../global';

let border_img = require('../images/border_img.png');
let logo = require('../images/logo.png');

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', error: null, loading: false, checked: true };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
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
           console.log('data after login is ',data);
           Auth.currentUserCredentials()
           .then(credentials => {
             console.log('Current user credentials are --- ',credentials);
             this.props.navigation.navigate('home');
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



     contentrender(){
      let { checked } = this.state;
      return (
         <View style={{flex:1,paddingHorizontal:scale(15),justifyContent:'space-around'}} >
             <View style={{flex:1.6,paddingVertical:scale(20),justifyContent:'flex-end',alignItems:'flex-start'}}>
              <Image source={logo} style={{width:scale(220),height: scale(40)}} resizeMode="contain" resizeMethod="resize"/>
             </View>
              <View style={[styles.loginBlox,{flex:3.0}]}>
              <View style={{flex:1,justifyContent:'space-around'}}>
              <View>
              <FloatingLabelInput
                            testID='username'
                            label="Email / User ID"
                            value={this.state.username}
                            autoCapitalize='none'
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['username'] = input;
                            }}
                            onChangeText={username => this.setState({ username })}
                            />
                 
              </View>
              <View>
              <FloatingLabelInput
                            testID='password'
                            label="Password"
                            value={this.state.password}
                            autoCapitalize='none'
                            secureTextEntry={true}
                            returnKeyType={ "done" }
                            ref={ input => {
                              this.inputs['password'] = input;
                            }}
                            style={{marginVertical: scale(5),flex:1}}
                            onChangeText={password => this.setState({ password })}
                            />
                   
              </View>
              </View>
              <View style={{flex:1,justifyContent:'space-around'}}>
              <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:"flex-start"}}>
                    <CheckBox checked={checked} color='rgb(61,133,239)' style={{marginLeft:scale(-10),marginTop:scale(3),borderRadius:scale(3)}} onPress={()=>this.setState({checked: !checked})}/>
                    <Text style={{marginLeft:scale(20),marginTop:scale(3),fontSize:scale(17),fontFamily: 'Montserrat-Regular',color:'rgb(74,74,74)'}}>Remember me</Text>
              </View>
              <View style={{justifyContent: "center" }}>
                  {this.state.loading ? <ActivityIndicator color="#8E24AA" size="large" /> :
                  <TouchableOpacity testID='signInButton' onPress={() => { this.props.navigation.navigate('home');}}>
                    <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                       <Text style={styles.btnText}>SIGN IN</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                  }
            </View>
            <Text testID='forgetButton' style={styles.text} onPress={()=>{this.props.navigation.navigate('forgot')}}>Forgot ID/Password?</Text>
              </View> 
                 </View>
                  <View style={{flex:1.8,marginTop:scale(20),flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start'}}>
                 <View style={{flex:1,paddingRight:scale(10)}}>
                      <FacebookLogin />
                 </View>
                 <View style={{flex:1,paddingLeft:scale(10)}}>
                      <GoogleSignIn/>
                 </View>
            </View>
        </View>
    )

  }


    render() {

      return (
        <LinearGradient
        colors={['#3E85EF', '#3EBDEF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
            flex: 1,

        }}>
           <ScrollView contentContainerStyle={{flexGrow:1}}>
         
                  <View style={{flex:9}}>
                       {this.contentrender()}
                  </View>    
                  <View style={{flex:2}}>
                  <View style={{width:'100%'}}>
                          <Image source={require('../images/border_img.png')} style={{ 
                      width: '100%', 
                      height: Platform.OS==='ios'? 
                      height > 800 ? scale(31): height > 580 ? scale(37) :  scale(31)
                      : scale(35)
                      }}  resizeMode="contain" resizeMethod="resize" />
                              </View>
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1,alignItems: 'center'}}>
                                   <Text style={{marginVertical:scale(20),color:'#4A4A4A',fontSize:scale(17),textAlign:'center',fontFamily:'Montserrat-Regular'}}>Don't have an account? <Text style={{color:'#3E85EF',fontFamily:'Montserrat-Bold'}} onPress={()=>{this.props.navigation.navigate('register')}}>Sign Up</Text></Text>
                        </View>
                  </View>  
               </ScrollView>
         </LinearGradient>
      );
    }
}


const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'white',
      },
      section1: {
        flex:10, 
        backgroundColor:'white',
        paddingHorizontal:scale(10),
        paddingVertical: isAndroid ? 0 : scale(50),
        position:'relative'
    },
    borderImg: {width:width,height:scale(40),bottom:scale(-10),position:'absolute'},
    inputLabel: {color:'rgb(155,155,155)',
        textAlign:'left',
        fontSize: scale(17),
        marginBottom: scale(20),
        fontFamily:'Montserrat-Medium'
   },
    logoText: {
        color:'white',
        textAlign:'left',
        fontSize:scale(45),
        fontFamily: 'Montserrat-Bold',
    },
   text: {
     fontSize: scale(15),
     color:'rgb(99,99,99)',
     textAlign:'center',
     marginVertical:scale(15),
       fontFamily:'Montserrat-Medium'
   },
   signUpBlock: {
       flex:2,
       flexDirection:'column',
       justifyContent: 'center',
       backgroundColor:'#F9FCFF',
   },
   button:{
       backgroundColor:'#4A4A4A',
       width: '100%',
       borderRadius:scale(30),
       borderColor: '#fff',
       marginTop:scale(10),
       paddingTop:scale(16),
       paddingBottom:scale(16),
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.2,
       shadowRadius: 2,
       elevation: 3,
   },
   btnText: { 
       textAlign:'center',
       color:'white',
       fontSize:scale(17),
       fontFamily:'Montserrat-Bold'
   },
   loginBlox: {
       flex:1,
       justifyContent:'space-between',
       borderRadius: scale(10),
       backgroundColor:'white',
       paddingHorizontal: scale(20),
       shadowOffset: { width: 0, height: scale(2) },
       shadowOpacity: 0.2,
       shadowRadius: 2,
       elevation: 3,
   },
   inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: scale(10),
  },
})

export default connect(null, actions)(LoginScreen);
