import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import JobScreen from '../screens/JobScreen';
import HomeScreen from '../screens/HomeScreen';
import ServiceScreen from '../screens/ServiceScreen';
import NotificationScreen from '../screens/NotificationScreen';


import CustomTabBar from '../components/CustomTabBar';



import AccountStackNavigator from './AccountStackNavigator';

export default  TabNavigator({
    home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-home" style={{ color: 'black' }} />
            )
        }
     },
    job: {
       screen: JobScreen,
       navigationOptions: {
           tabBarIcon: ({ tintColor }) => (
               <Icon name="ios-list" style={{ color: 'black'  }} />
           )
       }
     },
    services: {
       screen: ServiceScreen,
        navigationOptions:  {
           tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-add-circle-outline" style={{ color: 'black'  }} />
           )
       }
     },
    notifications: {
        screen: NotificationScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-image" style={{ color: 'black'  }} />
            )
        }
     },
    profile: {
       screen: AccountStackNavigator,
      navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-contact" style={{ color: 'black'  }} />
          )
      }
   }
},{
      tabBarComponent: CustomTabBar,
      animationEnabled: true,
      swipeEnabled: false,
      tabBarPosition: "bottom",
      tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: '#ffffff',
      activeBackgroundColor: '#f2f2f3',
      indicatorStyle: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
      },
      showLabel: true,
      showIcon: true,
      labelStyle: {
        fontSize: 10,
        color:'black'
      },
      style: {
        backgroundColor: '#fff'
      }
  }

});




// ,
// tabBarOnPress: (scene, jumpToIndex) => {
//      alert('onPress:', scene.route);
//    actions.signIn({username:'test',password:'password'})
//    //  jumpToIndex(scene.index);
//  },