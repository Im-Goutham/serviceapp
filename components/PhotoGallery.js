import React, { Component } from 'react';
import { View, TouchableWithoutFeedback,ImageBackground, StyleSheet, Dimensions, Text} from 'react-native';
const { width, height } = Dimensions.get('window')
import { connect } from 'react-redux';
import * as actions from '../actions';
import PhotoView from './PhotoView';


class PhotoGalley extends Component {

 constructor(){
     super()
     this.state = {
        images:[
            { url:'', props : { source: require('../images/service1.png')} },
            { url:'', props : { source: require('../images/service2.png')} },
            { url:'', props : { source: require('../images/service3.png')} },
            { url:'', props : { source: require('../images/service4.png')} },
            { url:'', props : { source: require('../images/service5.png')} }
        ],
        imgIndex: 0,
        photoShow:false
     }
 }

    showImage(index){
        console.log('imgIndex',index);
        let {images} = this.state;
        let imagesArray = images.map((image)=>{
            return {url:image}
        })
        this.props.showPhotoView({index,images:images,photoShow:true})
    }


  render() {
    console.log('width of box is ',width)
    return (
      <View style={{flex:1,flexDirection:'row'}}>
         <View style={{flex:1}}>
             <TouchableWithoutFeedback  onPress={()=>{this.showImage(0)}} >
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
                    <TouchableWithoutFeedback  onPress={()=>{this.showImage(1)}} >
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
                    <TouchableWithoutFeedback  onPress={()=>{this.showImage(2)}} >
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
                    <TouchableWithoutFeedback  onPress={()=>{this.showImage(3)}} >
                                <View style={styles.imgBox}>
                                    <ImageBackground style={styles.smallImgStyle} source={require('../images/service4.png')}>
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
                    <TouchableWithoutFeedback  onPress={()=>{this.showImage(4)}} >
                                <View style={styles.imgBox}>
                                    <ImageBackground style={styles.smallImgStyle} source={require('../images/service5.png')}>
                                   
                                        <View style={styles.overlay}><Text style={{color:'white',fontSize:22,fontFamily:'Montserrat-Bold'}}>+5</Text></View>
                                       
                                   
                                    </ImageBackground>
                                </View>  
                </TouchableWithoutFeedback>
               </View>
         </View>
        <PhotoView/>
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
        elevation: 3,
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


export default connect(null, actions)(PhotoGalley);
