import { createStackNavigator } from 'react-navigation';

import AllServiceprovider from '../screens/AllServiceprovider';
import MyJobsScreen from '../screens/MyJobsScreen';
import JobDetailScreen from '../screens/JobDetailScreen';
// import FindJobsScreen from '../screens/FindJobsScreen';
 import ReviewRating from '../screens/ReviewRating';

export default createStackNavigator({
    myJobs: { screen: MyJobsScreen },
    jobDetail: { screen: JobDetailScreen },
    allServiceprovider: { screen: AllServiceprovider },
    reviewrating: { screen: ReviewRating }
   },{
     index: 0,
     initialRouteName: 'myJobs',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
