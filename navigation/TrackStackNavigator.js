import { createStackNavigator } from 'react-navigation';

import TrackScreen from '../screens/TrackScreen';
import JobDetailScreen from '../screens/JobDetailScreen';
import JobTrackScreen from '../screens/JobTrackScreen';



export default createStackNavigator({
       trackNow: { screen: TrackScreen },
       jobDetail: { screen: JobDetailScreen },
       jobTrack: { screen: JobTrackScreen }
   },{
     index: 0,
     initialRouteName: 'trackNow',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
