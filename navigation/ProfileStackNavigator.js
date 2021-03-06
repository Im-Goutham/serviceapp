import { createStackNavigator } from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen';
import AddServiceCatScreen from '../screens/AddServiceCatScreen';
import AddServiceSubCatScreen from '../screens/AddServiceSubCatScreen';


export default createStackNavigator({
       profile: { screen: ProfileScreen },
       addServiceCatScreen: { screen: AddServiceCatScreen },
       addServiceSubCatScreen: { screen: AddServiceSubCatScreen }
   },{
     index: 0,
     initialRouteName: 'profile',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
