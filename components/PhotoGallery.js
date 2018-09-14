import React, { Component } from 'react';
import { View, TouchableWithoutFeedback,ImageBackground, StyleSheet, Dimensions, Text} from 'react-native';
const { width, height } = Dimensions.get('window')

class Header extends Component {
  render() {
    console.log('width of box is ',width)
    return (
      <View style={{flex:1,flexDirection:'row'}}>
         <View style={{flex:1}}>
             <TouchableWithoutFeedback >
                        <View style={styles.imgBox}>
                            <ImageBackground style={styles.imgStyle} source={require('../images/service1.png')}>
                            {/* {
                                (key == 2)? (
                                <View style={styles.overlay}><Text style={{color:'white',fontSize:22,fontFamily:'Montserrat-Bold'}}>+5</Text></View>
                                ):(null)
                            }
                             */}
                            </ImageBackground>
                        </View>  
           </TouchableWithoutFeedback>
         </View>
         <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
               <View>
                    <TouchableWithoutFeedback >
                                <View style={styles.imgBox}>
                                    <ImageBackground style={styles.smallImgStyle} source={require('../images/service2.png')}>
                                    {/*
                                        (key == 2)? (
                                        <View style={styles.overlay}><Text style={{color:'white',fontSize:22,fontFamily:'Montserrat-Bold'}}>+5</Text></View>
                                        ):(null)
                                        */}
                                   
                                    </ImageBackground>
                                </View>  
                </TouchableWithoutFeedback>
               </View>
               <View >
                    <TouchableWithoutFeedback >
                                <View style={styles.imgBox}>
                                    <ImageBackground style={styles.smallImgStyle} source={require('../images/service3.png')}>
                                    {/*
                                        (key == 2)? (
                                        <View style={styles.overlay}><Text style={{color:'white',fontSize:22,fontFamily:'Montserrat-Bold'}}>+5</Text></View>
                                        ):(null)
                                        */}
                                   
                                    </ImageBackground>
                                </View>  
                </TouchableWithoutFeedback>
               </View>
               <View >
                    <TouchableWithoutFeedback >
                                <View style={styles.imgBox}>
                                    <ImageBackground style={styles.smallImgStyle} source={require('../images/service1.png')}>
                                    {/*
                                        (key == 2)? (
                                        <View style={styles.overlay}><Text style={{color:'white',fontSize:22,fontFamily:'Montserrat-Bold'}}>+5</Text></View>
                                        ):(null)
                                        */}
                                   
                                    </ImageBackground>
                                </View>  
                </TouchableWithoutFeedback>
               </View>
               <View >
                    <TouchableWithoutFeedback >
                                <View style={styles.imgBox}>
                                    <ImageBackground style={styles.smallImgStyle} source={require('../images/service2.png')}>
                                   
                                        <View style={styles.overlay}><Text style={{color:'white',fontSize:22,fontFamily:'Montserrat-Bold'}}>+5</Text></View>
                                       
                                   
                                    </ImageBackground>
                                </View>  
                </TouchableWithoutFeedback>
               </View>
         </View>
 
      </View>
    )
  }
}


var styles = StyleSheet.create({
    imgBox: {
        flex:1,
        padding:1,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        justifyContent:'center',
        alignItems:'center'

    },
    imgStyle:{
        width:(width/2)-18,
        height:(width/2)-18,
        borderRadius: 40
    },
    smallImgStyle: {
        width:(width/4)-10,
        height:(width/4)-10,
        borderRadius: 20
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius:5,
        backgroundColor: 'rgba(0,0,0,.6)',
        opacity: 2,
        justifyContent:'center',
        alignItems:'center'
      },
})

export default Header;
