import { createStackNavigator } from 'react-navigation';

import JobDetailScreen from '../screens/JobDetailScreen';
import FindJobsScreen from '../screens/FindJobsScreen';

export default createStackNavigator({
    findJobs: { screen: FindJobsScreen },
    jobDetail: { screen: JobDetailScreen }
   },{
     index: 0,
     initialRouteName: 'findJobs',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
