import {  createStackNavigator } from 'react-navigation';


import AppTutorialScreen from '../screens/AppTutorialScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotScreen from '../screens/ForgotScreen';
import AppDrawerNavigator from './AppDrawerNavigator';
import RegisterStackNavigator from './RegisterStackNavigator';
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
      screen: RegisterStackNavigator,
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
        initialRouteName: 'profile',
        headerMode: 'none',
        navigationOptions: {
        gesturesEnabled: false
    }}
);
