
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView,Platform } from 'react-native';
import {  Header, Left, Body, Right, Button, Icon, Title,Tab, Tabs ,Text } from 'native-base'
import Advertisement from '../components/Advertisement';
import JobsList from '../components/JobsList';
import ServiceProvidersList from '../components/ServiceProvidersList';


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

class FavouriteScreen extends Component {
 
    render() {
       return (
           <View style={styles.container}>
               <TopHeader navigation={this.props.navigation} title={'My Favourites'}/>
               <ScrollView>
               <Advertisement/>
                   <Tabs locked={true}>
                        <Tab heading="Favourite Jobs">
                            <JobsList/>
                        </Tab>
                        <Tab heading="Favourite Service Providers">
                            <ServiceProvidersList/>
                        </Tab>
                </Tabs>
                <Advertisement/> 
               </ScrollView>
           </View>
       )
    }
}

const styles = StyleSheet.create({
      container: {
          padding:5,
          paddingBottom: Platform.OS === 'ios' ? 50 : 0, 
          backgroundColor:'white'
    }
})

export default FavouriteScreen;