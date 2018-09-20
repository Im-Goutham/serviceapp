import {createDrawerNavigator,createStackNavigator} from 'react-navigation';
import SideMenu from '../components/SideMenu';
import HomeScreen from '../screens/HomeScreen';
import FindJobsStackNavigator from './FindJobsStackNavigator';
import MyJobsStackNavigator from './MyJobsStackNavigator';
import PostJobScreen from '../screens/PostJobScreen';
import FindHelpScreen from '../screens/FindHelpScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ChatStackNavigator from './ChatStackNavigator';
import MyRequestsScreen from '../screens/MyRequestsScreen';
import TrackStackNavigator from './TrackStackNavigator';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import AcountStackNavigator from './AcountStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';

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
            screen: FindHelpScreen
        },
        myJobs: {
            screen: MyJobsStackNavigator
        },
        favourites: {
            screen: FavouriteScreen
        },
        notifications: {
            screen: NotificationsScreen
        },
        chats: {
            screen: ChatStackNavigator
        },
        myRequests: {
            screen: MyRequestsScreen
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
        initialRouteName: 'myJobs',
        contentComponent: SideMenu,
        drawerWidth: 300
    });
