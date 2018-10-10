import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
    Text, TouchableHighlight, TouchableWithoutFeedback, ImageBackground
} from 'react-native';
import {  Icon } from 'native-base'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Advertisement from '../components/Advertisement';
import ServiceProvidersList from '../components/ServiceProvidersList';
import Map from '../components/Map';
import Header from '../components/Header';
import Modal from 'react-native-modalbox';
import LinearGradient from 'react-native-linear-gradient';
import { Share } from 'react-native';

import HeaderScreen from './HeaderScreen';
import Swipeout from "react-native-swipeout";
import {scale} from '../global';

var {height, width} = Dimensions.get('window');
let tabItems = ["List View", "Map View"];

let logo = require('../images/logo.png');
let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/arrow_left.png');;
let border_img = require('../images/border_img.png');

let maplocations = {
    data : [
         {
      jobtitle: 'Need Cook',
      icon: require('../assets/icons/crown.png'),
      image: require('../images/cook.png'),
      detail: "Lorem Ipsum has been the industrys standard dummy text ever",
    },
    {
      jobtitle: 'Need Carpenter',
      icon: require('../assets/icons/crown.png'),
      image: require('../images/tutorial.png'),
      detail: "Lorem Ipsum has been the industrys standard dummy text ever",
    },
    {
      jobtitle: 'Need Cook',
      icon: require('../assets/icons/crown.png'),
      image: require('../images/tutorial.png'),
      detail: "Lorem Ipsum has been the industrys standard dummy text ever",
    }
        ]
}



class FindHelpScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        tabindex : 0,
        images:[
            {image: require('../images/service1.png')},
            {image: require('../images/service2.png')},
            {image: require('../images/service3.png')},
        ],
      }
  }
  tabrender(){
    return tabItems.map((value, index)=>{
      return (
        <TouchableOpacity key={index} onPress={()=>this.setState({
            tabindex: index
          })}
          style={{
          // backgroundColor: this.state.tabindex === index ? "blue": "transparent",
          height : scale(40),
          width: "50%",
          justifyContent: "space-around",
          alignItems:'center',
        }}>
        <Text
          style={{
            color: this.state.tabindex === index ? "#fff" : "rgb(158, 212, 247)",
            fontSize: scale(16),
            fontFamily: 'Montserrat-Bold'
          }}>{value}</Text>
        <View style={{
            width: scale(40),
            height: this.state.tabindex === index ? scale(3) : 0,
            backgroundColor: "#fff",
            borderRadius : scale(3)
            // borderColor: this.state.tabindex === index ? "#fff": "transparent"
          }}/>
      </TouchableOpacity>
    )
    })
  }

  shareJob() {
    Share.share({
        message: 'BAM: we\'re helping your business with awesome React Native apps',
        url: 'http://bam.tech',
        title: 'Wow, did you see that?'
      }, {
        // Android only:
        dialogTitle: 'Share BAM goodness',
        // iOS only:
        excludedActivityTypes: [
          'com.apple.UIKit.activity.PostToTwitter'
        ]
      })
}


  rendermapdata(){
      return maplocations.data.map((data, index)=>{
          return(
              <View style={{flex:1,marginBottom: scale(10),padding:scale(20), width: "100%", backgroundColor:"#fff", borderRadius:scale(10)}} key={index}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:2}}>
                            <View style={styles.imageShadow}>
                                <Image source={require('../images/svp1.png')} style={[styles.img_placeholder,{borderRadius:scale(35),width:scale(70),height:scale(70)}]}/>
                                <Image source={require('../images/check.png')} style={styles.check}/>
                            </View>
                        </View>
                        <View style={{flex:7,paddingHorizontal:scale(20)}}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Text style={{fontFamily:'Montserrat-Medium',color:'#22262C',fontSize:scale(18)}}>Clayton L.</Text>
                                <Image style={{
                                    width: scale(20),
                                    height: scale(20),
                                    paddingHorizontal: scale(15),
                                    backgroundColor: "transparent"
                                }} source={require('../assets/icons/crown.png')} resizeMode="contain" resizeMethod="resize"/>
                            </View>
                            <View style={{flex:1,flexDirection:'row',paddingVertical:scale(10)}}>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingRight:scale(8)}}><Image source={require('../assets/icons/star_gold.png')} style={styles.iconStyle}  resizeMode="contain" resizeMethod="resize"/><Text style={{fontFamily:'Montserrat-Bold',marginLeft:scale(8),marginRight:scale(8)}}>4</Text></View>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:scale(8),borderLeftColor:'#CCCCCC',borderLeftWidth:scale(1),borderRightColor:'#CCCCCC',borderRightWidth:scale(1)}}><Image source={require('../assets/icons/chat_green.png')} style={styles.iconStyle}  resizeMode="contain" resizeMethod="resize"/><Text style={{fontFamily:'Montserrat-Regular',marginLeft:scale(8),marginRight:scale(8)}}>3</Text></View>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:scale(8)}}><Image source={require('../assets/icons/location_red.png')} style={styles.iconStyle}  resizeMode="contain" resizeMethod="resize"/><Text style={{fontFamily:'Montserrat-Regular',color:'#4A4A4A',marginLeft:scale(8),marginRight:scale(8)}}>3 mi.</Text></View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>14 <Text style={{fontFamily:'Montserrat-Regular',color:'#4A4A4A',fontSize:scale(13)}}>Jobs done</Text></Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',marginTop:scale(10)}}>
                        <View style={{justifyContent:'center'}}><Text style={styles.tagStyle}>Plumber & 5 More</Text></View>
                        <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>{this.setState({liked: !this.state.liked})}}>
                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.iconButton}>
                                    <Image source={this.state.liked ? require('../assets/icons/heart_red.png'): require('../assets/icons/heart_white.png')} style={[styles.iconStyle,{width:18,height:18}]}  resizeMode="contain" resizeMethod="resize"/>
                            </LinearGradient>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={()=> this.shareJob()}>
                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.iconButton}>
                                    <Image source={require('../assets/icons/send_white.png')} style={[styles.iconStyle,{width:scale(18),height:scale(18)}]}  resizeMode="contain" resizeMethod="resize"/>
                            </LinearGradient>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        {
                            this.state.images.map((image,key)=>{
                                return  <TouchableWithoutFeedback key={key}>
                                    <View style={styles.imgBox}>
                                        <ImageBackground style={styles.imgStyle} source={image.image}  resizeMode="contain" resizeMethod="resize">
                                            {(key == 2)? (
                                                <View style={styles.overlay}><Text style={{color:'white',fontSize:scale(22),fontFamily:'Montserrat-Bold'}}>+5</Text></View>
                                            ):(null)
                                            }
                                            </ImageBackground>
                                    </View>
                                </TouchableWithoutFeedback>
                            })
                        }
                        </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:5,paddingVertical:scale(3)}}>
                            <Text style={{color:'#9B9B9B',fontFamily:'Montserrat-Medium',fontSize:scale(13)}} numberOfLines={2}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </View>
                        <View style={{flex:3}}>
                        <TouchableOpacity onPress={()=> {this.props.navigation.navigate('select')}}>
                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                                <Text style={styles.btnText}>HIRE NOW</Text>
                            </LinearGradient>
                     </TouchableOpacity>
                        </View>
                    </View>
              </View>
          )
      })
  }
    render() {
        let { backButton } = this.props;
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
                                <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                {
                                    (backButton)?(
                                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('homePage')}  style={{width: "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                        <Image source={back_arrow} style={{ width: '50%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableOpacity>
                                    ):(null)
                                }
                                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{width: !backButton ? scale(54) : "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                <Image source={menu} style={{ width: !backButton? '100%': '50%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                </TouchableOpacity>
                             </View>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:scale(54)}}>
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(20)}}>Find Help</Text>
                               </View>
                               }
                               right={
                                <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('search')}
                                    style={{width: "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                      <Image source={require('../assets/icons/search_white.png')} style={{ width: '100%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                 </TouchableOpacity>
                                 <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('filter')}
                                    style={{width: "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}
                                    >
                                     <Image source={require('../assets/icons/filter.png')} style={{ width: '100%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                 </TouchableOpacity>
                             </View>
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingVertical: scale(10)}}>
                                 <View style={{ paddingVertical:scale(10),flexDirection:'row', paddingHorizontal: scale(width/6)}}>
                                    {this.tabrender()}
                                </View>
                           </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                       <Advertisement/>
                       {this.state.tabindex === 0 ?<ServiceProvidersList navigation={this.props.navigation}/>:<Map pinPress={() => this.refs.modal1.open()}/>}
                  </View>
               </LinearGradient>
               <Modal
                   style={[styles.modal, { height: height/2+scale(50), width: width-scale(30), backgroundColor:"transparent" }]}
                   position={"bottom"}
                   ref={"modal1"}
                   swipeToClose={false}
                   backdropPressToClose={false}>
                   <View style={{ marginBottom: scale(-10), width: scale(40), borderTopLeftRadius:scale(10), borderTopRightRadius:scale(10), paddingBottom:scale(10), alignSelf:"flex-end", height: scale(45), backgroundColor: 'rgba(213,213,213,0.4)', justifyContent:'center', alignItems:'center', right:0}} >
                       <Icon name="close" style={{}} onPress={() => this.refs.modal1.close()}/>
                   </View>
                   <ScrollView >
                       {this.rendermapdata()}
                       </ScrollView>
               </Modal>
           </View>
       )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },

      imageShadow: {
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
    img_placeholder: {
    width: scale(80),
    height: scale(80),
    borderRadius:scale(5),
    position: 'relative',
    top: 0,
    left: 0
  },
  tagStyle:{
    backgroundColor: 'rgb(239,186,47)',
    borderRadius:scale(10),
    overflow:"hidden",
    paddingVertical:scale(2),
    paddingHorizontal:scale(10),
    marginBottom:scale(10),
    color: 'white',
    marginRight: scale(10),
    fontSize: scale(14),
    fontFamily: 'Montserrat-Bold'
},
    imgStyle:{
    width:'100%',
    height:scale(115),
    borderRadius:scale(10),
},
    imgBox: {
    flex:1,
    padding:1,

},
check: {
    width: scale(18),
    height: scale(18),
    borderRadius:scale(9),
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  overlay: {
    position: 'absolute',
    top: scale(4),
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.6)',
    opacity: 2,
        justifyContent:'center',
        alignItems:'center',
       width:'100%',
      height:scale(105),
      borderRadius:scale(10),
  },
      button:{
    width: '100%',
    borderRadius:scale(30),
    paddingVertical:scale(10)
},
btnText: {
    textAlign:'center',
    color:'white',
    fontFamily: 'Montserrat-Bold',
    fontSize:scale(14)
},
     iconButton: {
    marginHorizontal:scale(5),
    width: scale(45),
    height:scale(45),
    borderRadius:scale(30),
    justifyContent:'center',
    alignItems:'center'
  },  iconStyle: {
     width:scale(15),
     height:scale(15)
  },
})


const mapStateToProps = state=> ({
    backButton:state.user.backButton,
  })

export default connect(mapStateToProps, actions)(FindHelpScreen);
