import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import { View, StyleSheet,Image, Platform} from 'react-native';
import { List, ListItem, Left, Body, Right, Text , Icon} from 'native-base';

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
            <View style={styles.sectionHeadingStyle}>
              <List style={{paddingTop:20,paddingBottom:20}}>
                    <ListItem avatar>
                    <Left>
                        <Image style={{width:40,height:40,borderRadius:20}} source={require('../images/user_placeholder.png')} />
                    </Left>
                    <Body>
                        <Text style={styles.textStyle}>John Doe</Text>
                    </Body>
                    <Right/>
                    </ListItem>
              </List>      
            </View>
            <View style={styles.navSectionStyle}>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle} onPress={this.navigateToScreen('homePage')}>
                    Home
                  </Text>
                </View>
              </View>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle} onPress={this.navigateToScreen('findJobs')}>
                  Find Jobs
                  </Text>
                </View>
              </View>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle} onPress={this.navigateToScreen('postJob')}>
                  Post Job
                  </Text>
                </View>
              </View>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle} onPress={this.navigateToScreen('findHelp')}>
                  Find Help
                  </Text>
                </View>
              </View>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle} onPress={this.navigateToScreen('myJobs')}>
                  My Jobs
                  </Text>
                </View>
              </View>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle} onPress={this.navigateToScreen('favourites')}>
                  Favourites
                  </Text>
                </View>
              </View>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle} onPress={this.navigateToScreen('notifications')}>
                  Notifications
                  </Text>
                </View>
              </View>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle} onPress={this.navigateToScreen('chats')}>
                  Chats
                  </Text>
                </View>
              </View>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle} onPress={this.navigateToScreen('myRequests')}>
                  My Requests
                  </Text>
                </View>
              </View>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle} onPress={this.navigateToScreen('trackNow')}>
                  Track Now
                  </Text>
                </View>
              </View>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle} onPress={this.navigateToScreen('account')}>
                  My Account
                  </Text>
                </View>
              </View>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle} onPress={this.navigateToScreen('subscription')}>
                  Subscription
                  </Text>
                </View>
              </View>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle} onPress={this.navigateToScreen('settings')}>
                  Settings
                  </Text>
                </View>
              </View>
              <View style={styles.navItemStyle}>
                <View style={{flex:1,alignItems:'center'}}>
                  <Icon style={{color:'white',fontSize:15,marginTop:2}} active name="md-radio-button-off" />
                </View>
                <View style={{flex:3,alignItems:'flex-start'}}>
                  <Text style={styles.textStyle}>
                  Logout
                  </Text>
                </View>
              </View>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: Platform.OS === 'ios' ? 20 : 0,
      backgroundColor:'#4A4A4A'
    },
    navItemStyle: {
      flex:1,
      flexDirection:'row',
    },
    navSectionStyle: {
      flex:1,
      flexDirection:'column'
    },
    sectionHeadingStyle: {
      paddingHorizontal: 5,
    },
    textStyle: {
        textAlign: 'left',
        color:'white',
        fontWeight:'bold'
    }
});

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;