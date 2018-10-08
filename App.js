import React from 'react';
import {  StatusBar, StyleSheet, View ,Platform, PixelRatio} from 'react-native';
import MainNavigator from './navigation/MainNavigator';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import { Root } from "native-base";
import store from './store';

import { pushNotifications, amplify } from './services';

pushNotifications.configure();
amplify.configure();

export default class App extends React.Component {

  componentDidMount() {
      	// do stuff while splash screen is shown
          // After having done stuff (such as async tasks) hide the splash screen
         SplashScreen.hide();
         console.log('pixel ratio is ', PixelRatio.get());
         console.log('pixel font is ', PixelRatio.getFontScale());
         console.log('pixel layout is ', PixelRatio.getPixelSizeForLayoutSize());
         
  }

  render() {
      return (
        <Provider store={store}>
         <Root>
        <View style={styles.container}>
        <StatusBar
            backgroundColor={Platform.OS=='ios' ? 'transparent' : 'rgb(62, 133, 239)'}
            barStyle="light-content" 
        />
          <MainNavigator />
        </View>
         </Root>
        </Provider>
      );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
