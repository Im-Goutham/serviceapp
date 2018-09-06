import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import { View, StyleSheet,Image, Platform, TouchableOpacity, ScrollView} from 'react-native';
import { List, ListItem, Left, Body, Right, Text , Icon} from 'native-base';

let buttons = {
  data :[
    {
      title : "Home",
      iconname : require('../assets/Icons/home.png'),
      routename : "homePage",
    },
    {
      title : "Find Jobs",
      iconname : require('../assets/Icons/search.png'),
      routename : "findJobs"
    },
    {
      title : "Post Job",
      iconname : require('../assets/Icons/post.png'),
      routename : "postJob"
    },
    {
      title : "Find Help",
      iconname : require('../assets/Icons/help.png'),
      routename : "findHelp"
    },
    {
      title : "My Jobs",
      iconname : require('../assets/Icons/list.png'),
      routename : "myJobs"
    },
    {
      title : "Favourites",
      iconname : require('../assets/Icons/heart.png'),
      routename : "favourites"
    },
    {
      title : "Notifications",
      iconname : require('../assets/Icons/bell.png'),
      routename : "notifications"
    },
    {
      title : "Chats",
      iconname : require('../assets/Icons/chat.png'),
      routename : "chats"
    },
    {
      title : "My Requests",
      iconname : require('../assets/Icons/navigation.png'),
      routename : "myRequests"
    },
    {
      title : "Track Now",
      iconname : require('../assets/Icons/location.png'),
      routename : "trackNow"
    },
    {
      title : "My Account",
      iconname : require('../assets/Icons/account.png'),
      routename : "account"
    },
    {
      title : "Subscription",
      iconname : require('../assets/Icons/subscribe.png'),
      routename : "subscription"
    },
    {
      title : "Settings",
      iconname : require('../assets/Icons/settings.png'),
      routename : "settings"
    },
    {
      title : "Logout",
      iconname : undefined,
      routename : "Logout"
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
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  listItems(){
    return buttons.data.map((value, index)=>{
      return <TouchableOpacity style={styles.navItemStyle} key={index} onPress={()=>this.setState({selectedkey : index}, this.navigateToScreen(value.routename))}>
        <View style={{flex:1, alignItems:'center',justifyContent:"center" }}>
          <Image source={value.iconname} style={{marginTop:2}} resizeMode="contain" resizeMethod="resize"/>
        </View>
        <View style={{flex:3,alignItems:'flex-start', justifyContent: 'center'}}>
          <Text style={[styles.textStyle,{ color: index === this.state.selectedkey ? "rgb(61, 133, 239)" : "#000" }]} >
            {value.title}
          </Text>
        </View>
      </TouchableOpacity>
    })
  }
  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
                    <ListItem avatar>
                    <Left>
                        <Image style={{width:40,height:40,borderRadius:20}} source={require('../images/user_placeholder.png')} />
                    </Left>
                    <Body>
                    <Text style={styles.usernamestyle}>John Doe</Text>
                    <Text style={styles.emailtext}>johndoe@gmail.com</Text>
                    <TouchableOpacity style={styles.premiumButton}>
                    <Text style={styles.premiumtext}>Become Premium</Text>
                    </TouchableOpacity>

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
      paddingTop: Platform.OS === 'ios' ? 20 : 0,
      backgroundColor:'rgb(249, 252, 255)'
    },
    usernamestyle:{
      textAlign: 'left',
      color:'#000',
      fontFamily:"Montserrat-Bold"
    },
    premiumButton:{
      justifyContent:"center",
      alignItems: 'center',
      borderRadius:10,
      height: 20,
      width:'100%',
      backgroundColor:'rgb(61, 133, 239)'
    },
    premiumtext:{
      color:"#fff",
      fontFamily:"Montserrat-Bold"
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
        // color:'#000',
        // fontWeight:'bold',
        fontFamily:"Montserrat-Light"
    }
});

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
