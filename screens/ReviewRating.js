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
 import {  Icon } from 'native-base'
import Advertisement from '../components/Advertisement';
import JobsList from '../components/JobsList';
import Map from '../components/Map';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modalbox';
// import Icon from 'react-native-vector-icons/EvilIcons';

import HeaderScreen from './HeaderScreen';

var {height, width} = Dimensions.get('window');
let tabItems = ["List View", "Map View"];

let logo = require('../images/logo.png');
let menu = require('../assets/icons/menu.png');
let border_img = require('../images/border_img.png');


export default class ReviewRating extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render(){
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
                                   <TouchableOpacity
                                       onPress={() => this.props.navigation.openDrawer()}
                                       style={{width : 54, height:54, justifyContent:'center', alignItems: 'center'}}>
                                       <Image source={menu} style={{ width: '100%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                   </TouchableOpacity>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:54}}>
                                   <Text style={{ fontFamily: 'Montserrat-Regular', color:"#fff", fontSize: 20}}>Review & Rating</Text>
                               </View>
                               }
                               right={
                                   <View/>
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
                                    <Text style={{ fontFamily: 'Montserrat-Regular', color:"#000", fontSize: 20}}>Shane Mendoza</Text>
                               </View>
                               <View style={styles.startrating}>
                                   <TouchableOpacity style={styles.rate}>
                                       <Image source={require('../assets/icons/star_gold.png')} style={styles.star} resizeMode="contain" resizeMethod="resize"/>
                                       <Text style={styles.ratetext}>1</Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={styles.rate}>
                                       <Image source={require('../assets/icons/star_gold.png')} style={styles.star} resizeMode="contain" resizeMethod="resize"/>
                                        <Text style={styles.ratetext}>2</Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={styles.rate}>
                                       <Image source={require('../assets/icons/star_gold.png')} style={styles.star} resizeMode="contain" resizeMethod="resize"/>
                                        <Text style={styles.ratetext}>3</Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={styles.rate}>
                                       <Image source={require('../assets/icons/star_gold.png')} style={styles.star} resizeMode="contain" resizeMethod="resize"/>
                                        <Text style={styles.ratetext}>4</Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={styles.rate}>
                                       <Image source={require('../assets/icons/star_gold.png')} style={styles.star} resizeMode="contain" resizeMethod="resize"/>
                                       <Text style={styles.ratetext}>5</Text>
                                   </TouchableOpacity>
                               </View>
                               <View style={styles.slidercontainer}>
                                   <Slider
                                       step={1}
                                       maximumValue={100}
                                       value={20}
                                   />
                               </View>
                           </View>
                       </View>
                       <View style={styles.feedbackcontainer}>
                           <View style={styles.feedbacktext}>
                               <Text style={{fontFamily:"Montserrat-Regular", color:"#000", fontSize:20}}>Give Your Feedback</Text>
                           </View>
                           <View style={styles.feedbacktext}>
                           <TextInput
                               style={{height: 40, borderColor: 'gray', fontSize:20 , borderBottomWidth: 1}}
                               onChangeText={(text) => this.setState({text})}
                               value={this.state.text}
                               placeholder="Type here"
                           />
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
                               <Text style={{color:"#fff", fontFamily:"Montserrat-Regular", fontSize:20}}>Submit</Text>
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
        height:177,
        backgroundColor:"#fff",
        borderRadius:10,
        marginTop: 40,
        justifyContent:'flex-end',
        shadowOffset: { width:  0, height:  2 },
        shadowOpacity:  0.2,
        shadowRadius:  2,
        elevation: 1
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
        elevation: 1

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
    startrating:{
        height:40,
        // backgroundColor:"#009933",
        justifyContent:'center',
        flexDirection:'row'
        // alignItems:'center'
    },
    slidercontainer:{
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
        height:20
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
        elevation: 1
    },
    ratetext:{
        fontFamily:"Montserrat-Bold",
        fontSize:20
    },
    feedbacktext:{
        height:"50%",
        justifyContent:"center",
        paddingHorizontal: 20
    }
})