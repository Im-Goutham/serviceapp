import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'


class SubHeader extends Component {


    render() {
      let {title} = this.props;
       return (
          <Header>
          <Left style={{flex: 1}}>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='ios-arrow-back' />
              </Button>
            </Left>
            <Body style={{flex: 2,alignItems:'center'}}>
              <Title>{title}</Title>
            </Body>
           <Right  style={{flex: 1}}/>
        </Header>
       )
    }
}


export default SubHeader;