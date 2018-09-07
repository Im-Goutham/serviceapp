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

        <View>
           <View style={{paddingTop:20,paddingBottom:40,paddingLeft:10}}><Text style={styles.logoText}>Add Service</Text></View>
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
                          return  <View style={styles.categoryBox} key={key}>
                                        <View>

                                        </View>
                                </View>
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
                          return  <View style={styles.categoryBox} key={key}>
                                        <View>

                                        </View>
                                </View>
                    })
                 ) : null
            }
      </View>
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
    borderImg: {width:'100%',height:34},
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
    textStyle: {
      fontFamily:"Montserrat-Bold",
      fontWeight:'bold',
      fontSize:17
    },
    categoryBox: {
        flexDirection:'column',
        margin:7,
        borderRadius:10,
        padding:40,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'rgb(237,237,237)',
      },
      categoryContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        marginTop:20,
        marginBottom:20
    }

})

export default connect(null, actions)(AddServiceCatScreen);
