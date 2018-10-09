import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    Text,
} from 'react-native';
 import { connect } from 'react-redux';
import * as actions from '../actions';
import Advertisement from '../components/Advertisement';
import JobsList from '../components/JobsList';
import ServiceProvidersList from '../components/ServiceProvidersList';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import HeaderScreen from './HeaderScreen';

import {scale} from '../global';


let tabItems = ["Booking Requests", "Hiring Requests"];

let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/arrow_left.png');


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
          <View key={index}>
        <TouchableOpacity onPress={()=>this.setState({
            tabindex: index
          })}
          style={{
          // backgroundColor: this.state.tabindex === index ? "blue": "transparent",
          height : scale(40),
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
      </View>
    )
    })
  }

    render() {
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
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:scale(54)}}>
                                  <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(20)}}>My Requests</Text>
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
                          <View style={{ paddingVertical:scale(10),flexDirection:'row',justifyContent:'space-around'}}>
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
    // borderWidth: 1,
    // borderColor: '#008000',
    paddingTop:scale(5),
    paddingBottom:scale(5),
},
})


const mapStateToProps = state=> ({
    backButton:state.user.backButton,
  })

export default connect(mapStateToProps, actions)(MyRequestScreen);
