import React from 'react';
import { TabNavigator, StackNavigator , DrawerNavigator} from 'react-navigation';
import { Icon } from 'native-base';

import SideMenu from '../components/SideMenu';

import HomeScreen from '../screens/HomeScreen';

import AppTabNavigator from './AppTabNavigator';

//import AccountStackNavigator from './AccountStackNavigator';

export default DrawerNavigator({
    homePage: {
        screen: AppTabNavigator
     },
    bookings: {
       screen: HomeScreen
     },
    profile: {
       screen: HomeScreen
     },
    contact: {
       screen: HomeScreen
     },
    privacy: {
       screen: HomeScreen
   }
},{
    contentComponent: SideMenu,
    drawerWidth: 300
});