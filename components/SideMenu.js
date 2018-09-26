import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import { View, StyleSheet,Image, Platform, TouchableOpacity, ScrollView} from 'react-native';
import { List, ListItem, Left, Body, Right, Text , Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


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
      title : "Post Job",
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
      title : "Logout",
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

    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: {isDrawer: true},
      action: NavigationActions.navigate({ routeName: route, params: {isDrawer: true}})
    })
    if(route == 'appTutorial'){
      this.props.navigation.navigate(route,{isDrawer: true});
    }
    else {
      this.props.navigation.dispatch(navigateAction);
      // this.props.navigation.navigate(route,{name:'Goutham1222'});
    }
  }
  listItems(){
    return buttons.data.map((value, index)=>{
      return   <LinearGradient
      colors={[index === this.state.selectedkey ? '#EEF5FF' :'#FFFFFF', '#FFFFFF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{
          flex: 1
      }}>
      <TouchableOpacity style={styles.navItemStyle} key={index} onPress={()=>this.setState({selectedkey : index}, this.navigateToScreen(value.routename))}>
        <View style={{flex:1, alignItems:'center',justifyContent:"center" }}>
          <Image source={value.iconname} style={{marginTop:2,width:20,height:20}} resizeMode="contain" resizeMethod="resize"/>
        </View>
        <View style={{flex:3,alignItems:'flex-start', justifyContent: 'center'}}>
          <Text style={[styles.textStyle,{ color: index === this.state.selectedkey ? "rgb(61, 133, 239)" : "#000" }]} >
            {value.title}
          </Text>
        </View>
      </TouchableOpacity>
      </LinearGradient>
    })
  }
  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
                    <ListItem avatar style={{paddingTop: Platform.OS == 'ios' ? 40: 0,paddingBottom:10}}>
                    <Left>
                        <Image style={{width:70,height:70,borderRadius:25}} source={require('../images/svp1.png')} />
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
      fontFamily:"Montserrat-Bold"
    },
    premiumButton:{
      justifyContent:"center",
      alignItems: 'flex-start',
      borderRadius:20,
      paddingVertical: 2,
      width: '100%',
    },
    premiumtext:{
      color:"#fff",
      fontFamily:"Montserrat-Bold",
      paddingHorizontal:10,
      borderRadius:20,
      paddingVertical: 2,
      backgroundColor:'rgb(61, 133, 239)'
    },
    emailtext:{
      fontFamily:"Montserrat-Light",
      fontSize: 13,
      lineHeight :30
    },
    navItemStyle: {
      // flex:1,
      flexDirection:'row',
      // backgroundColor:"#666",
      height: 54
    },
    navSectionStyle: {
      flex:1,
      // flexDirection:'column',
      // backgroundColor:"#666"
    },
    sectionHeadingStyle: {
      paddingHorizontal: 5,
    },
    textStyle: {
        textAlign: 'left',
        color:'#22262C',
        // fontWeight:'bold',
        fontSize:14,
        fontFamily:"Montserrat-Regular"
    },
    tagStyle:{
      backgroundColor: '#3E85EF',
      borderRadius:10,
      overflow:"hidden",
      paddingVertical:1,
      paddingLeft:10,
      color: 'white',
      fontFamily: 'Montserrat-Bold'
  },
});

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
