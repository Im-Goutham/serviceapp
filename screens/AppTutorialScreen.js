
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity,Text, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import SelectLanguage from '../components/SelectLanguage';

const { width, height } = Dimensions.get('window')

class AppTutorialScreen extends Component {

     
    render() {
       return (
        <View style={styles.container}>
        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.appTutorial}>
           <Swiper 
             showsButtons={false}
             dot={<View style={{backgroundColor:'#a2def6', width: 20, height: 2,borderRadius: 0, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
             activeDot={<View style={{backgroundColor:'white', width: 20, height: 2,borderRadius: 0, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            >
                <View style={styles.slide}>
                    <View style={styles.imgBox}>
                        <Image source={require('../images/tutorial/img1.png')} style={styles.imgStyle}/>
                    </View>    
                    <View style={styles.tutorialText}>
                        <Text style={[styles.text,{fontSize:20,fontWeight:'bold'}]}>Easy to post your jobs</Text>
                        <Text style={styles.text}>Congue fames maecenas dignissm sem venenatis mi nam hac ullamcorper</Text>
                    </View> 
                </View>
                <View style={styles.slide}>
                    <View style={styles.imgBox}>
                         <Image source={require('../images/tutorial/img2.png')} style={styles.imgStyle}/>
                    </View>    
                    <View style={styles.tutorialText}>
                        <Text style={[styles.text,{fontSize:20,fontWeight:'bold'}]}>Find help for your jobs</Text>
                        <Text style={styles.text}>Congue fames maecenas dignissm sem venenatis mi nam hac ullamcorper</Text>
                    </View> 
                </View>
                <View style={styles.slide}>
                    <View style={styles.imgBox}>
                         <Image source={require('../images/tutorial/img3.png')} style={styles.imgStyle}/>
                    </View>    
                    <View style={styles.tutorialText}>
                        <Text style={[styles.text,{fontSize:20,fontWeight:'bold'}]}>Provide your skill as a service</Text>
                        <Text style={styles.text}>Congue fames maecenas dignissm sem venenatis mi nam hac ullamcorper</Text>
                    </View> 
                </View>
            </Swiper> 
            <Image style={{width:width,height:40,bottom:-10,position:'absolute'}} source={require('../images/border_img.png')}/>
          </LinearGradient>
          <View style={styles.signUpBlock}>
            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('register')}}><Text style={styles.btnText}> SIGN UP</Text></TouchableOpacity>
            </LinearGradient>
              <Text style={{marginVertical:20,color:'#808080',fontSize:17,textAlign:'center'}}>Already have an account  <Text style={{fontWeight: 'bold',color:'#3581fc'}} onPress={()=>{this.props.navigation.navigate('login')}}>Sign in</Text></Text>
            </View>
            <SelectLanguage />  
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
         backgroundColor:'white',
         paddingHorizontal:10,
         paddingVertical:30,
         position:'relative'
     },
     tutorialText: {
         flex:3,
         justifyContent:'center',
         alignItems:'center',
         paddingVertical:30
     },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 17,
      color:'white',
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
    imgBox:{flex:4,justifyContent:'center',alignItems:'center'},
    imgStyle: {width: 220,height:250}
})

export default AppTutorialScreen;