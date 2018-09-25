import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image,ScrollView,Platform, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {  Item, Input, CheckBox, Toast,Icon,Label, ActionSheet,Button } from 'native-base';
import * as actions from '../actions';
import { Auth } from 'aws-amplify';
import FacebookLogin from '../components/FacebookLogin';
import GoogleSignIn from '../components/GoogleSignIn';
// import ActionSheet from 'react-native-actionsheet';
import FloatingLabelInput from '../components/FloatingLabelInput';


import Header from '../components/goBackHeader';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

var BUTTONS = [
  { text: "+91 INDIA"},
  { text: "+1 USA"},
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class SignUp extends Component {

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
      <ScrollView style={styles.container}>
          <View style={styles.inputField}>
          <FloatingLabelInput
                            label="Email"
                            value={this.state.email}
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
                            onChangeText={email => this.setState({ email })}
                            />
                            
             
            </View>
             <View style={styles.inputField}>
             <FloatingLabelInput
                            label="User ID"
                            value={this.state.username}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                                this.handleSubmit();
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                                this.inputs['username'] = input;
                            }}
                            onChangeText={username => this.setState({ username })}
                            style={{marginVertical: 5}}
                            />
            </View>
             <View style={styles.inputField}>
                  <FloatingLabelInput
                            label="Password"
                            value={this.state.username}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                                this.handleSubmit();
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                                this.inputs['username'] = input;
                            }}
                            onChangeText={username => this.setState({ username })}
                            style={{marginVertical: 5}}
                            secureTextEntry={true}
                            />
            </View>
            <View style={styles.inputField}>
            <FloatingLabelInput
                            label="Confirm Password"
                            value={this.state.cfrmPassword}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                                this.handleSubmit();
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                                this.inputs['cfrmPassword'] = input;
                            }}
                            onChangeText={cfrmPassword => this.setState({ cfrmPassword })}
                            style={{marginVertical: 5}}
                            secureTextEntry={true}
                            />
            </View>
            <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                <TouchableOpacity
                    style={{
                        width:'30%',
                        paddingRight:10,
                        borderBottomWidth: 1,
                        // backgroundColor:"#009933",
                        borderColor:"rgb(235,236,241)",
                        flexDirection:"row",
                        justifyContent:"space-around",
                        alignItems: 'center',
                        height:54,
                        marginTop:8
                    }}
                    onPress={() =>
                        ActionSheet.show({
                                options: BUTTONS,
                                cancelButtonIndex: CANCEL_INDEX,
                                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                title: "Testing ActionSheet"
                            },
                            buttonIndex => {
                            this.setState({ clicked: BUTTONS[buttonIndex] });
                        }
                        )}>
                    <Text style={{fontSize:15}}>+91</Text>
                    <Image source={require('../assets/icons/arrow_down.png')} style={{ width: 10, height: 10}} resizeMode="contain" resizeMethod="resize"/>
                </TouchableOpacity>
                <View style={{width:'70%',paddingLeft:10}}>
                <FloatingLabelInput
                            label="Mobile Number"
                            value={this.state.mobile}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                                this.handleSubmit();
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                                this.inputs['mobile'] = input;
                            }}
                            onChangeText={mobile => this.setState({ mobile })}
                            style={{marginVertical: 5}}
                            />
                </View>
            </View>
            <Text style={{textAlign:'right',color:'#3E85EF',fontSize:16,fontFamily:'Montserrat-SemiBold'}}>Verify</Text>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('terms');}}><Text style={{fontSize:16,paddingVertical: 30}}>  I agree with the <Text style={{color:'#3E85EF',fontSize:16,fontFamily:'Montserrat-SemiBold'}}>Terms & Conditions</Text></Text></TouchableOpacity>
            <View style={{justifyContent: "center",marginBottom:20 }}>
                {
                    this.state.loading
                        ?
                        <ActivityIndicator color="#8E24AA" size="large" />
                        :
                        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('profile');}}><Text style={styles.btnText}>SIGN UP</Text></TouchableOpacity>
                        </LinearGradient>
                }
                </View>
            <View style={[styles.socialBox,{marginBottom:30}]}>
                <View style={{flex:1,paddingHorizontal:10}}>
                    <FacebookLogin />
                </View>
                <View style={{flex:1,paddingHorizontal:10}}>
                    <GoogleSignIn/>
                </View>
            </View>

      </ScrollView>
    );
  }

}


var styles = StyleSheet.create({
   container: {
        paddingHorizontal:20,
        marginBottom:20,
        backgroundColor:"rgb(249,252,255)",
    },
    logoText: {
        color:'white',
        textAlign:'left',
        fontSize:35,
        fontWeight:'bold'
    },
    inputLabel: {
        color:'rgb(155,155,155)',
        textAlign:'left',
        fontSize: 18,
        marginBottom: 20
    },
    inputField: {
        marginVertical: 14
    },
    borderImg: {
        width:width,
        height:40,
        bottom:-10,
        position:'absolute'
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
    socialBox:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        marginVertical: 20,
        paddingVertical: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    }
  })

export default connect(null, actions)(SignUp);