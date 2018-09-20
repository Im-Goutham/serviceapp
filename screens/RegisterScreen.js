import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
 import {  Icon } from 'native-base'
import Advertisement from '../components/Advertisement';
import NotificationsList from '../components/NotificationsList';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import HeaderScreen from './HeaderScreen';
import SignUp from "../components/SignUp";


let back_arrow = require('../assets/icons/back-arrow.png');

class RegisterScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        tabindex : 0
      }
  }


    render() {
       return (
           <View style={{flex:1}}>
               <LinearGradient
                   colors={['rgb(60, 139, 239)', 'rgb(60,187, 239)']}
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
                                       onPress={() => this.props.navigation.goBack()}
                                       style={{
                                           width: 54,
                                           height: 54,
                                           justifyContent: 'center',
                                           alignItems: 'flex-start',
                                           marginLeft: -20
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
                          <SignUp navigation={this.props.navigation}/>
                       </View>
               </LinearGradient>

           </View>
       )
  }
}

const styles = StyleSheet.create({

})

export default RegisterScreen;
