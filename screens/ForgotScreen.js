import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import {  Item, Input, Toast } from 'native-base';
import * as actions from '../actions';
import { Auth } from 'aws-amplify';
import Header from '../components/goBackHeader';


class ForgotScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', error: null, loading: false };
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
     let {username } = this.state;


     if(!username){
           this.handleError("Username is required!")
           return false;
     }
 
     this.setState({ error: null, loading: true });
     this.props.navigation.navigate('login');
    //  console.log('username is '+username,'password is ',password);
    //  Auth.signIn(username, password)
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
      return (  
        <View style={{flex: 1}}>
        <Header navigation={this.props.navigation} title={'Sign in'}/>
        <View style={styles.container}>   
        <View style={{marginBottom: 50}}>
           <Text style={{fontSize: 18}}>Forget ID/password</Text>
        </View>  
        <Text style={styles.inputLabel}>EMAIL / USER ID</Text>
        <Item>
              <Input
                  style={styles.inputField}
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
            <View style={{justifyContent: "center" }}>
                {this.state.loading ? <ActivityIndicator color="#8E24AA" size="large" /> :
               <TouchableHighlight style={styles.button} onPress={() => this.handleSubmit()}><Text style={styles.btnText}>SUBMIT</Text></TouchableHighlight>
                }
           </View>
         </View>
        </View>

      );
    }
}


const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 20,
          backgroundColor: 'white'
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

export default connect(null, actions)(ForgotScreen);
