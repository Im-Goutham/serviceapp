import { createStackNavigator } from 'react-navigation';

import FindHelpScreen from '../screens/FindHelpScreen';
import ServiceProviderDetailScreen from '../screens/ServiceProviderDetailScreen';
import ReviewRating from '../screens/ReviewRating';

export default createStackNavigator({
    findHelp: { screen: FindHelpScreen },
    jobDetail: { screen: ServiceProviderDetailScreen },
    reviewrating: { screen: ReviewRating }
   },{
     index: 0,
     initialRouteName: 'findHelp',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
