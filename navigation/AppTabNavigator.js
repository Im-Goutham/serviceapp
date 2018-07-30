import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import FavoriteScreen from '../screens/FavoriteScreen';
import HomeScreen from '../screens/HomeScreen';
import MediaScreen from '../screens/MediaScreen';
import CreateScreen from '../screens/CreateScreen';


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
    favorite: {
       screen: FavoriteScreen,
       navigationOptions: {
           tabBarIcon: ({ tintColor }) => (
               <Icon name="ios-list" style={{ color: 'black'  }} />
           )
       }
     },
    create: {
       screen: CreateScreen,
        navigationOptions:  {
           tabBarIcon: ({ tintColor }) => (
              <Icon name="ios-add-circle-outline" style={{ color: 'black'  }} />
           )
       }
     },
    media: { screen: MediaScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-image" style={{ color: 'black'  }} />
            )
        }
     },
    account: {
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