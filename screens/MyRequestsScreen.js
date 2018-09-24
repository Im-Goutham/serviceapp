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
 import {  Icon } from 'native-base'
import Advertisement from '../components/Advertisement';
import JobsList from '../components/JobsList';
import ServiceProvidersList from '../components/ServiceProvidersList';
import Map from '../components/Map';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modalbox';
// import Icon from 'react-native-vector-icons/EvilIcons';

import HeaderScreen from './HeaderScreen';

var {height, width} = Dimensions.get('window');
let tabItems = ["Booking Requests", "Hiring Requests"];

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



class MyRequestScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        tabindex : 0
      }
  }
  tabrender(){
    return tabItems.map((value, index)=>{
      return (
          <View>
        <TouchableOpacity key={index} onPress={()=>this.setState({
            tabindex: index
          })}
          style={{
          // backgroundColor: this.state.tabindex === index ? "blue": "transparent",
          height : 40,
          justifyContent: "space-around",
          alignItems:'center',
        }}>
        <Text
          style={{
            color: this.state.tabindex === index ? "#fff" : "rgb(158, 212, 247)",
            fontSize: 16,
            fontFamily: 'Montserrat-Bold'
          }}>{value}</Text>
        <View style={{
            width: 40,
            height: this.state.tabindex === index ? 3 : 0,
            backgroundColor: "#fff",
            borderRadius : 3
            // borderColor: this.state.tabindex === index ? "#fff": "transparent"
          }}/>
      </TouchableOpacity>
      </View>
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
                                  <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 18}}>My Requests</Text>
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
                          <View style={{ paddingVertical:10,flexDirection:'row',justifyContent:'space-around'}}>
                           {this.tabrender()}
                           </View>
                   </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                       <Advertisement/>
                         {this.state.tabindex === 0 ?<JobsList  navigation={this.props.navigation}/>:<ServiceProvidersList  navigation={this.props.navigation}/>}
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
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
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
})

export default MyRequestScreen;
