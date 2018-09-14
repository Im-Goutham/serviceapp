import { createStackNavigator } from 'react-navigation';

import JobDetailScreen from '../screens/JobDetailScreen';
import FindJobsScreen from '../screens/FindJobsScreen';
import ReviewRating from '../screens/ReviewRating';

export default createStackNavigator({
    findJobs: { screen: FindJobsScreen },
    jobDetail: { screen: JobDetailScreen },
    reviewrating: { screen: ReviewRating }
   },{
     index: 0,
     initialRouteName: 'jobDetail',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
