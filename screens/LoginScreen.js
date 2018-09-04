import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image,Platform, ScrollView, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {  Item, Input, CheckBox, Toast } from 'native-base';
import * as actions from '../actions';
import { Auth } from 'aws-amplify';
import FacebookLogin from '../components/FacebookLogin';
import GoogleSignIn from '../components/GoogleSignIn';
import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

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
         <ScrollView contentContainerStyle={{
      flex: 1,
      justifyContent: 'space-between'
  }}>
          <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.section1}>
   
            <View style={{flex:7,justifyContent:'center',padding:10}}>
            <View style={{paddingVertical:20}}><Text style={styles.logoText}>SpotJobs</Text></View>
              <View style={styles.loginBlox}>
                 <Text style={styles.inputLabel}>EMAIL / USER ID</Text>
                <Item success={'#3E85EF'}>
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
                    onChangeText={username => this.setState({ username })}
                    />
              </Item>
              <Text style={styles.inputLabel}>PASSWORD</Text>
              <Item>
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
                    onChangeText={password => this.setState({ password })}
                    />
              </Item>
              <View style={{marginBottom: 10,marginTop: 10,flexDirection:'row'}}>
                    <CheckBox checked={checked} color='#666666' onPress={()=>this.setState({checked: !checked})}/> 
                    <Text style={{marginLeft:20}}>Remember Me</Text>
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
            <View style={{flex:2,flexDirection:'row',alignItems:'center'}}>
                 <View style={{flex:1,paddingHorizontal:10}}>
                      <FacebookLogin />
                 </View>
                 <View style={{flex:1,paddingHorizontal:10}}>
                      <GoogleSignIn/>
                 </View>
            </View>
            <Image style={styles.borderImg} source={require('../images/border_img.png')}/>
          </LinearGradient>
          <View style={styles.signUpBlock}>
              <Text style={{marginVertical:20,color:'#808080',fontSize:17,textAlign:'center'}}>Dont have an account  <Text style={{fontWeight: 'bold',color:'#3581fc'}} onPress={()=>{this.props.navigation.navigate('register')}}>Sign Up</Text></Text>
            </View>
        </ScrollView>
        </View>
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
    inputLabel: {
      textAlign:'left',
      fontSize: 12,
      color:'#666666',
   },
    logoText: {
        color:'white',
        textAlign:'left',
        fontSize:45,
        fontWeight:'bold'
    },
   text: {
     fontSize: 16,
     color:'#666666',
     textAlign:'center',
     marginVertical:15
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
       borderWidth: 1,
       borderColor: '#fff',
       marginTop:10,
       paddingTop:16,
       paddingBottom:16,
   },
   btnText: { 
       textAlign:'center',
       color:'white',
       fontSize: 16,
       fontWeight:'bold'
   },
   loginBlox: {
       flex:1,
       elevation: 3,
       justifyContent:'space-between',
       borderRadius: 10,
       backgroundColor:'white',
       padding: 20
   }
})

export default connect(null, actions)(LoginScreen);
