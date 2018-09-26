import {createDrawerNavigator,createStackNavigator} from 'react-navigation';
import SideMenu from '../components/SideMenu';
import HomeScreen from '../screens/HomeScreen';
import FindJobsStackNavigator from './FindJobsStackNavigator';
import MyJobsStackNavigator from './MyJobsStackNavigator';

import FindHelpStackNavigator from './FindHelpStackNavigator';

import NotificationsScreen from '../screens/NotificationsScreen';
import ChatStackNavigator from './ChatStackNavigator';
import PostJobStackNavigator from './PostJobStackNavigator';
import MyRequestStackNavigator from './MyRequestStackNavigator';
import TrackStackNavigator from './TrackStackNavigator';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import AcountStackNavigator from './AcountStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';
import FavouriteStackNavigator from './FavouriteStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import NotificationStackNavigator from './NotificationStackNavigator';
import SubscriptionStackNavigator from './SubscriptionStackNavigator';


export default createDrawerNavigator(
    {
        homePage: {
            screen: HomeScreen
        },
        findJobs: {
            screen: FindJobsStackNavigator
        },
        postJob: {
            screen: PostJobStackNavigator
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
            screen: NotificationStackNavigator
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
            screen: SubscriptionStackNavigator
        },
        settings: {
            screen: SettingsStackNavigator
        },
    },
    {
        initialRouteName: 'homePage',
        contentComponent: SideMenu,
        drawerWidth: 300
    });
