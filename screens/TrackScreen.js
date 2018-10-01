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
import Map from '../components/Map';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modalbox';
import {NavigationActions} from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from '../actions';

import HeaderScreen from './HeaderScreen';

var {height, width} = Dimensions.get('window');
let tabItems = ["List View", "Map View"];

let logo = require('../images/logo.png');
let back_arrow = require('../assets/icons/back-arrow.png');
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



class TrackScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        tabindex : 0
      }
  }


  navigateToScreen = (route) => () => {
    // const navigateAction = NavigationActions.navigate({
    //   routeName: route
    // });
    // console.log('route is ',route);
    // const navigateAction = NavigationActions.navigate({
    //   routeName: route,
    //   params: {backButton: false},
    //   action: NavigationActions.navigate({ routeName: route, params: {backButton: false}})
    // })
    // // this.props.navigation.navigate(route,{backButton: true});


     // this.props.navigation.dispatch(navigateAction);
     if(route == 'account'){
        this.props.showBackButton(true);
     }
       this.props.navigation.navigate(route);

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
                                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('homePage')}  style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                        <Image source={back_arrow} style={{ width: '50%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableOpacity>
                                    ):(null)
                                }
                                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{width: !backButton ? 54 : "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                <Image source={menu} style={{ width: !backButton? '100%': '50%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                </TouchableOpacity>
                             </View>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:54}}>
                                    <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 20}}>Track Screen</Text>
                               </View>
                               }
                               right={
                                   <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                       <TouchableOpacity style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                           <Icon  name='md-search' style={{color:'#fff',fontSize:25,fontWeight:'bold'}}/>
                                       </TouchableOpacity>
                                       <TouchableOpacity  onPress={this.navigateToScreen('account')} style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
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
                       <Advertisement/>
                           <JobsList  navigation={this.props.navigation}/>
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



const mapStateToProps = state=> ({ 
    backButton:state.user.backButton,
  })
  
 export default connect(mapStateToProps, actions)(TrackScreen);
