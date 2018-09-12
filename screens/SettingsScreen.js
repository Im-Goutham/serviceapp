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
import {  Icon, CheckBox } from 'native-base'
import Advertisement from '../components/Advertisement';
import SettingsList from '../components/SettingsList';
import Map from '../components/Map';
import Header from '../components/Header';
import Modal from 'react-native-modalbox';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/EvilIcons';

import HeaderScreen from './HeaderScreen';

var {height, width} = Dimensions.get('window');


let logo = require('../images/logo.png');
let menu = require('../assets/icons/menu.png');
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



class SettingsScreen extends Component {
  constructor(props){
      super(props);
      this.state={
 
      }
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
                                   <TouchableOpacity
                                       onPress={() => this.props.navigation.openDrawer()}
                                       style={{width : 54, height:54, justifyContent:'center', alignItems: 'center'}}>
                                       <Image source={menu} style={{ width: '100%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                   </TouchableOpacity>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:54}}>
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 18}}>Settings</Text>
                               </View>
                               }
                               right={
                                   <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                       <TouchableOpacity style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                           <Icon  name='md-search' style={{color:'#fff',fontSize:25,fontWeight:'bold'}}/>
                                       </TouchableOpacity>
                                       <TouchableOpacity onPress={() => this.refs.modal1.open()} style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                           <Icon  name='md-person' style={{color:'#fff',fontSize:25,fontWeight:'bold'}}/>
                                       </TouchableOpacity>
                                   </View>
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingVertical: 10}}>
                       
                   </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                          <SettingsList/>
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

export default SettingsScreen;
