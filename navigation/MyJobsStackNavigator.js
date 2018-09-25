import { createStackNavigator } from 'react-navigation';

import AllServiceProvider from '../screens/AllServiceProvider';
import MyJobsScreen from '../screens/MyJobsScreen';
import MyJobDetailScreen from '../screens/MyJobDetailScreen';
import GiveRating from '../screens/GiveRating';
import RatingScreen from '../screens/RatingScreen';
import MessageScreen from '../screens/MessageScreen';
import JobTrackScreen from '../screens/JobTrackScreen';
import FilterScreen from '../screens/FilterScreen';

export default createStackNavigator({
    myJobs: { screen: MyJobsScreen },
    jobDetail: { screen: MyJobDetailScreen },
    allServiceProvider: { screen: AllServiceProvider },
    rating: { screen: RatingScreen },
    giveRating: { screen: GiveRating },
    message: { screen: MessageScreen },
    jobTrack: { screen: JobTrackScreen },
    filter:  { screen: FilterScreen }
   },{
     index: 0,
     initialRouteName: 'myJobs',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
