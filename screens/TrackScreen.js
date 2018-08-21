
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView,Image } from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title,Tab, Tabs ,Text } from 'native-base'
import Advertisement from '../components/Advertisement';
import TracksList from '../components/TracksList';
import Map from '../components/Map';

const TopHeader = (props) => {
    return  <Header style={{backgroundColor:'white'}}>
    <Left style={{flex: 1}}>
        <Button transparent onPress={() => props.navigation.openDrawer()}>
          <Icon name='ios-menu' style={{color:'black',fontSize:25}}/>
        </Button>
      </Left>
      <Body style={{flex: 6,alignItems:'flex-start'}}>
        <Title style={{textAlign:'left',paddingBottom:5}}>{props.title}</Title>
      </Body>
     <Right style={{flex: 2,flexDirection:'row'}}>
          <View style={{flex: 1,alignItems:'flex-end'}}><Icon  name='md-search' style={{color:'black',fontSize:25,fontWeight:'bold'}}/></View>
          <View style={{flex: 1,alignItems:'flex-end'}}><Icon  name='ios-funnel-outline' style={{color:'black',fontSize:24,fontWeight:'bold'}}/></View>
     </Right>
  </Header>
}

class TracksScreen extends Component {

    render() {
       return (
           <View style={styles.container}>
               <TopHeader navigation={this.props.navigation} title={'Track Screen'}/>
               <ScrollView>
               <Advertisement/>
                    <TracksList navigation={this.props.navigation}/>
               <Advertisement/> 
               </ScrollView>
           </View>
       )
    }
}

const styles = StyleSheet.create({
      container: {
          padding:5,
          paddingBottom:40,
          backgroundColor:'white'
    }
})

export default TracksScreen;