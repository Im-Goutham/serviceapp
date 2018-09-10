import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,ScrollView, Dimensions,Platform, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import * as actions from '../actions';
import Header from '../components/Header';
import Advertisement from '../components/Advertisement';
import SearchBar from '../components/SearchBar';
import CategoryContainer from '../components/CategoryContainer';

import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

let back_arrow = require('../assets/icons/back-arrow.png');

class AddServiceCatScreen extends Component {
constructor(){
     super();
     this.state = {
          popularCategories: [
            {name:'Home Interior',image: require('../assets/icons/home_interior.png')},
            {name:'Home Exterior',image: require('../assets/icons/home_exterior.png')},
            {name:'Landscaping',image: require('../assets/icons/landscaping.png')},
            {name:'Handyman',image: require('../assets/icons/handyman.png')},
            {name:'Electrician',image: require('../assets/icons/electrician.png')},
            {name:'Pluming',image: require('../assets/icons/plumbing.png')},
          ],
          allCategories: [
            {name:'Home Interior',image: require('../assets/icons/home_interior.png')},
            {name:'Home Exterior',image: require('../assets/icons/home_exterior.png')},
            {name:'Landscaping',image: require('../assets/icons/landscaping.png')},
            {name:'Handyman',image: require('../assets/icons/handyman.png')},
            {name:'Electrician',image: require('../assets/icons/electrician.png')},
            {name:'Pluming',image: require('../assets/icons/plumbing.png')},
            {name:'Painting',image: require('../assets/icons/painting.png')},
            {name:'Appliance repair',image: require('../assets/icons/appliance.png')},
            {name:'Mounting & installing',image: require('../assets/icons/mounting.png')},
            {name:'Future Assembly',image: require('../assets/icons/furniture.png')},
            {name:'Cars & Vehicles',image: require('../assets/icons/cars.png')},
            {name:'Cleaning & Housework',image: require('../assets/icons/cleaning.png')},
            {name:'Moving / Delivery',image: require('../assets/icons/delivery.png')},
            {name:'Moving / Delivery',image: require('../assets/icons/delivery.png')},
            {name:'Beauty',image: require('../assets/icons/beauty.png')},
            {name:'Relaxation',image: require('../assets/icons/relaxation.png')},
            {name:'Babysitting',image: require('../assets/icons/babysitting.png')},
            {name:'Pest Control',image: require('../assets/icons/pestcontrol.png')},
            {name:'Adult Care',image: require('../assets/icons/adultcare.png')},
            {name:'Pet Care',image: require('../assets/icons/petcare.png')},
            {name:'Carpool',image: require('../assets/icons/carpool.png')},
            {name:'Tutoring',image: require('../assets/icons/tutoring.png')},
            {name:'Tech & Computers',image: require('../assets/icons/tech.png')},
            {name:'Document Services',image: require('../assets/icons/document.png')},
            {name:'Running Errands',image: require('../assets/icons/running.png')},
            {name:'Shopping',image: require('../assets/icons/shopping.png')},
            {name:'Decor',image: require('../assets/icons/decor.png')},
            {name:'Fitness',image: require('../assets/icons/fitness.png')},
            {name:'Music & Dance',image: require('../assets/icons/music.png')},
            {name:'photo & Video',image: require('../assets/icons/photo.png')},
            {name:'Food',image: require('../assets/icons/food.png')},
            {name:'Wine & Gastronomy',image: require('../assets/icons/wine.png')},
            {name:'Private Chef',image: require('../assets/icons/chef.png')},
            {name:'Concierge',image: require('../assets/icons/concierge.png')},
            {name:'Event Planning',image: require('../assets/icons/event.png')},
            {name:'Other',image: require('../assets/icons/other.png')},
       ]
     }
}
    render() {
        let {popularCategories, allCategories} = this.state;
      return (
        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={{flex:1}}>
          <Header
              navigation={this.props.navigation}
              left = {
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                  style={{width : 54, height:54, justifyContent:'center', alignItems: 'center'}}>
                  <Image source={back_arrow} style={{ width: '100%', height: 25}} resizeMode="contain" resizeMethod="resize"/>
                </TouchableOpacity>
              }
              title={
                <View style={{ justifyContent : 'center', alignItems: 'flex-start', width:"100%", height:54}}>
                  <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 20}}>Add Service</Text>
                </View>
              }
              right={
                <View style={{ justifyContent : 'center', alignItems: 'flex-start', width:"100%", height:54}}>
                 <Text style={{ fontFamily: 'Montserrat-Light', color:"#fff", fontSize: 16}}>Step 1/2</Text>
               </View>
              }
              />
        <ScrollView contentContainerStyle={{
      justifyContent: 'space-between'
  }}>
        <View style={styles.container}>
        <View>
            <View style={{paddingHorizontal:10,marginVertical:15}}>
             <SearchBar/>
           </View>
           <Image style={styles.borderImg} source={require('../images/border_img.png')} resizeMode='contain' resizeMethod='resize'/>
        </View>
        <View style={{backgroundColor:'rgb(249, 252, 255)',paddingHorizontal:10, paddingVertical:30,justifyContent:'space-between'}}>


        <View style={styles.servicesBox}>
          <View style={{marginVertical:20}}>
              <Text style={styles.textStyle}>Popular Categories</Text>
          </View>
          <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
            {
                 popularCategories ? (
                    popularCategories.map((category,key)=>{
                          return  <CategoryContainer category={category}/>
                    })
                 ) : null
            }
          </ScrollView>
        </View>


      <View style={styles.servicesBox}>
      <View style={{marginVertical:20}}>
          <Text style={styles.textStyle}>All Categories</Text>
      </View>
      <View style={styles.categoryContainer}>
      {
                 allCategories ? (
                    allCategories.map((category,key)=>{
                          return  <CategoryContainer category={category}/>
                    })
                 ) : null
            }
      </View>
      </View>




        </View>
   
         </View>
        <View style={{marginVertical: 30}}>
         <TouchableOpacity onPress={() => {this.props.navigation.navigate('addServiceSubCatScreen')}}><Text style={styles.btnText}>CONTINUE</Text></TouchableOpacity>
         </View>
         </ScrollView>
         </LinearGradient>
      );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    logoText: {
        color:'white',
        textAlign:'left',
        fontSize:35,
        fontWeight:'bold'
      },
    borderImg: {width:'100%',height:31},
    servicesBox: {
        flex: 1,
        marginVertical: 20,
        paddingHorizontal:20,
        borderRadius:10,
        backgroundColor:'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
    textStyle: {
      fontFamily:"Montserrat-Bold",
      fontWeight:'bold',
      fontSize:17
    },
      categoryContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
    },
    btnText: { 
        textAlign:'center',
        color:'white',
        fontSize: 16,
        fontWeight:'bold'
    }

})

export default connect(null, actions)(AddServiceCatScreen);
