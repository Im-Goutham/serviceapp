import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
 import {  Icon } from 'native-base'
import Advertisement from '../components/Advertisement';
import NotificationsList from '../components/NotificationsList';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import HeaderScreen from './HeaderScreen';


let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/back-arrow.png');

class NotificationScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        tabindex : 0
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
                                    <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                        <TouchableOpacity  onPress={() => this.props.navigation.goBack()}  style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                        <Image source={back_arrow} style={{ width: '50%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                        <Image source={menu} style={{ width: '50%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableOpacity>
                                    </View>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:54}}>
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 20}}>Notifications</Text>
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
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                       <Advertisement/>
                          <NotificationsList/>
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

export default NotificationScreen;
