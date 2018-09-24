import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
    Text,
    Slider,
    TextInput,
    TouchableHighlight
} from 'react-native';
 import {  Icon ,Input} from 'native-base'
import Header from '../components/Header';
import CostumSlider from '../components/CostumSlider';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modalbox';
// import Icon from 'react-native-vector-icons/EvilIcons';

import HeaderScreen from './HeaderScreen';

var {height, width} = Dimensions.get('window');
let tabItems = ["List View", "Map View"];

let logo = require('../images/logo.png');
let back_arrow = require('../assets/icons/back-arrow.png');
let menu = require('../assets/icons/menu.png');
let border_img = require('../images/border_img.png');


export default class ReviewRating extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            value: 2,
        };
    }

    change(value) {
        console.log('value is ',value);
        this.setState(() => {
          return {
            value: parseFloat(value),
          };
        });
      }

    render(){
        const {value} = this.state;
        return(
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
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 18}}>Review & Rating</Text>
                               </View>
                               }
                               right={
                                 null
                               }
                           />
                       }
                   />
                   <ScrollView contentContainerStyle={styles.container}>
                       <View style={styles.profile}>
                           <Image source={require('../images/svp1.png')} style={styles.profileimage} resizeMode="contain" resizeMethod="resize"/>
                           <Image source={require('../images/check.png')} style={{
                               width:"100%",
                               height:20,
                               // borderRadius:40
                               position:"absolute",
                               bottom:0,
                               right:30
                           }} resizeMode="contain" resizeMethod="resize"/>

                       </View>
                       <View style={styles.profileContent}>
                           <View style={styles.username}>
                               <View style={styles.nametextcontainer}>
                                    <Text style={{ fontFamily: 'Montserrat-Medium', color:"#000", fontSize: 16}}>Shane Mendoza</Text>
                               </View>
                               <View style={styles.startrating}>
                                   <TouchableOpacity style={styles.rate}>
                                       <Image source={value>0 ? require('../assets/icons/star_gold.png') :require('../assets/icons/star_grey.png')} style={styles.star} resizeMode="contain" resizeMethod="resize"/>
                                       <Text style={styles.ratetext}>1</Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={styles.rate}>
                                       <Image source={value>1 ? require('../assets/icons/star_gold.png') :require('../assets/icons/star_grey.png')} style={styles.star} resizeMode="contain" resizeMethod="resize"/>
                                        <Text style={styles.ratetext}>2</Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={styles.rate}>
                                       <Image source={value>2 ? require('../assets/icons/star_gold.png') :require('../assets/icons/star_grey.png')} style={styles.star} resizeMode="contain" resizeMethod="resize"/>
                                        <Text style={styles.ratetext}>3</Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={styles.rate}>
                                       <Image source={value>3 ? require('../assets/icons/star_gold.png') :require('../assets/icons/star_grey.png')} style={styles.star} resizeMode="contain" resizeMethod="resize"/>
                                        <Text style={styles.ratetext}>4</Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={styles.rate}>
                                       <Image source={value>4 ? require('../assets/icons/star_gold.png') :require('../assets/icons/star_grey.png')} style={styles.star} resizeMode="contain" resizeMethod="resize"/>
                                       <Text style={styles.ratetext}>5</Text>
                                   </TouchableOpacity>
                               </View>
                               <View style={styles.slidercontainer}>
                               <CostumSlider/>
                                   <Slider
                                        step={1}
                                        maximumValue={5}
                                        onValueChange={this.change.bind(this)}
                                        value={value}
                                       trackImage={require('../assets/icons/track_bar.png')}
                                       thumbImage={require('../assets/icons/track_button.png')}
                                   />
                               </View>
                           </View>
                       </View>
                       <View style={styles.feedbackcontainer}>
                           <View style={styles.feedbacktext}>
                               <Text style={{fontFamily:"Montserrat-SemiBold", color:"#000", fontSize:16}}>Give Your Feedback</Text>
                           </View>
                           <View style={styles.feedbacktext}>
                             <Input style={styles.inputLabel} placeholder="Type here" />
                           </View>

                       </View>
                       <TouchableOpacity>
                           <LinearGradient
                               colors={['rgb(60, 139, 239)', 'rgb(60,187, 239)']}
                               start={{x: 0, y: 0}}
                               end={{x: 1, y: 0}}
                               style={{
                                   height:54,
                                   borderRadius:27,
                                   justifyContent:"center",
                                   alignItems:'center',
                                   marginTop:20
                               }}>
                               <Text style={styles.btnText}>SUBMIT</Text>
                           </LinearGradient>
                       </TouchableOpacity>
                   </ScrollView>
               </LinearGradient>
           </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        backgroundColor:"#F9FCFF",
        flex:1

    },
    profileContent:{
        position:"relative",
        height:190,
        backgroundColor:"#fff",
        borderRadius:10,
        marginTop: 40,
        justifyContent:'flex-end',
        shadowOffset: { width:  0, height:  2 },
        shadowOpacity:  0.2,
        shadowRadius:  2,
        elevation: 3
    },
    profile:{
        width:80,
        height:80,
        // borderRadius:40,
        // backgroundColor:"#F9FCFF",
        position:"absolute",
        alignSelf: "center",
        zIndex:1,
        top:10,
        elevation: 3

    },
    profileimage:{
        width:"100%",
        height:80,
        borderRadius:40
    },
    username:{
        height:134
    },
    nametextcontainer:{
        height:54,
        backgroundColor:"#fff",
        justifyContent:'center',
        alignItems:'center'
    },
    btnText: {
        textAlign:'center',
        color:'white',
        fontSize:17,
        fontFamily:'Montserrat-Bold'
    },
    startrating:{
        height:40,
        // backgroundColor:"#009933",
        justifyContent:'center',
        flexDirection:'row'
        // alignItems:'center'
    },
    slidercontainer:{
        padding:20,
        height:40,
        // backgroundColor:"#F9FCFF",
        justifyContent:'center',
        // alignItems:'center'
    },
    rate:{
        height:40,
        alignItems:'center',
        // backgroundColor:"red",
        flexDirection:"row", width:width/5-3,
        justifyContent:"center"
    },
    star:{
        width:"30%",
        height:15
    },
    feedbackcontainer:{
        height:150,
        backgroundColor:"#fff",
        borderRadius:10,
        marginTop: 20,
        justifyContent:'flex-end',
        shadowOffset: { width:  0, height:  2 },
        shadowOpacity:  0.2,
        shadowRadius:  2,
        elevation: 3
    },
    ratetext:{
        fontFamily:"Montserrat-Bold",
        fontSize:14
    },
    feedbacktext:{
        height:"50%",
        justifyContent:"center",
        paddingHorizontal: 20
    },
    inputLabel: {
        textAlign:'left',
        fontSize: 16,
        fontFamily:'Montserrat-Light',
     },
   
})