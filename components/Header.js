import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

import { DrawerActions } from 'react-navigation';

class HeaderComponent extends Component {


    render() {
      let {title} = this.props;
       return (
          <Header style={{backgroundColor:'white'}}>
          <Left style={{flex: 1}}>
              <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                <Icon name='ios-menu' style={{color:'black',fontSize:25}}/>
              </Button>
            </Left>
            <Body style={{flex: 6,alignItems:'flex-start'}}>
              <Title style={{textAlign:'left',paddingBottom:5,color:'black'}}>{title}</Title>
            </Body>
           <Right style={{flex: 2,flexDirection:'row'}}>
                <View style={{flex: 1,alignItems:'flex-end'}}><Icon  name='md-search' style={{color:'black',fontSize:25,fontWeight:'bold'}}/></View>
                <View style={{flex: 1,alignItems:'flex-end'}}><Icon  name='md-person' style={{color:'black',fontSize:25,fontWeight:'bold'}}/></View>
           </Right>
        </Header>
       )
    }
}


export default HeaderComponent;