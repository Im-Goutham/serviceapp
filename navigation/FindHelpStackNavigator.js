import { createStackNavigator } from 'react-navigation';

import FindHelpScreen from '../screens/FindHelpScreen';
import ServiceProviderDetailScreen from '../screens/ServiceProviderDetailScreen';
import AllServiceProvider from '../screens/AllServiceProvider';
import GiveRating from '../screens/GiveRating';
import RatingScreen from '../screens/RatingScreen';
import MessageScreen from '../screens/MessageScreen';

export default createStackNavigator({
    findHelp: { screen: FindHelpScreen },
    jobDetail: { screen: ServiceProviderDetailScreen },
    allServiceProvider: { screen: AllServiceProvider },
    rating: { screen: RatingScreen },
    giveRating: { screen: GiveRating },
    message: { screen: MessageScreen }
   },{
     index: 0,
     initialRouteName: 'findHelp',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
