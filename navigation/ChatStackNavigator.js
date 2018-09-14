import { createStackNavigator } from 'react-navigation';

import ChatsScreen from '../screens/ChatsScreen';
import MessageScreen from '../screens/MessageScreen';


export default createStackNavigator({
    chats: { screen: ChatsScreen },
    message: { screen: MessageScreen }
   },{
     index: 0,
     initialRouteName: 'message',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
