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
// import Icon from 'react-native-vector-icons/EvilIcons';

import HeaderScreen from './HeaderScreen';

var {height, width} = Dimensions.get('window');
let tabItems = ["List View", "Map View"];

let logo = require('../images/logo.png');
let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/back-arrow.png');
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



class DeleteAccountScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        tabindex : 0,
        selectedkey:0,
        options:[
           "I'm getting too many email notifications(Did you know you can change your Notification settings)",
           "My account was hacked",
           "I can't find interesting jobs",
           "I accidentally made another account",
           "I don't use or like the app or website",
           "I have a privacy concern",
           "Other"
        ]
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
              <View style={{height:300,marginBottom: 10, width: "100%", backgroundColor:"#fff", borderRadius:10}} key={index}>
                  <View style={{ flexDirection:"row", justifyContent:"space-between", height:50, alignItems:"center", paddingHorizontal:20}} >
                      <View style={{ flexDirection:"row"}} >
                          <Text style={{color:"#000", fontFamily:"Montserrat-regular"}}>{data.jobtitle}</Text>
                          <Image style={{width:20,height:20, paddingHorizontal:15, backgroundColor:"transparent"}} source={data.icon}
                                 resizeMode="contain" resizeMethod="resize"/>
                      </View>
                      <TouchableHighlight style={styles.button} onPress={()=>console.warn("nejkhknz")} >
                          <LinearGradient
                              colors={['#3E85EF', '#3EBDEF']}
                              start={{x: 0, y: 0}}
                              end={{x: 1, y: 0}}
                              style={styles.button}>
                              <Text style={styles.btnText}>APPLY</Text>
                          </LinearGradient>
                      </TouchableHighlight>
                  </View>
                  <View style={{ width:"100%", padding:20}} >
                      <Text style={{fontFamily:"Montserrat",}}>{data.detail}</Text>
                  </View>
                  <View style={{flexDirection:"row", backgroundColor:"#fff"}}>
                      <View style={{ width : "30%",marginHorizontal: 5}} >
                      <Image style={{width:"100%", height:100, borderRadius:10}} source={data.image}
                             resizeMode="contain" resizeMethod="resize"/>
                      </View>
                      <View style={{ width : "30%",marginHorizontal: 5}} >
                      <Image style={{width:"100%", height:100, borderRadius:10}} source={data.image}
                             resizeMode="contain" resizeMethod="resize"/>
                      </View>
                      <View style={{ width : "30%",marginHorizontal: 5}} >
                      <Image style={{width:"100%", height:100, borderRadius:10}} source={data.image}
                             resizeMode="contain" resizeMethod="resize"/>
                      </View>
                  </View>
                  <View style={{flexDirection:'row', backgroundColor:"#fff", paddingHorizontal:20}}>
                      <View style={{flexDirection:'column', backgroundColor:"transparent", width:"70%"}}>
                          <Text style={{fontSize:12}}><Icon style={{color:'#007FFA',fontSize:20}} active name="ios-calendar-outline" /> <Text style={{paddingLeft:5, fontFamily:"Montserrat-Regular",fontSize:15}}>Before the 19 Sep 2018</Text></Text>
                          <Text style={{fontSize:15,}}><Icon style={{color:'#c33c4c',fontSize:20}} active name="md-pin" />  <Text style={{paddingLeft:5, fontFamily:"Montserrat-Light"}}>3km </Text></Text>
                      </View>
                      <View style={{flexDirection:'column', backgroundColor:"transparent", width:"30%", flexDirection:"row", justifyContent:"space-between"}}>
                          <Image source={require("../assets/icons/heart.png")}
                                 style={{width:"100%", height:30}} resizeMode="contain" resizeMethod="resize"/>
                          <Image source={require("../assets/icons/navigation.png")}
                                 style={{width:"100%", height:30}} resizeMode="contain" resizeMethod="resize"/>

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
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 18}}>Delete My Account</Text>
                               </View>
                               }
                               right={
                                   <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                     
                                   </View>
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingVertical: 10}}>
                       
                   </View>
                       }
                   />
                   <View style={{flex:1}}>
                   <View style={{flex:8.5,backgroundColor :"rgb(249,252, 255)",paddingHorizontal:20}}>
                   <Text style={{color:'#22262C', fontSize:16,marginVertical:5,lineHeight:25,fontFamily:'Montserrat-Bold'}}>Are you sure you want to delete your account?</Text>
                         <Text style={{color:'#9B9B9B', fontSize:14,marginVertical:5,lineHeight:25,fontFamily:'Montserrat-Bold'}}>Please let us know why you are leaving</Text>
                         <View>
                             {
                                 this.state.options.map((option,index)=>{
                                    return <TouchableOpacity  onPress={()=>this.setState({selectedkey : index})}>
                                       <View style={[styles.selectBox,{paddingHorizontal:index === this.state.selectedkey ? 0 : 10}]}>
                                            <Radio selected={index === this.state.selectedkey ? true : false} />
                                            <Text style={styles.selectText}>
                                                {option}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                 })
                             }
                         </View>
                         <View style={{marginVertical:20,fontFamily:'Montserrat-Medium',color:'#9B9B9B'}}>
                               <Text>Write the reason</Text>
                               <Item>
                                <Input placeholder="Type here" />
                            </Item>
                         </View>
                   </View>
                   <View style={{flex:1.5, justifyContent:'center',alignItems:'center'}}>
                       <Text style={{fontSize:18,color:'white',fontFamily:'Montserrat-Bold'}}>Delete My Account</Text>
                   </View>
                       </View>
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
    width: 100,
    height: 40,
    borderRadius:20,
    // borderWidth: 1,
    // borderColor: '#008000',
    paddingTop:5,
    paddingBottom:5,
},
   selectText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        paddingHorizontal:10,
        color:'rgb(74,74,74)'
   },
   selectBox: {
       flexDirection:'row',
       marginVertical:10
    }
})

export default DeleteAccountScreen;
