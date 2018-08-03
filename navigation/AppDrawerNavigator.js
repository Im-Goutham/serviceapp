import React from 'react';
import { TabNavigator, StackNavigator , DrawerNavigator} from 'react-navigation';
import { Icon } from 'native-base';

import SideMenu from '../components/SideMenu';

import MyBookingScreen from '../screens/MyBookingScreen';
import BookingRequestScreen from '../screens/BookingRequestScreen';
import PostedJobScreen from '../screens/PostedJobScreen';
import FindJobScreen from '../screens/FindJobScreen';
import SupplyServiceScreen from '../screens/SupplyServiceScreen';
import MyFavouriteScreen from '../screens/MyFavouriteScreen';
import ChatScreen from '../screens/ChatScreen';
import SupportScreen from '../screens/SupportScreen';
import FindHelpScreen from '../screens/FindHelpScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import SettingScreen from '../screens/SettingScreen';


import AppTabNavigator from './AppTabNavigator';

//import AccountStackNavigator from './AccountStackNavigator';

export default DrawerNavigator({
    homePage: {
        screen: AppTabNavigator
     },
    myBookings: {
       screen: MyBookingScreen
     },
    bookingRequests: {
        screen: BookingRequestScreen
      },
    postedjobs: {
       screen: PostedJobScreen
     },
    findJob: {
       screen: FindJobScreen
     },
    supplyService: {
       screen: SupplyServiceScreen
    },
    myFavourites: {
        screen: MyFavouriteScreen
     },
    chat: {
        screen: ChatScreen
     },
    support: {
        screen: SupportScreen
     },
     findHelp: {
        screen: FindHelpScreen
     },
     myAccount: {
        screen: MyAccountScreen
     },
     settings: {
        screen: SettingScreen
     }
},{
    contentComponent: SideMenu,
    drawerWidth: 300
});