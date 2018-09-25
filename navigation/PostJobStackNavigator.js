import { createStackNavigator } from 'react-navigation';

import PostJobScreen from '../screens/PostJobScreen';
import AddServiceCatScreen from '../screens/AddServiceCatScreen';
import AddServiceSubCatScreen from '../screens/AddServiceSubCatScreen';



export default createStackNavigator({
    postJob: { screen: PostJobScreen },
    addServiceCatScreen: { screen: AddServiceCatScreen },
    addServiceSubCatScreen: { screen: AddServiceSubCatScreen }
   },{
     index: 0,
     initialRouteName: 'postJob',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
