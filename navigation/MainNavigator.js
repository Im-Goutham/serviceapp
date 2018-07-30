import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'native-base';

// import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/LoginScreen';
import ChatScreen from '../screens/ChatScreen';
import AppDrawerNavigator from './AppDrawerNavigator';


export default StackNavigator(
  {
    login: {
      screen: LoginScreen,
    },
    home : {
      screen: AppDrawerNavigator
    },
    chatScreen:  {
      screen: ChatScreen
    }
      },{
        index: 0,
        initialRouteName: 'login',
        headerMode: 'none',
        navigationOptions: {
        gesturesEnabled: false
    }}
);