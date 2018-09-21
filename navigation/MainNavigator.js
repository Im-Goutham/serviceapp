import {  createStackNavigator } from 'react-navigation';


import AppTutorialScreen from '../screens/AppTutorialScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotScreen from '../screens/ForgotScreen';
import AppDrawerNavigator from './AppDrawerNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';


export default createStackNavigator(
  {
    appTutorial: {
      screen: AppTutorialScreen,
    },
    login: {
      screen: LoginScreen,
    },
    register: {
      screen: RegisterScreen,
    },
    forgot: {
      screen: ForgotScreen,
    },
    profile: {
      screen: ProfileStackNavigator,
    },
    home : {
      screen: AppDrawerNavigator
     },
      },{
        index: 0,
        initialRouteName: 'home',
        headerMode: 'none',
        navigationOptions: {
        gesturesEnabled: false
    }}
);
