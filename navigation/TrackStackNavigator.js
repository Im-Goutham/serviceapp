import { StackNavigator } from 'react-navigation';

import TrackScreen from '../screens/TrackScreen';
import JobTrackScreen from '../screens/JobTrackScreen';



export default StackNavigator({
       trackNow: { screen: TrackScreen },
       jobTrack: { screen: JobTrackScreen }
   },{
     index: 0,
     initialRouteName: 'trackNow',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})