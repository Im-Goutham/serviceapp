import { createStackNavigator } from 'react-navigation';

import NotificationsScreen from '../screens/NotificationsScreen';


export default createStackNavigator({
    notifications: { screen: NotificationsScreen },
   },{
     index: 0,
     initialRouteName: 'notifications',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
