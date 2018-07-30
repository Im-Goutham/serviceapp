import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import AccountScreen from '../screens/AccountScreen';
import SettingScreen from '../screens/SettingScreen';


export default StackNavigator({
       account: { screen: AccountScreen },
       settings: { screen: SettingScreen }
   },{
     index: 0,
     initialRouteName: 'account',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})