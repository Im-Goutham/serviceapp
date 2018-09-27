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
  


let back_arrow = require('../assets/icons/back-arrow.png');

class RegisterScreen extends Component {
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
                                           width: 54,
                                           height: 54,
                                           justifyContent: 'center',
                                           alignItems: 'flex-start'
                                       }}>
                                       <Image source={back_arrow} style={{width: '100%', height: 20,}}
                                              resizeMode="contain" resizeMethod="resize"/>
                                   </TouchableOpacity>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:54}}>

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
                                 <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 35,paddingLeft:20,paddingBottom:10}}>Sign Up</Text>

                      </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
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
                                        this.inputs['email'] = input;
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
                                        value={this.state.password}
                                        autoCapitalize='none'
                                        onSubmitEditing={() => {
                                            this.handleSubmit();
                                        }}
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
                        
                        <View style={{flex:4,borderBottomWidth: 1,borderColor:"rgb(217,213,220)",}}>
                        <TouchableOpacity 
                           style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}
                           onPress={() =>
                            ActionSheet.show({
                                    options: BUTTONS,
                                    cancelButtonIndex: CANCEL_INDEX,
                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                    title: "Select Code"
                                },
                                buttonIndex => {
                                this.setState({ clicked: BUTTONS[buttonIndex] });
                            }
                            )}
                           >
                            <View style={{flex:3,flexDirection:'row'}}>
                                <Image source={require('../assets/countries/India.png')} style={{ width: 30, height: 30}} resizeMode="contain" resizeMethod="resize"/>
                                <Text style={{color:'rgb(74,74,74)',fontSize:15,fontFamily:'Montserrat-Medium',paddingLeft:10,paddingTop:5}}>+ 91</Text>
                            </View>
                            <View style={{flex:1,}}>
                                <Image source={require('../assets/icons/arrow_down.png')} style={{ width: 10, height: 10}} resizeMode="contain" resizeMethod="resize"/>
                            </View>
                            </TouchableOpacity>
                        </View>
                            <View style={{flex:6,paddingLeft:10}}>
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
                        <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',borderColor:'red',paddingVertical:30}}>
                            <CheckBox checked={true} color='rgb(61,133,239)' style={{marginLeft:-10,marginTop:3,borderRadius:3,borderWidth:3}} onPress={()=>this.setState({checked: !checked})}/>
                            <Text style={{fontSize:16,paddingLeft:10}}>  I agree with the <Text 
                                style={{color:'#3E85EF',fontSize:16,fontFamily:'Montserrat-SemiBold'}}
                                onPress={()=>{this.props.navigation.navigate('terms')}}
                                >Terms & Conditions</Text></Text>
                       </View>

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
                       </View>
               </LinearGradient>

           </View>
       )
  }
}

const styles = StyleSheet.create({
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

export default RegisterScreen;
