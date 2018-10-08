import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import { connect } from 'react-redux';
import { View, StyleSheet,Image, Platform, TouchableOpacity, ScrollView} from 'react-native';
import { List, ListItem, Left, Body, Right, Text , Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import * as actions from '../actions';
import {scale} from '../global';

let buttons = {
  data :[
    {
      title : "Home",
      iconname : require('../assets/icons/home.png'),
      routename : "homePage",
    },
    {
      title : "Find Jobs",
      iconname : require('../assets/icons/search.png'),
      routename : "findJobs"
    },
    {
      title : "Post a Job",
      iconname : require('../assets/icons/post.png'),
      routename : "postJob"
    },
    {
      title : "Find Help",
      iconname : require('../assets/icons/help.png'),
      routename : "findHelp"
    },
    {
      title : "My Jobs",
      iconname : require('../assets/icons/list.png'),
      routename : "myJobs"
    },
    {
      title : "Favourites",
      iconname : require('../assets/icons/heart.png'),
      routename : "favourites"
    },
    {
      title : "Notifications",
      iconname : require('../assets/icons/bell.png'),
      routename : "notifications"
    },
    {
      title : "Chats",
      iconname : require('../assets/icons/chat.png'),
      routename : "chats"
    },
    {
      title : "My Requests",
      iconname : require('../assets/icons/navigation.png'),
      routename : "myRequests"
    },
    {
      title : "Track Now",
      iconname : require('../assets/icons/location.png'),
      routename : "trackNow"
    },
    {
      title : "My Account",
      iconname : require('../assets/icons/account.png'),
      routename : "account"
    },
    {
      title : "Subscription",
      iconname : require('../assets/icons/subscribe.png'),
      routename : "subscription"
    },
    {
      title : "Settings",
      iconname : require('../assets/icons/settings.png'),
      routename : "settings"
    },
    {
      title : "Log Out",
      iconname : undefined,
      routename : "appTutorial"
    },

]}
class SideMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedkey: 0
    }
  }
  navigateToScreen = (route) => () => {
    // const navigateAction = NavigationActions.navigate({
    //   routeName: route
    // });
    this.props.showBackButton(false);
    this.props.navigation.navigate(route);
    // const navigateAction = NavigationActions.navigate({
    //   routeName: route,
    //   params: {backButton: true},
    //   action: NavigationActions.navigate({ routeName: route, params: {backButton: true}})
    // })
    // if(route == 'appTutorial'){
    //   this.props.navigation.navigate(route,{backButton: true});
    // }
    // else {
    //   this.props.navigation.dispatch(navigateAction);
    //   // this.props.navigation.navigate(route,{name:'Goutham1222'});
    // }
  }
  listItems(){
    return buttons.data.map((value, index)=>{
      return   <LinearGradient
      colors={[index === this.state.selectedkey ? '#EEF5FF' :'#FFFFFF', '#FFFFFF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{
          flex: 1
      }}
      key={index}
      >
      <TouchableOpacity style={styles.navItemStyle}  onPress={()=>this.setState({selectedkey : index}, this.navigateToScreen(value.routename))}>
       {
         (value.iconname)?(
            <View style={{flex:1, alignItems:'center',justifyContent:"center" }}>
            <Image source={value.iconname} style={{marginTop:scale(2),width:scale(20),height:scale(20)}} resizeMode="contain" resizeMethod="resize"/>
          </View>
         ):(
           null
         )
       }
      
        <View style={{flex:3,alignItems:'flex-start', justifyContent: 'center'}}>
          <Text style={[value.title=='Log Out' ? styles.logoutStyle : styles.textStyle,{ color: index === this.state.selectedkey ? "rgb(61, 133, 239)" : value.title=='Log Out' ? "rgb(189,190,192)" :  "#000" }]} >
            {value.title}
          </Text>
        </View>
      </TouchableOpacity>
      </LinearGradient>
    })
  }
  render () {
    return (
      <ScrollView contentContainerStyle={[styles.container,{paddingBottom: Platform.OS == 'ios' ?  scale(20): 0}]}>
                    <ListItem avatar style={{paddingTop: Platform.OS == 'ios' ? scale(40): 0,paddingBottom:scale(10)}}>
                    <Left>
                        <Image style={{width:scale(70),height:scale(70),borderRadius:scale(25)}} source={require('../images/svp1.png')} />
                    </Left>
                    <Body style={{borderBottomColor:'white'}}>
                    <Text style={styles.usernamestyle}>John Doe</Text>
                    <Text style={styles.emailtext}>johndoe@gmail.com</Text>
                   
                    <Text style={styles.tagStyle}>Become Premium</Text>
             

                    </Body>
                    <Right/>
                    </ListItem>
            {this.listItems()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      // flex:1,
      // paddingTop: Platform.OS === 'ios' ? 35 : 0,
      backgroundColor:'rgb(249, 252, 255)'
    },
    usernamestyle:{
      textAlign: 'left',
      color:'#000',
      fontSize: scale(17),
      fontFamily:"Montserrat-SemiBold"
    },
    premiumButton:{
      justifyContent:"center",
      alignItems: 'flex-start',
      borderRadius:scale(20),
      paddingVertical: scale(2),
      width: '100%',
    },
    premiumtext:{
      color:"#fff",
      fontFamily:"Montserrat-Bold",
      paddingHorizontal:scale(10),
      borderRadius:scale(20),
      paddingVertical: scale(2),
      backgroundColor:'rgb(61, 133, 239)'
    },
    emailtext:{
      fontFamily:"Montserrat-Medium",
      color:'#9B9B9B',
      fontSize: scale(13),
      lineHeight :scale(30)
    },
    navItemStyle: {
      // flex:1,
      flexDirection:'row',
      // backgroundColor:"#666",
      height: scale(54)
    },
    navSectionStyle: {
      flex:1,
      // flexDirection:'column',
      // backgroundColor:"#666"
    },
    sectionHeadingStyle: {
      paddingHorizontal: scale(5),
    },
    textStyle: {
        textAlign: 'left',
        color:'#22262C',
        fontSize:scale(14),
        fontFamily:"Montserrat-Regular"
    },
    logoutStyle: {
      textAlign: 'left',
      fontSize:scale(14),
      fontFamily:"Montserrat-Medium",
      color:'rgb(189,190,192)',
      paddingLeft:scale(30)
    },
  tagStyle:{
    backgroundColor: '#3E85EF',
    borderRadius:scale(10),
    overflow:"hidden",
    paddingVertical:scale(2),
    marginBottom:scale(10),
    fontSize:scale(15),
    color: 'white',
    textAlign:'center',
    fontFamily: 'Montserrat-Bold'
},
});

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default connect(null, actions)(SideMenu);
