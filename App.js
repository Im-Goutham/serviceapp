import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import MainNavigator from './navigation/MainNavigator';
// import { Provider } from 'react-redux';
// import SplashScreen from 'react-native-splash-screen'
import { Root } from "native-base";

//import store from './store';

export default class App extends React.Component {

  componentDidMount() {
      	// do stuff while splash screen is shown
          // After having done stuff (such as async tasks) hide the splash screen
        //  SplashScreen.hide();
  }

  render() {
      return (
         <Root>
        <View style={styles.container}>
          <MainNavigator />
        </View>
         </Root>
      );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});