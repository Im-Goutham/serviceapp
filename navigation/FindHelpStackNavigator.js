import { createStackNavigator } from 'react-navigation';

import FindHelpScreen from '../screens/FindHelpScreen';
import ServiceProviderDetailScreen from '../screens/ServiceProviderDetailScreen';
import AllServiceProvider from '../screens/AllServiceProvider';
import GiveRating from '../screens/GiveRating';
import RatingScreen from '../screens/RatingScreen';
import MessageScreen from '../screens/MessageScreen';
import FilterScreen from '../screens/FilterScreen';
import SearchScreen from '../screens/SearchScreen';
import SelectScreen from '../screens/SelectScreen';



export default createStackNavigator({
    findHelp: { screen: FindHelpScreen },
    jobDetail: { screen: ServiceProviderDetailScreen },
    allServiceProvider: { screen: AllServiceProvider },
    rating: { screen: RatingScreen },
    giveRating: { screen: GiveRating },
    message: { screen: MessageScreen },
    filter:  { screen: FilterScreen },
    search:  { screen: SearchScreen },
    select: { screen: SelectScreen }
   },{
     index: 0,
     initialRouteName: 'findHelp',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
