
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity,Text, Image, Dimensions, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import SelectLanguage from '../components/SelectLanguage';
import {scale} from '../global';

const { width, height } = Dimensions.get('window')

class AppTutorialScreen extends Component {

    constructor(props){
         super(props);
         this.state = {
               person: 'Goutham'
         }

    }

    changeState = (a) => {
         this.setState({person:a})
    }

    render() {
        console.log("height", height)
       return (
        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']}  style={styles.container}>
        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.appTutorial}>
           <Swiper
             showsButtons={false}
             dot={<View style={{backgroundColor:'#a2def6', width: scale(20), height: scale(2),borderRadius: 0, marginLeft: scale(3), marginRight: scale(3), marginTop: scale(3), marginBottom: scale(-40),}} />}
             activeDot={<View style={{backgroundColor:'white', width: scale(20), height: scale(2),borderRadius: 0, marginLeft: scale(3), marginRight: scale(3), marginTop: scale(3), marginBottom: scale(-40)}} />}
            >
                <View style={styles.slide}>
                    <View style={styles.imgBox}>
                        <Image source={require('../images/tutorial/img1.png')} style={styles.imgStyle}  resizeMode="contain" resizeMethod="resize" />
                    </View>
                    <View style={styles.tutorialText}>
                        <Text style={[styles.text,{fontSize:scale(20),  fontFamily:'Montserrat-Bold'}]}>Find Odd Jobs Near You</Text>
                        <Text style={styles.text}>Use paid services between individuals to earn extra cash. Get paid directly, no commission or transaction fees.</Text>
                    </View>
                </View>
                <View style={styles.slide}>
                    <View style={styles.imgBox}>
                         <Image source={require('../images/tutorial/img2.png')} style={styles.imgStyle}  resizeMode="contain" resizeMethod="resize" />
                    </View>
                    <View style={styles.tutorialText}>
                        <Text style={[styles.text,{fontSize:scale(20),  fontFamily:'Montserrat-Bold'}]}>Find Help For Your Project</Text>
                        <Text style={styles.text}>Post a job and get help on budget. Chatting available for your convenience.</Text>
                    </View>
                </View>
                <View style={styles.slide}>
                    <View style={styles.imgBox}>
                         <Image source={require('../images/tutorial/img3.png')} style={styles.imgStyle}  resizeMode="contain" resizeMethod="resize" />
                    </View>
                    <View style={styles.tutorialText}>
                        <Text style={[styles.text,{fontSize:scale(20),  fontFamily:'Montserrat-Bold'}]}>Track Service Provider</Text>
                        <Text style={styles.text}>View location of service provider on his way to appointment.</Text>
                    </View>
                </View>
                <View style={styles.slide}>
                    <View style={styles.imgBox}>
                         <Image source={require('../images/tutorial/img4.png')} style={styles.imgStyle}  resizeMode="contain" resizeMethod="resize" />
                    </View>
                    <View style={styles.tutorialText}>
                        <Text style={[styles.text,{fontSize:scale(20) ,fontFamily:'Montserrat-Bold'}]}>View Ads And Earn Points</Text>
                        <Text style={styles.text}>Earn points and redeem them for premium membership and full access to all features.</Text>
                    </View>
                </View>
            </Swiper>

          </LinearGradient>
          <View style={{flex:2.6}}>
          <Image source={require('../images/border_img.png')} style={{ 
              width: '100%', 
              height: Platform.OS==='ios'? 
              height > 800 ? scale(31): height > 580 ? scale(37) :  scale(31)
              : scale(35)
              }}  resizeMode="contain" resizeMethod="resize" />
          <View style={styles.signUpBlock}>
          <TouchableOpacity  testID='signUpButton' onPress={() => {this.props.navigation.navigate('register')}}>
            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
               <Text style={styles.btnText}> SIGN UP</Text>
            </LinearGradient>
            </TouchableOpacity>
              <Text style={{marginTop:scale(30),marginBottom:scale(20),fontFamily:'Montserrat-Regular',color:'#4A4A4A',fontSize:scale(17),textAlign:'center'}}>Already have an account? <Text style={{fontFamily:'Montserrat-Bold',color:'#3E85EF'}} onPress={()=>{this.props.navigation.navigate('login')}}>Sign In</Text></Text>
            </View>
            <SelectLanguage />
          </View>
        </LinearGradient>
       )
    }
}

const styles = StyleSheet.create({
      container: {
         flex: 1
    },
    appTutorial: {
         flex:5.5,
         backgroundColor:'white',
         paddingHorizontal:scale(10),
         paddingTop: Platform.OS == 'ios' ? scale(50): scale(20),
         paddingBottom: Platform.OS == 'ios' ? scale(30): scale(10),
         position:'relative'
     },
     tutorialText: {
         flex:3,
         justifyContent:'center',
         alignItems:'center',
         paddingTop:20,
         paddingBottom:scale(30)
     },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: scale(17),
      color:'#FFFFFF',
      fontFamily:'Montserrat-Medium',
      lineHeight:scale(24),
      textAlign:'center',
      marginVertical:scale(10)
    },
    signUpBlock: {
        flex:2,
        paddingHorizontal:scale(10),
        flexDirection:'column',
        justifyContent: 'flex-start',
        paddingTop:scale(30),
        backgroundColor:'#F9FCFF',
    },
    button:{
        backgroundColor:'#4A4A4A',
        width: '100%',
        borderRadius:scale(30),
        borderColor: '#fff',
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
        fontSize: scale(16),
        fontFamily:'Montserrat-Bold'
    },
    imgBox:{flex:7,justifyContent:'center',alignItems:'center'},
    imgStyle: {height:scale(250)}
})

export default AppTutorialScreen;
