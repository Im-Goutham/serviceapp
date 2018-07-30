import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import AccountScreen from '../screens/AccountScreen';
import SettingsScreen from '../screens/SettingsScreen';


export default StackNavigator({
       account: { screen: AccountScreen },
       settings: { screen: SettingsScreen }
   },{
     index: 0,
     initialRouteName: 'account',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})