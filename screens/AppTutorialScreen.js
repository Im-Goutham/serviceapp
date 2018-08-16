
import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight,Text, Image, Dimensions } from 'react-native';


import Swiper from 'react-native-swiper';


const { width, height } = Dimensions.get('window')

class AppTutorialScreen extends Component {

     
    render() {
       return (
        <View style={styles.container}>
           <View style={styles.appTutorial}>
           <Swiper showsButtons={false}>
                <View style={styles.slide}>
                    <View style={{flex:6}}>
                        <Image source={require('../images/tutorial.png')} style={styles.imgStyle}/>
                    </View>    
                    <View style={styles.tutorialText}>
                        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </Text>
                    </View> 
                </View>
                <View style={styles.slide}>
                    <View style={{flex:6}}>
                         <Image source={require('../images/tutorial.png')} style={styles.imgStyle}/>
                    </View>    
                    <View style={styles.tutorialText}>
                    <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </Text>
                    </View> 
                </View>
                <View style={styles.slide}>
                    <View style={{flex:6}}>
                         <Image source={require('../images/tutorial.png')} style={styles.imgStyle}/>
                    </View>    
                    <View style={styles.tutorialText}>
                    <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </Text>
                    </View> 
                </View>
            </Swiper>
          </View>    
          <View style={styles.signUpBlock}>
             <TouchableHighlight style={styles.button} onPress={() => {this.props.navigation.navigate('register')}}><Text style={styles.btnText}> SIGN UP</Text></TouchableHighlight>
               <Text style={{marginBottom:10,marginTop:10}}>Already have an account  <Text style={{fontWeight: 'bold'}} onPress={()=>{this.props.navigation.navigate('login')}}>Sign in</Text></Text>
            </View>  
        </View>
       )
    }
}

const styles = StyleSheet.create({
      container: {
         flex: 1
    },
    appTutorial: {
         flex:5, 
         borderBottomColor :'#e6e6e6' ,
         borderBottomWidth :0.5,
         backgroundColor:'white'
     },
     tutorialText: {
         flex:2,
         justifyContent:'center',
         alignItems:'center',
         padding:10
     },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 15,
      textAlign:'center'
    },
    signUpBlock: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft : 10,
        paddingRight: 10,
        backgroundColor:'white'
    },
    button:{
        backgroundColor:'#4A4A4A',
        width: '100%',
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#fff',
        paddingTop:10,
        paddingBottom:10
    },
    btnText: { 
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    },
    imgStyle: {width: width,height:height/1.6}
})

export default AppTutorialScreen;