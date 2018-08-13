import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View>
            <Text style={styles.sectionHeadingStyle}>
              Section
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('homePage')}>
                Home
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('findJobs')}>
                Find Jobs
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('postJob')}>
                Post Job
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('findHelp')}>
                Find Help
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('myJobs')}>
                My Jobs
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('favourites')}>
                Favourites
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('notifications')}>
                Notifications
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('chats')}>
                Chats
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('myRequests')}>
                My Requests
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('trackNow')}>
                Track Now
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('account')}>
                My Account
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('subscription')}>
                 Subscription
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('settings')}>
                 Settings
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>Log out</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 1
    },
    navItemStyle: {
      padding: 10
    },
    navSectionStyle: {
      backgroundColor: 'lightgrey'
    },
    sectionHeadingStyle: {
      paddingVertical: 10,
      paddingHorizontal: 5
    },
    footerContainer: {
      padding: 20,
      backgroundColor: 'lightgrey'
    }
});

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;