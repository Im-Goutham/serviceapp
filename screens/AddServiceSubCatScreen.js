import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
    Text, TouchableHighlight
} from 'react-native';

import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';



import HeaderScreen from './HeaderScreen';
import SearchBar from '../components/SearchBar';
import CategoryContainer from '../components/CategoryContainer';

const { width, height } = Dimensions.get('window');
let back_arrow = require('../assets/icons/back-arrow.png');


class AddServiceSubCatScreen extends Component {
  constructor(props){
      super(props);
      this.state={
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
           <View style={{flex:1}}>
               <LinearGradient
                   colors={['rgb(60, 139, 239)', 'rgb(60,187, 239)']}
                   start={{x: 0, y: 0}}
                   end={{x: 1, y: 0}}
                   style={{
                       flex: 1
                   }}>
                   <HeaderScreen
                       header={
                           <Header
                               navigation={this.props.navigation}
                               left = {
                                   <TouchableOpacity
                                       onPress={() => this.props.navigation.openDrawer()}
                                       style={{width : 54, height:54, justifyContent:'center', alignItems: 'center'}}>
                                       <Image source={back_arrow} style={{ width: '100%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                   </TouchableOpacity>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:54}}>
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 18}}>Add Services</Text>
                               </View>
                               }
                               right={
                                   <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', height:54 ,flexDirection:"row"}}>
                                       <Text style={{ fontFamily: 'Montserrat-Regular', color:"#fff", fontSize: 14}}>Step 2/2</Text>
                                   </View>
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingVertical: 10,marginHorizontal:10}}>
                                <SearchBar/>
                   </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
               <ScrollView contentContainerStyle={{
              justifyContent: 'space-between'
          }}>
                <View style={styles.container}>
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
              <LinearGradient
                   colors={['rgb(60, 139, 239)', 'rgb(60,187, 239)']}
                   start={{x: 0, y: 0}}
                   end={{x: 1, y: 0}}
                   style={{
                      paddingVertical: 30
                   }}>
                 <TouchableOpacity onPress={() => {this.props.navigation.navigate('profile')}}><Text style={styles.btnText}>CONTINUE</Text></TouchableOpacity>
               </LinearGradient>

                 </View>

                 </ScrollView>
                       </View>
               </LinearGradient>

           </View>
       )
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
        fontSize: 18,
        fontFamily:'Montserrat-Bold'
    }
})

export default AddServiceSubCatScreen;
