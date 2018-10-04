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
import AllServiceList from '../components/AllServiceList';
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
      jobtitle: 'Need Cook',
      icon: require('../assets/icons/crown.png'),
      image: require('../images/tutorial.png'),
      detail: "Lorem Ipsum has been the industrys standard dummy text ever",
    }
        ]
}



export default class AllServiceProvider extends Component {
  constructor(props){
      super(props);
      this.state={
        tabindex : 0
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
    )
    })
  }

  rendermapdata(){
      return maplocations.data.map((data, index)=>{
          return(
              <View style={{marginBottom: 10, width: "100%", backgroundColor:"#fff", borderRadius:10}} key={index}>
                    <View style={{backgroundColor:"transparent"}}>
                        <View style={{flex:1,flexDirection:'row', paddingHorizontal:20,paddingVertical:10 }}>
                            <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                                <View style={styles.imageShadow}>
                                    <Image source={require('../images/svp1.png')} style={[styles.img_placeholder,{borderRadius:35,width:70,height:70}]}/>
                                    <Image source={require('../images/check.png')} style={styles.check}/>
                                </View>
                            </View>
                            <View style={{flex:7,paddingHorizontal:20,paddingVertical:10,justifyContent:'space-between'}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:17,color:'rgb(85,85,85)'}}>Clayton L.</Text>
                                     <View style={{flexDirection:'row',paddingVertical:5}}>
                                       <Image source={require('../assets/icons/star_gold.png')} style={{widh:15,height:15}} resizeMode="contain" resizeMethod="resize" />
                                       <Text style={{fontFamily: 'Montserrat-Bold'}}>5</Text>
                                     </View>
                                    <Text style={{fontSize:14,color:'rgb(155,155,155)'}}>Plumber & 5 More</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                            <TouchableOpacity style={{ width : "30%", backgroundColor:"#CCCCCC", height : 40, borderBottomLeftRadius:10,justifyContent:"center", alignItems:"center"}}>
                                <LinearGradient
                                        colors={['#F2F2F2', '#CCCCCC']}
                                        start={{x: 0, y: 0}}
                                        end={{x: 1, y: 0}}
                                        style={{height : 40, backgroundColor:"transparent", width : "100%", borderBottomLeftRadius:10,  justifyContent:"center", alignItems:"center"}}>
                                        <Text style={{color:"black", fontFamily:"Montserrat-Regular", fontSize:15}}>REJECT</Text>
                                    </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width : "70%"}}>
                                <LinearGradient
                                    colors={['#3E85EF', '#3EBDEF']}
                                    start={{x: 0, y: 0}}
                                    end={{x: 1, y: 0}}
                                    style={{height : 40, backgroundColor:"transparent", width : "100%", borderBottomRightRadius:10,  justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{color:"#fff", fontFamily:"Montserrat-Bold", fontSize:15}}>ACCEPT</Text>
                                </LinearGradient>
                            </TouchableOpacity>
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
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 20}}>Total Service Providers (18)</Text>
                               </View>
                               }
                               right={
                                  null
                               }
                           />
                       }
                       content={
                        <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingVertical: 10}}>
                            <View style={{ paddingTop:30,flexDirection:'row', paddingHorizontal: width/6}}>
                                {this.tabrender()}
                            </View>
                         </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                       <Advertisement/>
                         {this.state.tabindex === 0 ?<AllServiceList navigation={this.props.navigation}/>:<Map pinPress={() => this.refs.modal1.open()}/>}
                       </View>
                       <Modal
                   style={[styles.modal, { height: height/2+50, width: width-30, backgroundColor:"transparent" }]}
                   position={"bottom"}
                   ref={"modal1"}
                   swipeToClose={false}
                   backdropPressToClose={false}>
                   <View style={{ marginBottom: -10, width: 40, borderTopLeftRadius:10, borderTopRightRadius:10, paddingBottom:10, alignSelf:"flex-end", height: 45, backgroundColor: 'rgba(213,213,213,0.4)', justifyContent:'center', alignItems:'center', right:0}} >
                       <Icon name="close" style={{}} onPress={() => this.refs.modal1.close()}/>
                   </View>
                   <ScrollView >
                       {this.rendermapdata()}
                       </ScrollView>
               </Modal>
               </LinearGradient>

           </View>
       )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  img_placeholder: {
    width: 80,
    height: 80,
    borderRadius:5,
    position: 'relative',
    top: 0,
    left: 0
},
check: {
    width: 18,
    height: 18,
    borderRadius:9,
    position: 'absolute',
    bottom: 0,
    left: 0
},
imageShadow: {
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
},
})
