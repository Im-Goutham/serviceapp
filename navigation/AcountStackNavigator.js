import { createStackNavigator } from 'react-navigation';

import UserProfileScreen from '../screens/AccountScreen';
import RatingScreen from '../screens/RatingScreen';
import AddServiceCatScreen from '../screens/AddServiceCatScreen';
import AddServiceSubCatScreen from '../screens/AddServiceSubCatScreen';

export default createStackNavigator({
       account: { screen: UserProfileScreen },
       addServiceCatScreen: { screen: AddServiceCatScreen },
       addServiceSubCatScreen: { screen: AddServiceSubCatScreen },
       rating: { screen: RatingScreen },
   },{
     index: 0,
     initialRouteName: 'account',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
