import { createStackNavigator } from 'react-navigation';

import SettingsScreen from '../screens/SettingsScreen';
import ChooseLanguageScreen from '../screens/ChooseLanguageScreen';
import DeleteAccountScreen from '../screens/DeleteAccountScreen';


export default createStackNavigator({
       settings: { screen: SettingsScreen },
       chooseLanguage: { screen: ChooseLanguageScreen },
       deleteAccount: { screen: DeleteAccountScreen },
   },{
     index: 0,
     initialRouteName: 'settings',
     headerMode: 'none',
     navigationOptions: {
       gesturesEnabled: false
   }})
