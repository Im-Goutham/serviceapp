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
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modalbox';
import {scale} from '../global';

import HeaderScreen from './HeaderScreen';

var {height, width} = Dimensions.get('window');
let tabItems = ["Posted Jobs", "Applied Jobs", "Booked Jobs"];

let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/arrow_left.png');


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



class MyJobScreen extends Component {
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
        <TouchableOpacity key={index} onPress={()=>this.setState({
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

  rendermapdata(){
      return maplocations.data.map((data, index)=>{
          return(
              <View style={{height:scale(300),marginBottom: scale(10), width: "100%", backgroundColor:"#fff", borderRadius:scale(10)}} key={index}>
                  <View style={{ flexDirection:"row", justifyContent:"space-between", height:scale(50), alignItems:"center", paddingHorizontal:scale(20)}} >
                      <View style={{ flexDirection:"row"}} >
                          <Text style={{color:"#000", fontFamily:"Montserrat-regular"}}>{data.jobtitle}</Text>
                          <Image style={{width:scale(20),height:scale(20), paddingHorizontal:scale(15), backgroundColor:"transparent"}} source={data.icon}
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
                  <View style={{ width:"100%", padding:scale(20)}} >
                      <Text style={{fontFamily:"Montserrat",}}>{data.detail}</Text>
                  </View>
                  <View style={{flexDirection:"row", backgroundColor:"#fff"}}>
                      <View style={{ width : "30%",marginHorizontal: scale(5)}} >
                      <Image style={{width:"100%", height:scale(100), borderRadius:scale(10)}} source={data.image}
                             resizeMode="contain" resizeMethod="resize"/>
                      </View>
                      <View style={{ width : "30%",marginHorizontal: scale(5)}} >
                      <Image style={{width:"100%", height:scale(100), borderRadius:scale(10)}} source={data.image}
                             resizeMode="contain" resizeMethod="resize"/>
                      </View>
                      <View style={{ width : "30%",marginHorizontal: scale(5)}} >
                      <Image style={{width:"100%", height:scale(100), borderRadius:scale(10)}} source={data.image}
                             resizeMode="contain" resizeMethod="resize"/>
                      </View>
                  </View>
                  <View style={{flexDirection:'row', backgroundColor:"#fff", paddingHorizontal:scale(20)}}>
                      <View style={{flexDirection:'column', backgroundColor:"transparent", width:"70%"}}>
                          <Text style={{fontSize:scale(12)}}><Icon style={{color:'#007FFA',fontSize:scale(20)}} active name="ios-calendar-outline" /> <Text style={{paddingLeft:scale(5), fontFamily:"Montserrat-Regular",fontSize:scale(15)}}>Before the 19 Sep 2018</Text></Text>
                          <Text style={{fontSize:scale(15)}}><Icon style={{color:'#c33c4c',fontSize:scale(20)}} active name="md-pin" />  <Text style={{paddingLeft:scale(5), fontFamily:"Montserrat-Light"}}>3km </Text></Text>
                      </View>
                      <View style={{flexDirection:'column', backgroundColor:"transparent", width:"30%", flexDirection:"row", justifyContent:"space-between"}}>
                          <Image source={require("../assets/icons/heart.png")}
                                 style={{width:"100%", height:scale(30)}} resizeMode="contain" resizeMethod="resize"/>
                          <Image source={require("../assets/icons/navigation.png")}
                                 style={{width:"100%", height:scale(30)}} resizeMode="contain" resizeMethod="resize"/>

                      </View>

                 </View>
              </View>
          )
      })
  }
    render() {
        const {params} = this.props.navigation.state;
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
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', width:"50%", height:scale(54)}}>
                                  <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(20)}}>My Jobs</Text>
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
                       {
                           this.state.tabindex === 0 ? 
                           <JobsList  navigation={this.props.navigation}/> :
                           (this.state.tabindex === 1) ? ( <JobsList  navigation={this.props.navigation}/>) 
                               :( 
                                <JobsList  navigation={this.props.navigation}/>
                               )
                      }
                         
                       </View>
               </LinearGradient>
               <Modal
                   style={[styles.modal, { height: scale(height/2+50), width: scale(width-30), backgroundColor:"transparent" }]}
                   position={"bottom"}
                   ref={"modal1"}
                   swipeToClose={false}
                   backdropPressToClose={false}>
                   <View style={{ marginBottom: scale(-10), width: scale(40), borderTopLeftRadius:scale(10), borderTopRightRadius:scale(10), paddingBottom:scale(10), alignSelf:"flex-end", height: scale(45), backgroundColor: 'rgba(213,213,213,0.4)', justifyContent:'center', alignItems:'center', right:scale(0)}} >
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
  
export default connect(mapStateToProps, actions)(MyJobScreen);

