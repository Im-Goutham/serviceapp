import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

import { DrawerActions } from 'react-navigation';

class HeaderComponent extends Component {


    render() {
      let {title} = this.props;
       return (
          <Header>
          <Left style={{flex: 1}}>
              <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                <Icon name='ios-menu' />
              </Button>
            </Left>
            <Body style={{flex: 1,alignItems:'center'}}>
              <Title>{title}</Title>
            </Body>
           <Right  style={{flex: 1}}/>
        </Header>
       )
    }
}


export default HeaderComponent;