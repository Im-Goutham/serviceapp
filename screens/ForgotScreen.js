import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text, ScrollView, ActivityIndicator, Dimensions, Platform,
} from 'react-native';
 import {Input, Item, Label} from 'native-base'
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import HeaderScreen from './HeaderScreen';
import FloatingLabelInput from '../components/FloatingLabelInput';

const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/back-arrow.png');

class ForgetScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        tabindex : 0,
        email:''
      }
      this.inputs = {};
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
                               left = {
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
                                 <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 31,paddingLeft:20,paddingBottom:20}}>Forgot ID/Password</Text>

                      </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                           <ScrollView style={styles.container}>
                      <View style={styles.inputField}>
                      <FloatingLabelInput
                            label="Email/ID"
                            value={this.state.email}
                            autoCapitalize='none'
                            returnKeyType={ "next" }
                            ref={ input => {
                                this.inputs['email'] = input;
                            }}
                            onChangeText={email => this.setState({ email })}
                            style={{marginVertical: 5}}
                        />
                        </View>
                        <View style={{justifyContent: "center" }}>
                            {
                                this.state.loading
                                    ?
                                    <ActivityIndicator color="#8E24AA" size="large" />
                                    :
                                    <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                                        <TouchableOpacity onPress={() => {this.handleSubmit()}}><Text style={styles.btnText}>SUBMIT</Text></TouchableOpacity>
                                    </LinearGradient>
                            }
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
        marginTop: 10,
        marginBottom: 10
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
        fontSize:18,
        fontFamily:'Montserrat-Bold'
    },
})

export default ForgetScreen;
