import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
    Text, TouchableHighlight
} from 'react-native';
 import {  Icon, Radio, Item, Input} from 'native-base'
import Advertisement from '../components/Advertisement';
import LanguageList from '../components/LanguageList';
import Map from '../components/Map';
import Header from '../components/Header';
import Modal from 'react-native-modalbox';
import LinearGradient from 'react-native-linear-gradient';
import RadioButton from 'radio-button-react-native';


import HeaderScreen from './HeaderScreen';

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
      jobtitle:'Need Cook',
      icon: require('../assets/icons/crown.png'),
      image: require('../images/tutorial.png'),
      detail: "Lorem Ipsum has been the industrys standard dummy text ever",
    }
        ]
}



class DeleteAccountScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        tabindex : 0,
        selectedkey:0,
        options:[
          { label: "I'm getting too many email notifications(Did you know you can change your Notification settings)", value: 0},
          { label: "My account was hacked", value: 1},
          { label:  "I can't find interesting jobs", value: 2},
          { label:  "I accidentally made another account", value: 3},
          { label:  "I don't use or like the app or website", value: 4},
          { label: "I have a privacy concern", value: 5},
          { label: "Other", value: 6},
        ],
        value: 0
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
          justifyContent: "space-between",
          alignItems:'center',
        }}>
        <Text
          style={{
            color: this.state.tabindex === index ? "#fff" : "rgb(158, 212, 247)",
            fontSize: scale(16),
            fontFamily: 'Montserrat-Bold'
          }}>{value}</Text>
        <View style={{
            width: scale(70),
            height: this.state.tabindex === index ? scale(3) : 0,
            backgroundColor: "#fff",
            borderRadius : scale(3)
            // borderColor: this.state.tabindex === index ? "#fff": "transparent"
          }}/>
      </TouchableOpacity>
    )
    })
  }

  handleOnPress(value){
    this.setState({value:value})
}

    render() {
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
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(20)}}>Delete My Account</Text>
                               </View>
                               }
                               right={
                                   <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                     
                                   </View>
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingVertical: scale(10)}}>
                       
                   </View>
                       }
                   />
                   <ScrollView contentContainerStyle={{flexGrow:1}}>
                   <View style={{flex:8.5,backgroundColor :"rgb(249,252, 255)",paddingHorizontal:scale(20)}}>
                   <Text style={{color:'#22262C', fontSize:scale(16),marginVertical:scale(5),lineHeight:scale(25),fontFamily:'Montserrat-Bold'}}>Are you sure you want to delete your account?</Text>
                         <Text style={{color:'#9B9B9B', fontSize:scale(14),marginVertical:scale(5),lineHeight:scale(25),fontFamily:'Montserrat-Bold'}}>Please let us know why you are leaving</Text>
                         <View style={{}}> 
                         {
                                 this.state.options.map((option,index)=>{
                                    return  <View style={{paddingVertical:scale(10)}}>
                                                <RadioButton
                                                   currentValue={this.state.value}
                                                   value={option.value} 
                                                   onPress={()=>this.setState({value : option.value})}
                                                   outerCircleColor='rgb(211,217,226)'
                                                   outerCircleSize={scale(24)}
                                                   outerCircleWidth={scale(2)}
                                                   innerCircleColor='#3E85EF'
                                                   innerCircleSize={scale(12)}
                                                   >
                                                <Text style={styles.selectText}>
                                                                {option.label}
                                            </Text>
                                            </RadioButton>
                                         </View>
                                 })
                         }
                         </View>
                         <View style={{marginVertical:scale(20),fontFamily:'Montserrat-Medium',color:'#9B9B9B'}}>
                               <Text>Write the reason</Text>
                               <Item>
                                <Input placeholder="Type here" style={styles.inputLabel}/>
                            </Item>
                         </View>
                   </View>
                   <View style={{flex:1.5, justifyContent:'center',alignItems:'center',paddingVertical:scale(20)}}>
                       <Text style={{fontSize:scale(18),color:'white',fontFamily:'Montserrat-Bold'}}>Delete My Account</Text>
                   </View>
                       </ScrollView>
               </LinearGradient>
              
           </View>
       )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
    button:{
    justifyContent:'center',
    alignItems:'center',
    width: scale(100),
    height: scale(40),
    borderRadius:scale(20),
    // borderWidth: 1,
    // borderColor: '#008000',
    paddingTop:scale(5),
    paddingBottom:scale(5),
},
   selectText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: scale(16),
        paddingHorizontal:scale(10),
        color:'rgb(74,74,74)'
   },
   selectBox: {
       flexDirection:'row',
       marginVertical:scale(10)
    },
    inputLabel: {
        textAlign:'left',
        fontSize: scale(16),
        fontFamily:'Montserrat-Light',
     },
})



  
export default DeleteAccountScreen;

