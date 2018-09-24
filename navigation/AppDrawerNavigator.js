import {createDrawerNavigator,createStackNavigator} from 'react-navigation';
import SideMenu from '../components/SideMenu';
import HomeScreen from '../screens/HomeScreen';
import FindJobsStackNavigator from './FindJobsStackNavigator';
import MyJobsStackNavigator from './MyJobsStackNavigator';
import PostJobScreen from '../screens/PostJobScreen';
import FindHelpStackNavigator from './FindHelpStackNavigator';

import NotificationsScreen from '../screens/NotificationsScreen';
import ChatStackNavigator from './ChatStackNavigator';
import MyRequestStackNavigator from './MyRequestStackNavigator';
import TrackStackNavigator from './TrackStackNavigator';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import AcountStackNavigator from './AcountStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';
import FavouriteStackNavigator from './FavouriteStackNavigator';

export default createDrawerNavigator(
    {
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
    },
    {
        initialRouteName: 'homePage',
        contentComponent: SideMenu,
        drawerWidth: 300
    });
