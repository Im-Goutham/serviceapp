import React, { Component } from 'react';
import { View, Text,TouchableOpacity, Platform} from 'react-native';
import {scale} from '../global';
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
          height: Platform.OS === 'ios'? scale(84): scale(54),
          flexDirection: 'row',
          backgroundColor:'transparent',
          alignItems:'flex-end'
          // borderRadius: 5
        }}>
        <View style={{ width: this.props.is_home ? "15%" : "20%", backgroundColor: 'transparent', justifyContent:"center", alignItems: "flex-start", paddingRight:scale(10) }}>
          {left}
        </View>
        <View style={{width: right ? this.props.is_home ? "60%" : "55%" : '100%', backgroundColor: 'transparent', justifyContent: "center", alignItems: 'flex-start'}}>
          {title}
        </View>
        <View style={{width: right ? "25%" : '0%', backgroundColor: 'transparent', justifyContent: "flex-end", alignItems: 'center', flexDirection:"row"}}>
          {right}
        </View>

      </View>
    )
  }
}


export default Header;
