import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
    AsyncStorage,
    Text, TouchableHighlight, TouchableWithoutFeedback, ImageBackground
} from 'react-native';
import {  Icon } from 'native-base';
import { Share } from 'react-native';
import Advertisement from '../components/Advertisement';
import JobsList from '../components/JobsList';
import Map from '../components/Map';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modalbox';
import { connect } from 'react-redux';
import * as actions from '../actions';
import HeaderScreen from './HeaderScreen';

var {height, width} = Dimensions.get('window');
import {scale} from '../global';

let tabItems = ["List View", "Map View"];
let logo = require('../images/logo.png');
let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/arrow_left.png');
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
        },
    ]
};
class FindJobScreen extends Component {
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
    
    rendermapdata(){
        var screen = this.props.navigation.state.routeName;
        return maplocations.data.map((data, index)=>{
            return(
                <View style={{flex:1,marginBottom: scale(10), width: "100%", backgroundColor:"#fff", borderRadius:scale(10),padding:scale(20)}} key={index}>
                  <View style={{
                            height: scale(54),
                            flexDirection: 'row',
                            backgroundColor: "transparent",
                            justifyContent: 'space-between',
                        }}>
                            <View style={{
                                width: "50%",
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: "transparent"
                            }}>
                                <Text style={{fontSize: scale(16), fontFamily: 'Montserrat-Medium', color: "#000"}}>{data.jobtitle}</Text>
                                <Image style={{
                                    width: scale(20),
                                    height: scale(20),
                                    paddingHorizontal: scale(15),
                                    backgroundColor: "transparent"
                                }} source={data.icon} resizeMode="contain" resizeMethod="resize"/>
                            </View>
                            <View style={{
                                width: "30%",
                                height: scale(54),
                                backgroundColor: "transparent",
                                alignItems: 'flex-end',
                                justifyContent: 'center'

                            }}>

                                 {
                                     (screen == 'trackNow' || screen == 'findJobs')?(
                                           <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate(screen=='trackNow' ? 'jobTrack' : 'jobDetail')}>
                                            <LinearGradient
                                                colors={['#3E85EF', '#3EBDEF']}
                                                start={{x: 0, y: 0}}
                                                end={{x: 1, y: 0}}
                                                style={styles.button}>
                                                <Text style={styles.btnText}>{screen=='trackNow' ? 'TRACK NOW' : 'APPLY'}</Text>
                                            </LinearGradient>
                                        </TouchableHighlight>

                                     ):(
                                       <TouchableHighlight  onPress={() => this.props.navigation.navigate(screen=='trackNow' ? 'jobTrack' : 'jobDetail')}>
                                                <Image style={{width: scale(15), height: scale(15)}} source={require('../assets/icons/eclipse.png')} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableHighlight>

                                     )
                                 }

                            </View>
                        </View>
                    <View style={{ width:"100%"}} >
                       <Text style={{fontSize: scale(15), color: "#9B9B9B", fontFamily: "Montserrat-Medium"}}
                                          numberOfLines={3}>{data.detail}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:scale(10),justifyContent:'center',alignItems:'center'}}>
                        {
                            this.state.images.map((image,key)=>{
                                return  <TouchableWithoutFeedback  onPress={()=>{this.showImage(key)}} key={key}>
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
                    <View style={{flexDirection:'row', backgroundColor:"#fff",paddingTop:scale(10),alignItems:'space-between'}}>
                        <View style={{flex:1.3}}>
                          <View style={{ flexDirection: 'row'}}>
                                <Image style={{width: scale(15), height: scale(15),marginTop:scale(3)}} source={require('../assets/icons/calender.png')} resizeMode="contain" resizeMethod="resize"/>
                                    <Text style={{
                                        marginLeft: scale(10),
                                        fontFamily: "Montserrat-Regular",
                                        fontSize: scale(14),
                                        color: 'rgb(101,101,101)'
                                    }}>Before the 19 Sep 2018</Text>
                            </View>
                             <View style={{flexDirection: 'row', justifyContent: 'space-between',paddingTop:scale(3)}}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image style={{width: scale(15), height: scale(15),marginTop:scale(3)}} source={require('../assets/icons/map_location_red.png')} resizeMode="contain" resizeMethod="resize"/>
                                        <Text style={{paddingLeft: scale(5), fontSize: scale(14), fontFamily: "Montserrat-Light"}}>
                                            3 mi
                                        </Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Text style={{
                                            fontSize: scale(14),
                                            color: 'rgb(74,74,74)',
                                            fontFamily: "Montserrat-Bold"
                                        }}>Budget : </Text><Text style={{
                                        fontSize: scale(14),
                                        color: 'rgb(80,174,87)',
                                        fontFamily: "Montserrat-Bold"
                                    }}>$240</Text>
                                    </View>
                                </View>
                        </View>
                         <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                          <TouchableOpacity onPress={()=> this.setState({liked: !this.state.liked})}>
                                <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.iconButton}>
                                        <Image source={this.state.liked ? require('../assets/icons/heart_red.png') : require('../assets/icons/heart_white.png')} style={[styles.iconStyle,{width:scale(18),height:scale(18)}]}  resizeMode="contain" resizeMethod="resize"/>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={()=> this.shareJob()}>
                                <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.iconButton}>
                                        <Image source={require('../assets/icons/send_white.png')} style={[styles.iconStyle,{width:scale(18),height:scale(18)}]}  resizeMode="contain" resizeMethod="resize"/>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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

    showImage(index){
        console.log('imgIndex',index);
        let {images} = this.state;
        let imagesArray = images.map((image)=>{
            return {url:image}
        })
        this.props.showPhotoView({index,images:imagesArray,photoShow:true})
    }

    render() {
        
        // const {params} = this.props.navigation.state;
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
                        is_home={true}
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
                                    <View style={{ backgroundColor: 'transparent', justifyContent : 'center', alignItems: 'flex-start', height:scale(54)}}>
                                        <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(20), 
                                        // paddingLeft:scale(10)
                                        }}>Find Jobs</Text>
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
                                }/>
                        }
                        content={
                            <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingVertical: scale(10)}}>
                                <View style={{ paddingVertical:scale(10),flexDirection:'row', paddingHorizontal: scale(width/6)}}>
                                {this.tabrender()}
                            </View>
                           </View>
                        }/>
                    <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                        <Advertisement/>
                        {
                            this.state.tabindex === 0
                                ?
                                <JobsList  navigation={this.props.navigation}/>
                                :
                                <Map pinPress={() => this.refs.modal1.open()}/>
                        }
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
                    <ScrollView ScrollView contentContainerStyle={{}}>
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
    modal: {
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    modal2: {
        height: scale(230),
        backgroundColor: "#3B5998"
    },
    modal3: {
        height: scale(300),
        width: scale(300)
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        width: scale(100),
        height: scale(40),
        borderRadius:scale(20),
        paddingTop:scale(5),
        paddingBottom:scale(5),
    },
    imgBox: {
    flex:1,
    padding:1,

},
overlay: {
    position: 'absolute',
    top: 8,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.6)',
    opacity: 2,
        justifyContent:'center',
        alignItems:'center',
       width:'100%',
      height:scale(97),
      borderRadius:scale(10),
},
      iconStyle: {
     width:scale(15),
     height:scale(15)
  },
imgStyle:{
    width:'100%',
    height:scale(110),
    borderRadius:scale(10),
},
    iconButton: {
    marginHorizontal:5,
    width: scale(45),
    height:scale(45),
    borderRadius:scale(30),
    justifyContent:'center',
    alignItems:'center'
  },
      btnText: {
      fontFamily:"Montserrat-Bold",
        textAlign:'center',
        color:'white',
        fontSize:scale(12)
    },
})


const mapStateToProps = state=> ({ 
    backButton:state.user.backButton,
})

export default connect(mapStateToProps, actions)(FindJobScreen);

