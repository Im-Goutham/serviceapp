import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image ,
  TouchableOpacity,
  Dimensions,
  Platform,
  Text
} from 'react-native';
// import {  Header, Left, Body, Right, Button, Icon, Title,Tab, Tabs ,Text } from 'native-base'
import Advertisement from '../components/Advertisement';
import JobsList from '../components/JobsList';
import Map from '../components/Map';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';

var {height, width} = Dimensions.get('window');
let tabItems = ["List View", "Map View"];

let logo = require('../images/logo.png');
let menu = require('../assets/icons/menu.png');
let border_img = require('../images/border_img.png');

class FindJobScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        tabindex : 0
      }
  }
  tabrender(){
    return tabItems.map((value, index)=>{
      return (
        <TouchableOpacity onPress={()=>this.setState({
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
            fontSize: 20,
            fontFamily: 'Montserrat-Bold'
          }}>{value}</Text>
        <View style={{
            width: 70,
            height: this.state.tabindex === index ? 5 : 0,
            backgroundColor: "#fff",
            borderRadius : 3
            // borderColor: this.state.tabindex === index ? "#fff": "transparent"
          }}/>
      </TouchableOpacity>
    )
    })
  }
    render() {
       return (
         <LinearGradient
           colors={['rgb(60, 139, 239)', 'rgb(60,187, 239)']}
           start={{x: 0, y: 0}}
           end={{x: 1, y: 0}}
           style={{
             flex: 1,
             // height: Platform.OS === 'ios'? 200: 250,
             // justifyContent : 'flex-end',
             // flexDirection: 'row'
             // borderRadius: 5
           }}>
             <Header
               navigation={this.props.navigation}
               left = {
                 <TouchableOpacity
                   onPress={() => this.props.navigation.openDrawer()}
                   style={{width : 54, height:54, justifyContent:'center', alignItems: 'center'}}>
                   <Image source={menu} style={{ width: '100%', height: 25}} resizeMode="contain" resizeMethod="resize"/>
                 </TouchableOpacity>
               }
               title={
                 <View style={{ justifyContent : 'center', alignItems: 'flex-start', width:"50%", height:54}}>
                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 20}}>Find JOB</Text>
                 </View>
               }
               />
             <View style={{backgroundColor :"transparent", flex:0.2, justifyContent: "space-between"}}>
             <View style={{ paddingTop:30,flexDirection:'row', paddingHorizontal: width/6}}>
               {this.tabrender()}
             </View>
             <View style={{}}>
               <Image source={border_img} style={{ width: '100%', height: 34}} resizeMode="contain" resizeMethod="resize"/>
             </View>
           </View>
           <View style={{backgroundColor :"rgb(249,252, 255)", flex:0.8}}>
             <Advertisement/>
             {this.state.tabindex === 0 ?<JobsList/>:<Map/>}
           </View>
         </LinearGradient>
       )
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})

export default FindJobScreen;
