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
import {scale} from '../global';


let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/arrow_left.png');

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
                                 <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(31),paddingLeft:scale(20),paddingBottom:scale(20)}}>Forgot ID/Password</Text>

                      </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                           <ScrollView style={styles.container}>
                      <View style={styles.inputField}>
                      <FloatingLabelInput
                            testID='email'
                            label="Email/ID"
                            value={this.state.email}
                            autoCapitalize='none'
                            returnKeyType={ "next" }
                            ref={ input => {
                                this.inputs['email'] = input;
                            }}
                            onChangeText={email => this.setState({ email })}
                            style={{marginVertical: scale(5)}}
                        />
                        </View>
                        <View style={{justifyContent: "center" }}>
                            {
                                this.state.loading
                                    ?
                                    <ActivityIndicator color="#8E24AA" size="large" />
                                    :
                                    <TouchableOpacity testID='forgetButton' onPress={() => {this.props.navigation.goBack()}}>
                                        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                                        <Text style={styles.btnText}>SUBMIT</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
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
        paddingHorizontal:scale(20),
        marginBottom:scale(20),
        backgroundColor:"rgb(249,252,255)",
    },
    logoText: {
        color:'white',
        textAlign:'left',
        fontSize:scale(35),
        fontFamily: 'Montserrat-Bold',
    },
    inputLabel: {
        color:'rgb(155,155,155)',
        textAlign:'left',
        fontSize: scale(18),
        marginBottom: scale(20)
    },
    inputField: {
        marginTop: scale(10),
        marginBottom: scale(10)
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
        fontSize:scale(18),
        fontFamily:'Montserrat-Bold'
    },
})

export default ForgetScreen;
