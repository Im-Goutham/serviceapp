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
import {scale} from '../global';
// import Icon from 'react-native-vector-icons/EvilIcons';

import HeaderScreen from './HeaderScreen';

var {height, width} = Dimensions.get('window');
let tabItems = ["List View", "Map View"];

let logo = require('../images/logo.png');
let back_arrow = require('../assets/icons/arrow_left.png');
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
                                        <TouchableOpacity  onPress={() => this.props.navigation.goBack()}  style={{width: "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                        <Image source={back_arrow} style={{ width: '50%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{width: "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                        <Image source={menu} style={{ width: '50%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableOpacity>
                                     </View>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:scale(54)}}>
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(18)}}>Review & Rating</Text>
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
                               height:scale(20),
                               // borderRadius:40
                               position:"absolute",
                               bottom:scale(0),
                               right:scale(30)
                           }} resizeMode="contain" resizeMethod="resize"/>

                       </View>
                       <View style={styles.profileContent}>
                           <View style={styles.username}>
                               <View style={styles.nametextcontainer}>
                                    <Text style={{ fontFamily: 'Montserrat-Medium', color:"#000", fontSize: scale(16)}}>Shane Mendoza</Text>
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
                               <Text style={{fontFamily:"Montserrat-SemiBold", color:"#000", fontSize:scale(16)}}>Give Your Feedback</Text>
                           </View>
                           <View style={styles.feedbacktext}>
                             <Input style={styles.inputLabel} placeholder="Type here" />
                           </View>

                       </View>
                       <TouchableOpacity>
                           <LinearGradient
                               colors={['#3E85EF', '#3EBDEF']}
                               start={{x: 0, y: 0}}
                               end={{x: 1, y: 0}}
                               style={{
                                   height:scale(54),
                                   borderRadius:scale(27),
                                   justifyContent:"center",
                                   alignItems:'center',
                                   marginTop:scale(20)
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
        paddingHorizontal: scale(10),
        backgroundColor:"#F9FCFF",
        flex:1

    },
    profileContent:{
        position:"relative",
        height:scale(190),
        backgroundColor:"#fff",
        borderRadius:scale(10),
        marginTop: scale(40),
        justifyContent:'flex-end',
        shadowOffset: { width:  0, height:  2 },
        shadowOpacity:  0.2,
        shadowRadius:  2,
        elevation: 3
    },
    profile:{
        width:scale(80),
        height:scale(80),
        // borderRadius:40,
        // backgroundColor:"#F9FCFF",
        position:"absolute",
        alignSelf: "center",
        zIndex:1,
        top:scale(10),
        elevation: 3,
        shadowOffset: { width:  0, height:  2 },
        shadowOpacity:  0.2,
        shadowRadius:  2,
        elevation: 3
    },
    profileimage:{
        width:"100%",
        height:scale(80),
        borderRadius:scale(40)
    },
    username:{
        height:scale(134)
    },
    nametextcontainer:{
        height:scale(54),
        backgroundColor:"#fff",
        justifyContent:'center',
        alignItems:'center'
    },
    btnText: {
        textAlign:'center',
        color:'white',
        fontSize:scale(17),
        fontFamily:'Montserrat-Bold'
    },
    startrating:{
        height:scale(40),
        // backgroundColor:"#009933",
        justifyContent:'center',
        flexDirection:'row'
        // alignItems:'center'
    },
    slidercontainer:{
        padding:scale(20),
        height:scale(40),
        // backgroundColor:"#F9FCFF",
        justifyContent:'center',
        // alignItems:'center'
    },
    rate:{
        height:scale(40),
        alignItems:'center',
        // backgroundColor:"red",
        flexDirection:"row",
        width:scale(width/5-3),
        justifyContent:"center"
    },
    star:{
        width:"30%",
        height:scale(15)
    },
    feedbackcontainer:{
        height:scale(150),
        backgroundColor:"#fff",
        borderRadius:scale(10),
        marginTop: scale(20),
        justifyContent:'flex-end',
        shadowOffset: { width:  0, height:  2 },
        shadowOpacity:  0.2,
        shadowRadius:  2,
        elevation: 3
    },
    ratetext:{
        fontFamily:"Montserrat-Bold",
        fontSize:scale(14)
    },
    feedbacktext:{
        height:"50%",
        justifyContent:"center",
        paddingHorizontal: scale(20)
    },
    inputLabel: {
        textAlign:'left',
        fontSize: scale(16),
        fontFamily:'Montserrat-Light',
     },
   
})