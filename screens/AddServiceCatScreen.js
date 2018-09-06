import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,ScrollView, Dimensions,Platform} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import * as actions from '../actions';
import Header from '../components/goBackHeader';
import Advertisement from '../components/Advertisement';

import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';



class AddServiceCatScreen extends Component {
constructor(){
     super();
     this.state = {
          popularCategories: [
               {name:'Home Exterior'},
               {name:'Handlooms'},
               {name:'Water Servicing'},
               {name:'External painting'},
               {name:'Landscaping'},
          ],
          allCategories: [
            {name:'Home Interior'},
            {name:'Home Exterior'},
            {name:'Landscaping'},
            {name:'Handyman'},
            {name:'Electrician'},
            {name:'Pluming'},
            {name:'Painting'},
            {name:'Appliance repair'},
            {name:'Mounting & installing'},
            {name:'Future assembly'},
            {name:'Cars & Vehicles'},
            {name:'Cleaning & Housework'},
       ]
     }
}
    render() {
        let {popularCategories, allCategories} = this.state;
      return (  
        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={{flex:1}}>
        <ScrollView contentContainerStyle={{
      justifyContent: 'space-between'
  }}>
        <View style={styles.container}>   
        <View style={{justifyContent:'flex-start',paddingHorizontal:10}}>
           <Icon style={{color:'white'}} active name="ios-arrow-back"  onPress={() => this.props.navigation.goBack()}/>
        </View>

        <View style={{position:'relative'}}>
           <View style={{paddingTop:20,paddingBottom:40,paddingLeft:10}}><Text style={styles.logoText}>Add Service</Text></View>
           <Image style={styles.borderImg} source={require('../images/border_img.png')}/>
        </View>  
        <View style={{backgroundColor:'rgb(249, 252, 255)',paddingHorizontal:10, paddingVertical:30,justifyContent:'space-between'}}>


        <View style={styles.servicesBox}>
          
        </View>  


      <View style={styles.servicesBox}>
           
       
      </View>  
     
      
    

        </View>
         </View>
         </ScrollView>
         </LinearGradient>
      );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: isAndroid ? 0 : 50,
        justifyContent: 'space-between'
    },
    logoText: {
        color:'white',
        textAlign:'left',
        fontSize:35,
        fontWeight:'bold'
      },
    borderImg: {width:width,height:40,bottom:-10,position:'absolute'},
    servicesBox: {
        flex: 1,
        marginVertical: 20,
        paddingVertical: 25,
        paddingHorizontal:20,
        borderRadius:10,
        backgroundColor:'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
  
})

export default connect(null, actions)(AddServiceCatScreen);
