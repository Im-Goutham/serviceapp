import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import SelectLocationScreen from '../screens/SelectLocationScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SelectServiceProviderScreen from '../screens/SelectServiceProviderScreen';
import AppDrawerNavigator from './AppDrawerNavigator';


export default StackNavigator(
  {
    selectLocation: {
      screen: SelectLocationScreen,
    },
    login: {
      screen: LoginScreen,
    },
    register: {
      screen: RegisterScreen,
    },
    selectServiceProvider: {
      screen: SelectServiceProviderScreen,
    },
    home : {
      screen: AppDrawerNavigator
     },
      },{
        index: 0,
        initialRouteName: 'selectLocation',
        headerMode: 'none',
        navigationOptions: {
        gesturesEnabled: false
    }}
);