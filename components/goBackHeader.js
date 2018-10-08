
import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import {scale} from '../global';


class GoBackHeaderComponent extends Component {


    render() {
      let {title} = this.props;
       return (
        <Header style={{backgroundColor:'white'}}>
            <Left style={{flex: 1}}>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='ios-arrow-back' style={{color:'black'}}/>
                </Button>
            </Left>
            <Body style={{flex: 6,alignItems:'flex-start',color:'black',paddingLeft:scale(5)}}>
                <Title style={{color:'black'}}>back to {title}</Title>
            </Body>
             <Right  style={{flex: 1}}/>
        </Header>
       )
    }
}


export default GoBackHeaderComponent;