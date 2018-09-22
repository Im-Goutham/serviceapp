import { createStackNavigator } from 'react-navigation';


import FavouriteScreen from '../screens/FavouriteScreen';
import JobDetailScreen from '../screens/JobDetailScreen';
import GiveRating from '../screens/GiveRating';
import RatingScreen from '../screens/RatingScreen';
import AllServiceProvider from '../screens/AllServiceProvider';
import MessageScreen from '../screens/MessageScreen';

export default createStackNavigator({
    favourites: { screen: FavouriteScreen },
    jobDetail: { screen: JobDetailScreen },
    allServiceProvider: { screen: AllServiceProvider },
    rating: { screen: RatingScreen },
    giveRating: { screen: GiveRating },
    message: { screen: MessageScreen }
   },{
     index: 0,
     initialRouteName: 'favourites',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
