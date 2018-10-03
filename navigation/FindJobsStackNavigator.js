import { createStackNavigator } from 'react-navigation';

import JobDetailScreen from '../screens/JobDetailScreen';
import FindJobsScreen from '../screens/FindJobsScreen';
import GiveRating from '../screens/GiveRating';
import RatingScreen from '../screens/RatingScreen';
import AllServiceProvider from '../screens/AllServiceProvider';
import MessageScreen from '../screens/MessageScreen';
import FilterScreen from '../screens/FilterScreen';
import SearchScreen from '../screens/SearchScreen';


export default createStackNavigator({
    findJobs: { screen: FindJobsScreen },
    jobDetail: { screen: JobDetailScreen },
    allServiceProvider: { screen: AllServiceProvider },
    rating: { screen: RatingScreen },
    giveRating: { screen: GiveRating },
    message: { screen: MessageScreen },
    filter:  { screen: FilterScreen },
    search:  { screen: SearchScreen },
   },{
     index: 0,
     initialRouteName: 'findJobs',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
