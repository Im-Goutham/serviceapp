import React, { Component } from 'react';
import { View, Text,TouchableOpacity, Platform} from 'react-native';
// import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { Icon } from 'native-base'

import LinearGradient from 'react-native-linear-gradient';

import { DrawerActions } from 'react-navigation';

class Header extends Component {
  render() {
    let {title, left, right} = this.props;
    return (
      <View
        style={{
          // flex: 1,
          height: Platform.OS === 'ios'? 84: 54,
          flexDirection: 'row',
          backgroundColor:'transparent',
          alignItems:'flex-end'
          // borderRadius: 5
        }}>
        <View style={{width: "20%", backgroundColor: 'transparent', justifyContent:"center", alignItems: "center" }}>
          {left}
        </View>
        <View style={{width: "60%", backgroundColor: 'transparent', justifyContent: "center", alignItems: 'flex-start'}}>
          {title}
        </View>
        <View style={{width: "20%", backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
          {right}
        </View>

      </View>
    )
  }
}


export default Header;
