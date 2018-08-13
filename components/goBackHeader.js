
import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

class GoBackHeaderComponent extends Component {


    render() {
      let {title} = this.props;
       return (
        <Header>
            <Left style={{flex: 1}}>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='ios-arrow-back' style={{color:'#4A4A4A'}}/>
                </Button>
            </Left>
            <Body style={{flex: 6,alignItems:'flex-start'}}>
                <Title>back to {title}</Title>
            </Body>
             <Right  style={{flex: 1}}/>
        </Header>
       )
    }
}


export default GoBackHeaderComponent;