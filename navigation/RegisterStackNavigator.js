import { createStackNavigator } from 'react-navigation';

import RegisterScreen from '../screens/RegisterScreen';
import TermsScreen from '../screens/TermsScreen';


export default createStackNavigator({
       register: { screen: RegisterScreen },
       terms: { screen: TermsScreen },
   },{
    index: 0,
    mode: 'modal',
    initialRouteName: 'register',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
  }})
