import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,ScrollView, Dimensions,Platform, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import * as actions from '../actions';
import Header from '../components/Header';
import Advertisement from '../components/Advertisement';
import CategoryContainer from '../components/CategoryContainer';


import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

let back_arrow = require('../assets/icons/back-arrow.png');

class AddServiceSubCatScreen extends Component {
constructor(){
     super();
     this.state = {
          subCategories: [
            {name:'Home Interior',image: require('../assets/icons/home_interior.png')},
            {name:'Home Exterior',image: require('../assets/icons/home_exterior.png')},
            {name:'Landscaping',image: require('../assets/icons/landscaping.png')},
            {name:'Handyman',image: require('../assets/icons/handyman.png')},
            {name:'Electrician',image: require('../assets/icons/electrician.png')},
            {name:'Pluming',image: require('../assets/icons/plumbing.png')},
          ]
     }
}
    render() {
        let {subCategories} = this.state;
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
                 <Text style={{ fontFamily: 'Montserrat-Light', color:"#fff", fontSize: 16}}>Step 2/2</Text>
               </View>
              }
              />
        <ScrollView contentContainerStyle={{
      justifyContent: 'space-between'
  }}>
        <View style={styles.container}>
        <View>
           <Image style={styles.borderImg} source={require('../images/border_img.png')} resizeMode='contain' resizeMethod='resize'/>
        </View>
        <View style={{backgroundColor:'rgb(249, 252, 255)',paddingHorizontal:10, paddingVertical:30,justifyContent:'space-between',height:height-200}}>
      <View style={styles.servicesBox}>
      <View style={{marginVertical:20}}>
          <Text style={styles.textStyle}>Select Sub Category</Text>
      </View>
      <View style={styles.categoryContainer}>
      {
                 subCategories ? (
                    subCategories.map((category,key)=>{
                          return  <CategoryContainer category={category}/>
                    })
                 ) : null
            }
      </View>
      </View>




        </View>

         </View>
         <View style={{marginVertical: 30}}>
         <TouchableOpacity onPress={() => {this.props.navigation.navigate('profile')}}><Text style={styles.btnText}>ADD SERVICE</Text></TouchableOpacity>
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

export default connect(null, actions)(AddServiceSubCatScreen);
