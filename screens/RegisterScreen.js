import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableHighlight, Image} from 'react-native';
import { connect } from 'react-redux';
import {  Item, Input, CheckBox, Toast } from 'native-base';
import * as actions from '../actions';
import { Auth } from 'aws-amplify';
import FacebookLogin from '../components/FacebookLogin';
import GoogleSignIn from '../components/GoogleSignIn';
import Header from '../components/goBackHeader';

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
     let {email , password} = this.state;


     if(!email){
           this.handleError("Username is required!")
           return false;
     }
     if(!password){
          this.handleError("Password is required!")
           return false;
     }
     this.setState({ error: null, loading: true });
     this.props.navigation.navigate('profile')
     console.log('username is '+email,'password is ',password);
    //  Auth.signIn(email, password)
    //    .then(data => {
    //        console.log('data is ',data);
    //        Auth.currentUserCredentials()
    //        .then(credentials => {
    //          console.log('Current user credentials are --- ',credentials);
    //          this.props.navigation.navigate('home')
    //          this.setState({ loading: false });
    //        }).catch(err => {
    //          console.log('error in signin --- ',err)
    //          this.setState({ loading: false });
    //        });
    //    })
    //    .catch(err => {
    //      console.log('err is ',err );
    //    });
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
        <View style={{flex: 1}}>
          <Header navigation={this.props.navigation} title={'Sign in'}/>
          <View style={{padding: 10, backgroundColor:'white'}}>
           <Text style={{fontSize: 28, fontWeight: 'bold'}}>Sign Up</Text>
          </View> 
        <View style={styles.container}>
          <View style={styles.inputContainer}> 
            <Text style={styles.inputLabel}>EMAIL</Text>
            <Item>
                  <Input
                      style={styles.inputField}
                      value={this.state.email}
                      autoCapitalize='none'
                      onSubmitEditing={() => {
                        this.focusNextField('userid');
                      }}
                      returnKeyType={ "next" }
                      ref={ input => {
                        this.inputs['userid'] = input;
                      }}
                      onChangeText={email => this.setState({ email })}
                      />
                </Item>
                <Text style={styles.inputLabel}>USER ID</Text>
                <Item>
                  <Input
                      style={styles.inputField}
                      value={this.state.userid}
                      autoCapitalize='none'
                      onSubmitEditing={() => {
                        this.focusNextField('password');
                      }}
                      returnKeyType={"next"}
                      ref={ input => {
                        this.inputs['userid'] = input;
                      }}
                      onChangeText={userid => this.setState({ userid })}
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
                        this.focusNextField('confirmPassword');
                      }}
                      returnKeyType={ "next" }
                      ref={ input => {
                        this.inputs['password'] = input;
                      }}
                      onChangeText={password => this.setState({ password })}
                      />
                </Item>
                <Text style={styles.inputLabel}>CONFIRM PASSWORD</Text>
                <Item>
                  <Input
                      style={styles.inputField}
                      value={this.state.confirmPassword}
                      autoCapitalize='none'
                      secureTextEntry={true}
                      onSubmitEditing={() => {
                        this.focusNextField('countryCode');
                      }}
                      returnKeyType={ "done" }
                      ref={ input => {
                        this.inputs['confirmPassword'] = input;
                      }}
                      onChangeText={confirmPassword => this.setState({ confirmPassword })}
                      />
                </Item>
                <Item>

                      <View style={{flex: 2,paddingRight:5}}>
                      <Text style={styles.inputLabel}>COUNTRY CODE</Text>
                        <Item>
                          <Input
                              style={styles.inputField}
                              value={this.state.countryCode}
                              autoCapitalize='none'
                              secureTextEntry={false}
                              onSubmitEditing={() => {
                                this.handleSubmit()
                              }}
                              returnKeyType={ "done" }
                              ref={ input => {
                                this.inputs['countryCode'] = input;
                              }}
                              onChangeText={countryCode => this.setState({ countryCode })}
                              />
                        </Item>
                      </View>  
                      <View style={{flex: 5,paddingLeft:5}}>
                      <Text style={styles.inputLabel}>MOBILE NUMBER</Text>
                      <Item>
                        <Input
                            style={styles.inputField}
                            value={this.state.phoneNumber}
                            autoCapitalize='none'
                            secureTextEntry={false}
                            onSubmitEditing={() => {
                              this.handleSubmit()
                            }}
                            returnKeyType={ "done" }
                            ref={ input => {
                              this.inputs['phoneNumber'] = input;
                            }}
                            onChangeText={phoneNumber => this.setState({ phoneNumber })}
                            />
                      </Item>
                      </View> 
                </Item>
                <Text style={{textAlign:'right', color:'#668349'}}>Verify now?</Text>
                <View style={{marginBottom: 10,marginTop: 10,flexDirection:'row'}}>
                      <CheckBox checked={checked} color='grey' onPress={()=>this.setState({checked: !checked})}/> 
                      <Text style={{marginLeft:20}}>I agree with the <Text style={{fontWeight: 'bold'}}>terms and conditions</Text></Text>
                </View>  
                <View style={{justifyContent: "center" }}>
                    {this.state.loading ? <ActivityIndicator color="#8E24AA" size="large" /> :
                  <TouchableHighlight style={styles.button} onPress={() => this.handleSubmit()}><Text style={styles.btnText}>SIGN UP</Text></TouchableHighlight>
                    }
              </View>
            </View>  
            <View style={styles.socialLoginContainer}>
            <View style={{flex: 1}}>
                <Text style={{textAlign: 'center'}}>Or</Text>
            </View>  
            <View style={{flex: 4}}>
                    <FacebookLogin/>
                    <GoogleSignIn />
            </View>     
            </View> 
            </View>
        </View>  
        

      );
    }
}


const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'white'
      },
      inputContainer: {
          flex: 10,
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
          flex: 3,
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

export default connect(null, actions)(RegisterScreen);
