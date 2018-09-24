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


const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';
let border_img = require('../images/border_img.png');
let logo = require('../images/logo.png');

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



     contentrender(){
      let { checked } = this.state;
      return (
         <View style={{flex:1,paddingHorizontal:15,justifyContent:'space-around'}} >
             <View style={{flex:1.3,paddingVertical:20,justifyContent:'flex-end',alignItems:'flex-start'}}>
              <Image source={logo} style={{width:'100%',height: 40,marginLeft:-70}} resizeMode="contain" resizeMethod="resize"/>
             </View>
              <View style={[styles.loginBlox,{flex:4.9}]}>
              <View style={{flex:1,justifyContent:'space-around'}}>
              <View>
                 <Item floatingLabel>
                 <Label style={styles.inputLabel}>Email / User ID</Label>
                <Input
                    value={this.state.username}
                    autoCapitalize='none'
                    onSubmitEditing={() => {
                      this.focusNextField('password');
                    }}
                    returnKeyType={ "next" }
                    ref={ input => {
                      this.inputs['username'] = input;
                    }}
                    style={{marginVertical: 5}}
                    onChangeText={username => this.setState({ username })}
                    />
              </Item>
              </View>
              <View >
              <Item floatingLabel>
                 <Label style={styles.inputLabel}>Password</Label>
                <Input
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
                    style={{marginVertical: 5}}
                    onChangeText={password => this.setState({ password })}
                    />
              </Item>
              </View>
              </View>
              <View style={{flex:1,justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:"flex-start"}}>
                    <CheckBox checked={checked} color='rgb(61,133,239)' style={{marginLeft:-10,marginTop:3,borderRadius:3}} onPress={()=>this.setState({checked: !checked})}/>
                    <Text style={{marginLeft:20,fontSize:17,fontFamily: 'Montserrat-Regular',color:'rgb(74,74,74)'}}>Remember Me</Text>
              </View>
              <View style={{justifyContent: "center" }}>
                  {this.state.loading ? <ActivityIndicator color="#8E24AA" size="large" /> :
                    <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                       <TouchableOpacity onPress={() => {this.props.navigation.navigate('home')}}><Text style={styles.btnText}>SIGN IN</Text></TouchableOpacity>
                    </LinearGradient>
                  }
            </View>
            <Text style={styles.text} onPress={()=>{this.props.navigation.navigate('forgot')}}>Forgot ID/Password?</Text>
              </View>
               
            
              
      
                    
                 </View>
                  <View style={{flex:1.8,marginVertical:10,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                 <View style={{flex:1,paddingRight:10}}>
                      <FacebookLogin />
                 </View>
                 <View style={{flex:1,paddingLeft:10}}>
                      <GoogleSignIn/>
                 </View>
            </View>
        </View>
    )

  }


    render() {

      return (
               <LinearGradient
                   colors={['rgb(60, 139, 239)', 'rgb(60,187, 239)']}
                   start={{x: 0, y: 0}}
                   end={{x: 1, y: 0}}
                   style={{
                       flex: 1,

                   }}>
                  <View style={{flex:9}}>
                       {this.contentrender()}
                  </View>    
                  <View style={{flex:2}}>
                  <View style={{width:'100%'}}>
                              <Image source={border_img} style={{ width: '100%', height: Platform.OS==='ios'? 31 : 30}}/>
                                 <View style={{height:20, backgroundColor:"#F9FCFF"}}/>
                              </View>
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1,paddingHorizontal:20,paddingBottom:20,alignItems: 'center'}}>
                                   <Text style={{marginVertical:20,color:'#808080',fontSize:17,textAlign:'center',fontFamily:'Montserrat-Regular'}}>Don't have an account  <Text style={{fontWeight: 'bold',color:'#3581fc',fontFamily:'Montserrat-Bold'}} onPress={()=>{this.props.navigation.navigate('register')}}>Sign Up</Text></Text>
                        </View>
                  </View>  
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
        paddingHorizontal:10,
        paddingVertical: isAndroid ? 0 : 50,
        position:'relative'
    },
    borderImg: {width:width,height:40,bottom:-10,position:'absolute'},
    inputLabel: {color:'rgb(155,155,155)',
        textAlign:'left',
        fontSize: 17,
        marginBottom: 20,
        fontFamily:'Montserrat-Medium'
   },
    logoText: {
        color:'white',
        textAlign:'left',
        fontSize:45,
        fontWeight:'bold'
    },
   text: {
     fontSize: 15,
     color:'rgb(99,99,99)',
     textAlign:'center',
     marginVertical:15,
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
       borderRadius:30,
       borderColor: '#fff',
       marginTop:10,
       paddingTop:16,
       paddingBottom:16,
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.2,
       shadowRadius: 2,
       elevation: 3,
   },
   btnText: { 
       textAlign:'center',
       color:'white',
       fontSize:17,
       fontFamily:'Montserrat-Bold'
   },
   loginBlox: {
       flex:1,
       justifyContent:'space-between',
       borderRadius: 10,
       backgroundColor:'white',
       paddingHorizontal: 20,
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.2,
       shadowRadius: 2,
       elevation: 3,
   }
})

export default connect(null, actions)(LoginScreen);
