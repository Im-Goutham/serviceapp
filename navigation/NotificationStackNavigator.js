import { createStackNavigator } from 'react-navigation';

import NotificationsScreen from '../screens/NotificationsScreen';
import MessageScreen from '../screens/MessageScreen';


export default createStackNavigator({
    notifications: { screen: NotificationsScreen },
    message: { screen: MessageScreen }
   },{
     index: 0,
     initialRouteName: 'notifications',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
