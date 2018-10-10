import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
    Dimensions
} from 'react-native';
import {  Item, Input, CheckBox, Toast,Icon,Label, ActionSheet,Button } from 'native-base';
import * as actions from '../actions';
import { Auth } from 'aws-amplify';
import FacebookLogin from '../components/FacebookLogin';
import GoogleSignIn from '../components/GoogleSignIn';
import OptionsMenu from "react-native-options-menu";
import FloatingLabelInput from '../components/FloatingLabelInput';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import HeaderScreen from './HeaderScreen';

const { width, height } = Dimensions.get('window');

var BUTTONS = [
    { text: "+91 INDIA"},
    { text: "+1 USA"},
    { text: "Cancel", icon: "close", iconColor: "#25de5b" }
  ];
  var DESTRUCTIVE_INDEX = 3;
  var CANCEL_INDEX = 4;
  

import {scale} from '../global';

let back_arrow = require('../assets/icons/arrow_left.png');

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', userId: '', password: '', cfrmPassword:'', error: null, loading: false, checked: true };
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
    }
  
    focusNextField(id) {
        this.inputs[id]._root.focus();
    }
    handleSubmit = async () => {
        this.props.navigation.navigate('profile');
         // let {email , password} = this.state;
         // if(!email){
         //     this.handleError("Username is required!")
         //     return false;
         // }
         // if(!password){
         //     this.handleError("Password is required!")
         //     return false;
         // }
         // this.setState({ error: null, loading: true });
         // Auth.signUp({
         //     username: 'Goutham.m12',
         //     password: 'Goutham@123',
         //     attributes: {
         //         name: 'Goutham Moka2',
         //         email: 'goutham.moka1222@gmail.com'
         //     }
         // }).then(data => console.log(data))
         //     .catch(err => console.log(err));
         // this.props.navigation.navigate('profile')
//         console.log('username is '+email,'password is ',password);
//         Auth.signIn(email, password)
//             .then(data => {
//                 console.log('data is ',data);
//             }
//             Auth.currentUserCredentials()
//                 .then(credentials => {
//                     console.log('Current user credentials are --- ',credentials);
//                     this.props.navigation.navigate('home')
//                     this.setState({ loading: false });
//                 }).catch(err => {
//                     console.log('error in signin --- ',err)
//                 this.setState({ loading: false });
//                 });
//     })
// .catch(err => {
//     console.log('err is ',err );
// });
//         try {
//             let data = {username:this.state.username,password:this.state.password};
//             this.props.signIn(data, () => {
//                 this.props.navigation.navigate('main');
//             }).catch(error => {
//                 return error;
//             });
//             this.props.navigation.navigate('home')
//             this.setState({ loading: false });
//         } catch (err) {
//             this.setState({ error: 'Something went wrong', loading: false });
//         }
    }
    handleError(error){
        Toast.show({
            text: error,
            buttonText: "Okay",
            type: "danger"
        })
    }
    showActionSheet = () => {
        this.ActionSheet.show()
    }

    render() {
       return (
           <View style={{flex:1}}>
               <LinearGradient
                   colors={['#3E85EF', '#3EBDEF']}
                   start={{x: 0, y: 0}}
                   end={{x: 1, y: 0}}
                   style={{
                       flex: 1
                   }}>
                   <HeaderScreen
                       header={
                           <Header
                               navigation={this.props.navigation}
                               left ={
                                   <TouchableOpacity
                                       onPress={() => this.props.navigation.navigate('login')}
                                       style={{
                                           width: scale(54),
                                           height: scale(54),
                                           justifyContent: 'center',
                                           alignItems: 'flex-start'
                                       }}>
                                       <Image source={back_arrow} style={{width: '100%', height: scale(20)}}
                                              resizeMode="contain" resizeMethod="resize"/>
                                   </TouchableOpacity>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:scale(54)}}>

                               </View>
                               }
                               right={
                                   <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>

                                   </View>
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between"}}>
                                 <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(35),paddingLeft:scale(20),paddingBottom:scale(10)}}>Sign Up</Text>

                      </View>
                       }
                   />
       
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                   
                   <ScrollView style={styles.container}>
                    <View style={styles.inputField}>
                    <FloatingLabelInput
                                        testID='email'
                                        label="Email"
                                        value={this.state.email}
                                        autoCapitalize='none'
                                        returnKeyType={ "done" }
                                        ref={ input => {
                                        this.inputs['email'] = input;
                                        }}
                                        style={{marginVertical: scale(5)}}
                                        onChangeText={email => this.setState({ email })}
                                        />
                                        
                        
                        </View>
                        <View style={styles.inputField}>
                        <FloatingLabelInput
                                        testID='userId'
                                        label="User ID"
                                        value={this.state.userId}
                                        autoCapitalize='none'
                                        returnKeyType={ "next" }
                                        ref={ input => {
                                            this.inputs['userId'] = input;
                                        }}
                                        onChangeText={userId => this.setState({ userId })}
                                        style={{marginVertical: scale(5)}}
                                        />
                        </View>
                        <View style={styles.inputField}>
                            <FloatingLabelInput
                                        testID='password'
                                        label="Password"
                                        value={this.state.password}
                                        autoCapitalize='none'
                                        returnKeyType={ "next" }
                                        ref={ input => {
                                            this.inputs['password'] = input;
                                        }}
                                        onChangeText={password => this.setState({ password })}
                                        style={{marginVertical: 5}}
                                        secureTextEntry={true}
                                        />
                        </View>
                        <View style={styles.inputField}>
                        <FloatingLabelInput
                                        testID='cfrmPassword'
                                        label="Confirm Password"
                                        value={this.state.cfrmPassword}
                                        autoCapitalize='none'
                                        returnKeyType={ "next" }
                                        ref={ input => {
                                            this.inputs['cfrmPassword'] = input;
                                        }}
                                        onChangeText={cfrmPassword => this.setState({ cfrmPassword })}
                                        style={{marginVertical: scale(5)}}
                                        secureTextEntry={true}
                                        />
                        </View>
                        <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                        
                        <View style={{flex:4,borderBottomWidth: 1,borderColor:"rgb(217,213,220)",}}>
                        <TouchableOpacity 
                           style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}
                           onPress={() =>
                            ActionSheet.show({
                                    options: BUTTONS,
                                    cancelButtonIndex: CANCEL_INDEX,
                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                    title: ""
                                },
                                buttonIndex => {
                                this.setState({ clicked: BUTTONS[buttonIndex] });
                            }
                            )}
                           >
                            <View style={{flex:3,flexDirection:'row'}}>
                                <Image source={require('../assets/countries/India.png')} style={{ width: scale(30), height: scale(30)}} resizeMode="contain" resizeMethod="resize"/>
                                <Text style={{color:'rgb(74,74,74)',fontSize:scale(15),fontFamily:'Montserrat-Medium',paddingLeft:scale(10),paddingTop:scale(5)}}>+ 91</Text>
                            </View>
                            <View style={{flex:1,}}>
                                <Image source={require('../assets/icons/arrow_down.png')} style={{ width: scale(10), height: scale(10)}} resizeMode="contain" resizeMethod="resize"/>
                            </View>
                            </TouchableOpacity>
                        </View>
                            <View style={{flex:6,paddingLeft:scale(10)}}>
                            <FloatingLabelInput
                                        label="Mobile Number"
                                        value={this.state.mobile}
                                        autoCapitalize='none'
                                        returnKeyType={ "next" }
                                        ref={ input => {
                                            this.inputs['mobile'] = input;
                                        }}
                                        onChangeText={mobile => this.setState({ mobile })}
                                        style={{marginVertical: scale(5)}}
                                        />
                            </View>
                        </View>
                        <Text style={{textAlign:'right',color:'#3E85EF',fontSize:scale(16),fontFamily:'Montserrat-SemiBold'}}>Verify</Text>
                        <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',borderColor:'red',paddingVertical:scale(30)}}>
                            <CheckBox checked={this.state.checked} color='#3E85EF' style={{marginLeft:scale(-10),marginTop:scale(3),borderRadius:scale(3),borderWidth:scale(3)}} onPress={()=>this.setState({checked: !this.state.checked})}/>
                            <Text style={{fontFamily:'Montserrat-Regular',color:'#4A4A4A',fontSize:scale(16),paddingLeft:scale(10),paddingTop:scale(3)}}>  I agree to the <Text 
                                style={{color:'#3E85EF',fontSize:scale(16),fontFamily:'Montserrat-Bold'}}
                                onPress={()=>{this.props.navigation.navigate('terms')}}
                                >Terms & Conditions</Text></Text>
                       </View>

                        <View style={{justifyContent: "center",marginBottom:scale(20) }}>
                            {
                                this.state.loading
                                    ?
                                    <ActivityIndicator color="#8E24AA" size="large" />
                                    :
                                    <TouchableOpacity testID='signUpButton' onPress={() => {this.props.navigation.navigate('profile');}}>
                                    <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                                       <Text style={styles.btnText}>SIGN UP</Text>
                                    </LinearGradient>
                                    </TouchableOpacity>
                            }
                            </View>
                        <View style={[styles.socialBox,{marginBottom:scale(30)}]}>
                            <View style={{flex:1,paddingHorizontal:scale(10)}}>
                                <FacebookLogin />
                            </View>
                            <View style={{flex:1,paddingHorizontal:scale(10)}}>
                                <GoogleSignIn/>
                            </View>
                        </View>

                </ScrollView>
                       </View>
               </LinearGradient>

           </View>
       )
  }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:scale(20),
        marginBottom:scale(20),
        backgroundColor:"rgb(249,252,255)",
    },
    logoText: {
        color:'white',
        textAlign:'left',
        fontSize:scale(35),
        fontFamily:'Montserrat-bold'
    },
    inputLabel: {
        color:'rgb(155,155,155)',
        textAlign:'left',
        fontSize: scale(18),
        marginBottom: scale(20)
    },
    inputField: {
        marginVertical: scale(14)
    },
    borderImg: {
        width:width,
        height:scale(40),
        bottom:scale(-10),
        position:'absolute'
    },
    text: {
        marginBottom: scale(15),
        marginTop: scale(15),
        fontSize: scale(15),
        textAlign: 'center',
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
    socialBox:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:scale(10),
        marginVertical: scale(20),
        paddingVertical: scale(10),
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    }
})

export default RegisterScreen;
