import { createStackNavigator } from 'react-navigation';

import SubscriptionScreen from '../screens/SubscriptionScreen';


export default createStackNavigator({
    subscription: { screen: SubscriptionScreen },
   },{
     index: 0,
     initialRouteName: 'subscription',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
