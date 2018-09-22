import { createStackNavigator } from 'react-navigation';

import AllServiceProvider from '../screens/AllServiceProvider';
import MyRequestsScreen from '../screens/MyRequestsScreen';
import MyJobDetailScreen from '../screens/MyJobDetailScreen';
import GiveRating from '../screens/GiveRating';
import RatingScreen from '../screens/RatingScreen';
import MessageScreen from '../screens/MessageScreen';
import JobTrackScreen from '../screens/JobTrackScreen';

export default createStackNavigator({
    myRequests: { screen: MyRequestsScreen },
    jobDetail: { screen: MyJobDetailScreen },
    allServiceProvider: { screen: AllServiceProvider },
    rating: { screen: RatingScreen },
    giveRating: { screen: GiveRating },
    message: { screen: MessageScreen },
    jobTrack: { screen: JobTrackScreen }
   },{
     index: 0,
     initialRouteName: 'myRequests',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
