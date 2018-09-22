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
import Advertisement from '../components/Advertisement';
import ServiceProvidersList from '../components/ServiceProvidersList';
import Map from '../components/Map';
import Header from '../components/Header';
import Modal from 'react-native-modalbox';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/EvilIcons';

import HeaderScreen from './HeaderScreen';
import Swipeout from "react-native-swipeout";

var {height, width} = Dimensions.get('window');
let tabItems = ["List View", "Map View"];

let logo = require('../images/logo.png');
let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/back-arrow.png');;
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
          height : 40,
          width: "50%",
          justifyContent: "space-between",
          alignItems:'center',
        }}>
        <Text
          style={{
            color: this.state.tabindex === index ? "#fff" : "rgb(158, 212, 247)",
            fontSize: 16,
            fontFamily: 'Montserrat-Bold'
          }}>{value}</Text>
        <View style={{
            width: 70,
            height: this.state.tabindex === index ? 3 : 0,
            backgroundColor: "#fff",
            borderRadius : 3
            // borderColor: this.state.tabindex === index ? "#fff": "transparent"
          }}/>
      </TouchableOpacity>
    )
    })
  }

  rendermapdata(){
      return maplocations.data.map((data, index)=>{
          return(
              <View style={{flex:1,marginBottom: 10,padding:20, width: "100%", backgroundColor:"#fff", borderRadius:10}} key={index}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:2}}>
                            <View style={styles.imageShadow}>
                                <Image source={require('../images/svp1.png')} style={[styles.img_placeholder,{borderRadius:35,width:70,height:70}]}/>
                                <Image source={require('../images/check.png')} style={styles.check}/>
                            </View>
                        </View>
                        <View style={{flex:7,paddingHorizontal:20}}>
                            <View style={{flex:1}}>
                                <Text style={{fontSize:18}}>Clayton L.</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',paddingVertical:10}}>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingRight:8}}><Image source={require('../assets/icons/star_gold.png')} style={styles.iconStyle}  resizeMode="contain" resizeMethod="resize"/><Text style={{marginLeft:8,marginRight:8}}>4</Text></View>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:8,borderLeftColor:'rgb(204,204,204)',borderLeftWidth:1,borderRightColor:'rgb(204,204,204)',borderRightWidth:1}}><Image source={require('../assets/icons/chat_green.png')} style={styles.iconStyle}  resizeMode="contain" resizeMethod="resize"/><Text style={{marginLeft:8,marginRight:8}}>3</Text></View>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:8}}><Image source={require('../assets/icons/location_red.png')} style={styles.iconStyle}  resizeMode="contain" resizeMethod="resize"/><Text style={{marginLeft:8,marginRight:8}}>3 mi.</Text></View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>14 <Text style={{color:'rgb(74,74,74)'}}>Jobs done</Text></Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',marginTop:10}}>
                        <View style={{justifyContent:'center'}}><Text style={styles.tagStyle}>Plumber and 5 More</Text></View>
                        <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.iconButton}>
                                <TouchableOpacity>
                                    <Image source={require('../assets/icons/heart_white.png')} style={[styles.iconStyle,{width:18,height:18}]}  resizeMode="contain" resizeMethod="resize"/>
                                </TouchableOpacity>
                            </LinearGradient>
                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.iconButton}>
                                <TouchableOpacity>
                                    <Image source={require('../assets/icons/send_white.png')} style={[styles.iconStyle,{width:18,height:18}]}  resizeMode="contain" resizeMethod="resize"/>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        {
                            this.state.images.map((image,key)=>{
                                return  <TouchableWithoutFeedback  onPress={()=>{this.showImage(key)}} key={key}>
                                    <View style={styles.imgBox}>
                                        <ImageBackground style={styles.imgStyle} source={image.image}  resizeMode="contain" resizeMethod="resize">
                                            {(key == 2)? (
                                                <View style={styles.overlay}><Text style={{color:'white',fontSize:22,fontFamily:'Montserrat-Bold'}}>+5</Text></View>
                                            ):(null)
                                            }
                                            </ImageBackground>
                                    </View>
                                </TouchableWithoutFeedback>
                            })
                        }
                        </View>
                    <View style={{flex:1,flexDirection:'row',paddingTop:10,paddingBottom:10}}>
                        <View style={{flex:5,paddingVertical:3}}>
                            <Text style={{color:'#9B9B9B',fontFamily:'Montserrat-Medium',fontSize:13}} numberOfLines={2}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </View>
                        <View style={{flex:3}}>
                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                                <TouchableOpacity><Text style={styles.btnText}>HIRE NOW</Text></TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
              </View>
          )
      })
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
                               left = {
                                    <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                        <TouchableOpacity  onPress={() => this.props.navigation.goBack()}  style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                        <Image source={back_arrow} style={{ width: '50%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                        <Image source={menu} style={{ width: '50%', height: 22}} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableOpacity>
                                    </View>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:54}}>
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 18}}>Find Help</Text>
                               </View>
                               }
                               right={
                                    <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                        <TouchableOpacity style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                             <Image source={require('../assets/icons/search_white.png')} style={{ width: '100%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                            <Image source={require('../assets/icons/filter.png')} style={{ width: '100%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableOpacity>
                                    </View>
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingVertical: 10}}>
                                <View style={{ paddingTop:30,flexDirection:'row', paddingHorizontal: width/6}}>
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
                   style={[styles.modal, { height: height/2+50, width: width-40, backgroundColor:"transparent" }]}
                   position={"bottom"}
                   ref={"modal1"}
                   swipeToClose={false}
                   backdropPressToClose={false}>
                   <View style={{ marginBottom: -10, width: 40, borderTopLeftRadius:10, borderTopRightRadius:10, paddingBottom:10, alignSelf:"flex-end", height: 45, backgroundColor: 'rgba(213,213,213,0.4)', justifyContent:'center', alignItems:'center', right:0}} >
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
    width: 80,
    height: 80,
    borderRadius:5,
    position: 'relative',
    top: 0,
    left: 0
  },
      tagStyle:{
     backgroundColor: 'rgb(239,186,47)',
     borderRadius:10,
     overflow:"hidden",
     paddingVertical:2,
     paddingLeft:10,
     paddingRight:30,
     color: 'white',
     fontFamily: 'Montserrat-Bold'
  },
    imgStyle:{
    width:'100%',
    height:115,
    borderRadius:10,
},
    imgBox: {
    flex:1,
    padding:1,

},
    overlay: {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,.6)',
  opacity: 2,
      justifyContent:'center',
      alignItems:'center',
     width:'100%',
    height:100,
    borderRadius:10,
},
      button:{
    width: '100%',
    borderRadius:30,
    paddingVertical:10
},
btnText: {
    textAlign:'center',
    color:'white',
    fontFamily: 'Montserrat-Bold',
    fontSize:15
},
     iconButton: {
    marginHorizontal:5,
    width: 45,
    height:45,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
  },  iconStyle: {
     width:15,
     height:15
  },
})

export default FindHelpScreen;
