import {createDrawerNavigator,createStackNavigator} from 'react-navigation';


import SideMenu from '../components/SideMenu';
import HomeScreen from '../screens/HomeScreen';
import FindJobsStackNavigator from './FindJobsStackNavigator';
import PostJobScreen from '../screens/PostJobScreen';
import FindHelpScreen from '../screens/FindHelpScreen';
import MyJobsScreen from '../screens/MyJobsScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ChatsScreen from '../screens/ChatsScreen';
import MyRequestsScreen from '../screens/MyRequestsScreen';
import TrackStackNavigator from './TrackStackNavigator';
import AccountScreen from '../screens/AccountScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import SettingsScreen from '../screens/SettingsScreen';




export default createDrawerNavigator({
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
       screen: FindHelpScreen
    },
    myJobs: {
       screen: MyJobsScreen
     },
    favourites: {
        screen: FavouriteScreen
     },
     notifications: {
        screen: NotificationsScreen
     },
     chats: {
        screen: ChatsScreen
     },
    myRequests: {
        screen: MyRequestsScreen
      },
    trackNow: {
        screen: TrackStackNavigator
    },
     account: {
        screen: AccountScreen
     },
     subscription: {
        screen: SubscriptionScreen
     },
     settings: {
        screen: SettingsScreen
     }
},{
  initialRouteName: 'homePage',
    contentComponent: SideMenu,
    drawerWidth: 300
});
