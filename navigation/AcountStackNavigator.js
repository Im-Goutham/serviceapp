import { createStackNavigator } from 'react-navigation';

import UserProfileScreen from '../screens/AccountScreen';
import RatingScreen from '../screens/RatingScreen';


export default createStackNavigator({
       account: { screen: UserProfileScreen },
       rating: { screen: RatingScreen },
   },{
     index: 0,
     initialRouteName: 'account',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
