import { createStackNavigator } from 'react-navigation';


import HomeScreen from '../screens/HomeScreen';
import FindJobsStackNavigator from './FindJobsStackNavigator';
import MyJobsStackNavigator from './MyJobsStackNavigator';
import PostJobScreen from '../screens/PostJobScreen';
import FindHelpStackNavigator from './FindHelpStackNavigator';
import FavouriteStackNavigator from './FavouriteStackNavigator';
import NotificationsScreen from '../screens/NotificationsScreen';
import ChatStackNavigator from './ChatStackNavigator';
import MyRequestStackNavigator from './MyRequestStackNavigator';
import TrackStackNavigator from './TrackStackNavigator';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import AcountStackNavigator from './AcountStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';


export default createStackNavigator({
    homePage: {
         screen: HomeScreen
     },
    findJobs: {
        screen: FindJobsStackNavigator
    },
    postJob: {
        screen: PostJobScreen
    },
    findHelp: {
        screen: FindHelpStackNavigator
    },
    myJobs: {
        screen: MyJobsStackNavigator
    },
    favourites: {
        screen: FavouriteStackNavigator
    },
    notifications: {
        screen: NotificationsScreen
    },
    chats: {
        screen: ChatStackNavigator
    },
    myRequests: {
        screen: MyRequestStackNavigator
    },
    trackNow: {
        screen: TrackStackNavigator
    },
    account: {
        screen: AcountStackNavigator
    },
    subscription: {
        screen: SubscriptionScreen
    },
    settings: {
        screen: SettingsStackNavigator
    },
   },{
     index: 0,
     initialRouteName: 'homePage',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
