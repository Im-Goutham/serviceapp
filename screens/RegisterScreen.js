import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image,ScrollView,Platform, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {  Item, Input, CheckBox, Toast,Icon } from 'native-base';
import * as actions from '../actions';
import { Auth } from 'aws-amplify';
import FacebookLogin from '../components/FacebookLogin';
import GoogleSignIn from '../components/GoogleSignIn';
import Header from '../components/goBackHeader';
import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

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
     Auth.signUp({
      username: 'Goutham.m12',
      password: 'Goutham@123',
      attributes: {
          name: 'Goutham Moka2',
          email: 'goutham.moka1222@gmail.com'
         }
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));


    //  this.props.navigation.navigate('profile')
    //  console.log('username is '+email,'password is ',password);
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
        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={{flex:1}}>

        <View style={styles.container}>   
        <View style={{justifyContent:'flex-start',paddingHorizontal:10}}>
           <Icon style={{color:'white'}} active name="ios-arrow-back"  onPress={() => this.props.navigation.goBack()}/>
        </View>
        <View style={{flex:1}}>
        <View style={{flex:2,position:'relative'}}>
           <View style={{paddingVertical:20,paddingLeft:10}}><Text style={styles.logoText}>Sign Up</Text></View>
           <Image style={styles.borderImg} source={require('../images/border_img.png')}/>
        </View>  
        <View style={{flex:10,backgroundColor:'#F9FCFF',paddingHorizontal:10, paddingVertical:30,justifyContent:'space-between'}}>
        <View>
        <Text style={styles.inputLabel}>EMAIL</Text>
        <Item>
              <Input
                  value={this.state.username}
                  autoCapitalize='none'
                  onSubmitEditing={() => {
                    this.handleSubmit();
                  }}
                  returnKeyType={ "done" }
                  ref={ input => {
                    this.inputs['username'] = input;
                  }}
                  onChangeText={username => this.setState({ username })}
                  />
            </Item>
            </View>
            <View>
        <Text style={styles.inputLabel}>User ID</Text>
        <Item>
              <Input
                  value={this.state.username}
                  autoCapitalize='none'
                  onSubmitEditing={() => {
                    this.handleSubmit();
                  }}
                  returnKeyType={ "done" }
                  ref={ input => {
                    this.inputs['username'] = input;
                  }}
                  onChangeText={username => this.setState({ username })}
                  />
            </Item>
            </View>
            <View>
            <Text style={styles.inputLabel}>Password</Text>
            <Item>
                  <Input
                      value={this.state.username}
                      autoCapitalize='none'
                      onSubmitEditing={() => {
                        this.handleSubmit();
                      }}
                      returnKeyType={ "done" }
                      ref={ input => {
                        this.inputs['username'] = input;
                      }}
                      onChangeText={username => this.setState({ username })}
                      />
            </Item>
            </View>
            <View>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <Item>
                  <Input
                      value={this.state.username}
                      autoCapitalize='none'
                      onSubmitEditing={() => {
                        this.handleSubmit();
                      }}
                      returnKeyType={ "done" }
                      ref={ input => {
                        this.inputs['username'] = input;
                      }}
                      onChangeText={username => this.setState({ username })}
                      />
            </Item>
            </View>
            <View style={{justifyContent: "center" }}>
            
                {this.state.loading ? <ActivityIndicator color="#8E24AA" size="large" /> :
                     <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                     <TouchableOpacity onPress={() => {this.handleSubmit()}}><Text style={styles.btnText}>SUBMIT</Text></TouchableOpacity>
                  </LinearGradient>
                }
           </View>
        </View>
        </View>
         </View>
         </LinearGradient>

      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid ? 0 : 50,

},
logoText: {
  color:'white',
  textAlign:'left',
  fontSize:35,
  fontWeight:'bold'
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
borderImg: {width:width,height:40,bottom:-10,position:'absolute'},
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
  borderWidth: 1,
  borderColor: '#fff',
  marginTop:10,
  paddingTop:16,
  paddingBottom:16,
},
btnText: { 
  textAlign:'center',
  color:'white',
  fontWeight:'bold'
}
})

export default connect(null, actions)(RegisterScreen);
