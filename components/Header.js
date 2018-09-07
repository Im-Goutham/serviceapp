import React, { Component } from 'react';
import { View, Text,TouchableOpacity, Platform} from 'react-native';
// import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { Icon } from 'native-base'

import LinearGradient from 'react-native-linear-gradient';

import { DrawerActions } from 'react-navigation';

class Header extends Component {
  render() {
    let {title, left} = this.props;
    return (
      <LinearGradient
        colors={['#3E85EF', '#3EBDEF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          // flex: 1,
          height: Platform.OS === 'ios'? 64: 54,
          justifyContent : 'flex-end',
          flexDirection: 'row'
          // borderRadius: 5
        }}>
        <View style={{width: "20%", backgroundColor: 'transparent', justifyContent:"center", alignItems: "center" }}>
          {left}
        </View>
        <View style={{width: "60%", backgroundColor: 'transparent', justifyContent: "center", alignItems: 'flex-start'}}>
          {title}
        </View>
        <View style={{width: "20%", backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
          <TouchableOpacity style={{width: "50%", backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
            <Icon  name='md-search' style={{color:'#fff',fontSize:25,fontWeight:'bold'}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{width: "50%", backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
            <Icon  name='md-person' style={{color:'#fff',fontSize:25,fontWeight:'bold'}}/>
          </TouchableOpacity>

        </View>

      </LinearGradient>
    )
  }
}


export default Header;
