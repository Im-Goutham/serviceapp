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


let back_arrow = require('../assets/icons/back-arrow.png');


class AddServiceCatScreen extends Component {
  constructor(props){
      super(props);
      this.state={
         popularCategories: [
            {name:'Home Interior',image: require('../assets/icons/home_interior.png'),selected:false},
            {name:'Home Exterior',image: require('../assets/icons/home_exterior.png'),selected:false},
            {name:'Landscaping',image: require('../assets/icons/landscaping.png'),selected:false},
            {name:'Handyman',image: require('../assets/icons/handyman.png'),selected:false},
            {name:'Electrician',image: require('../assets/icons/electrician.png'),selected:false},
            {name:'Plumbing',image: require('../assets/icons/plumbing.png'),selected:false},
          ],
          allCategories: [
            {name:'All',image: require('../assets/icons/all.png'),selected:false},
            {name:'Home Exterior',image: require('../assets/icons/home_exterior.png'),selected:false},
            {name:'Landscaping',image: require('../assets/icons/landscaping.png'),selected:false},
            {name:'Handyman',image: require('../assets/icons/handyman.png'),selected:false},
            {name:'Electrician',image: require('../assets/icons/electrician.png'),selected:false},
            {name:'Plumbing',image: require('../assets/icons/plumbing.png'),selected:false},
            {name:'Painting',image: require('../assets/icons/painting.png'),selected:false},
            {name:'Appliance repair',image: require('../assets/icons/appliance.png'),selected:false},
            {name:'Mounting & installing',image: require('../assets/icons/mounting.png'),selected:false},
            {name:'Furniture Assembly',image: require('../assets/icons/furniture.png'),selected:false},
            {name:'Cars & Vehicles',image: require('../assets/icons/cars.png'),selected:false},
            {name:'Cleaning & Housework',image: require('../assets/icons/cleaning.png'),selected:false},
            {name:'Moving / Delivery',image: require('../assets/icons/delivery.png'),selected:false},
            {name:'Beauty',image: require('../assets/icons/beauty.png'),selected:false},
            {name:'Relaxation',image: require('../assets/icons/relaxation.png'),selected:false},
            {name:'Babysitting',image: require('../assets/icons/babysitting.png'),selected:false},
            {name:'Pest Control',image: require('../assets/icons/pestcontrol.png'),selected:false},
            {name:'Adult Care',image: require('../assets/icons/adultcare.png'),selected:false},
            {name:'Pet Care',image: require('../assets/icons/petcare.png'),selected:false},
            {name:'Carpool',image: require('../assets/icons/carpool.png'),selected:false},
            {name:'Tutoring',image: require('../assets/icons/tutoring.png'),selected:false},
            {name:'Tech & Computers',image: require('../assets/icons/tech.png'),selected:false},
            {name:'Document Services',image: require('../assets/icons/document.png'),selected:false},
            {name:'Running Errands',image: require('../assets/icons/running.png'),selected:false},
            {name:'Shopping',image: require('../assets/icons/shopping.png'),selected:false},
            {name:'Decor',image: require('../assets/icons/decor.png'),selected:false},
            {name:'Fitness',image: require('../assets/icons/fitness.png'),selected:false},
            {name:'Music & Dance',image: require('../assets/icons/music.png'),selected:false},
            {name:'Photo & Video',image: require('../assets/icons/photo.png'),selected:false},
            {name:'Food',image: require('../assets/icons/food.png'),selected:false},
            {name:'Wine & Gastronomy',image: require('../assets/icons/wine.png'),selected:false},
            {name:'Private Chef',image: require('../assets/icons/chef.png'),selected:false},
            {name:'Concierge',image: require('../assets/icons/concierge.png'),selected:false},
            {name:'Event Planning',image: require('../assets/icons/event.png'),selected:false},
            {name:'Home Interior',image: require('../assets/icons/home_interior.png'),selected:false},
            {name:'Other',image: require('../assets/icons/other.png'),selected:false},
       ]
      }
  }

  selectPopularCategory(index){
       let {popularCategories} = this.state;
       popularCategories[index].selected = !popularCategories[index].selected;
       this.setState({popularCategories});
       console.log(popularCategories);
  }

  selectAllCategory(index){
    let {allCategories} = this.state;
  
    if(index == 0){
        allCategories[0].selected = !allCategories[0].selected;
        var data = allCategories.map((category,key)=> {
                var categoryData = category;
                categoryData.selected = allCategories[0].selected;
                return categoryData;
        })
        this.setState({allCategories:data});
        console.log(allCategories);
    }
    else {
        allCategories[index].selected = !allCategories[index].selected;
        if(!allCategories[index].selected){
            allCategories[0].selected = false;
        }
        this.setState({allCategories});
    }
}


    render() {
      let {popularCategories, allCategories} = this.state;
   
      var {params} = this.props.navigation.state;
      var {mainScreen} = params;
      console.log('props are in category page .. ',mainScreen);
       return (
           <View style={{flex:1}}>
               <LinearGradient
                   colors={['#3E85EF', '#3EBDEF']}
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
                                       onPress={() => this.props.navigation.goBack()}
                                       style={{width : 54, height:54, justifyContent:'center', alignItems: 'center'}}>
                                       <Image source={back_arrow} style={{ width: '100%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                   </TouchableOpacity>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:54}}>
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 20}}>Add Services</Text>
                               </View>
                               }
                               right={
                                   <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', height:54 ,flexDirection:"row"}}>
                                       <Text style={{ fontFamily: 'Montserrat-Regular', color:"#fff", fontSize: 14}}>Step 1/2</Text>
                                   </View>
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingTop: 10,paddingBottom:20,marginHorizontal:10}}>
                                <SearchBar/>
                   </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
   <ScrollView contentContainerStyle={{
      justifyContent: 'space-between'
  }}>
        <View style={styles.container}>
        <View style={{backgroundColor:'rgb(249, 252, 255)',paddingHorizontal:10,paddingBottom:20,justifyContent:'space-between'}}>


        <View style={styles.servicesBox}>
          <View style={{}}>
              <Text style={styles.textStyle}>Popular Categories</Text>
          </View>
                  <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  >
                    {
                         popularCategories ? (
                            popularCategories.map((category,key)=>{
                                  return  <CategoryContainer key={key} index={key} category={category} selectCategory={(index)=> {this.selectPopularCategory(index)}}/>
                            })
                         ) : null
                    }
                  </ScrollView>
                </View>


              <View style={styles.servicesBox}>
              <View style={{}}>
                  <Text style={styles.textStyle}>All Categories</Text>
              </View>
              <View style={styles.categoryContainer}>
              {
                         allCategories ? (
                            allCategories.map((category,key)=>{
                                  return  <CategoryContainer key={key} index={key} category={category} selectCategory={(index)=> {this.selectAllCategory(index)}}/>
                            })
                         ) : null
                    }
              </View>
              </View>




                </View>
               <LinearGradient
                   colors={['#3E85EF', '#3EBDEF']}
                   start={{x: 0, y: 0}}
                   end={{x: 1, y: 0}}
                   style={{
                      paddingVertical: 25
                   }}>
                 <TouchableOpacity onPress={() => {this.props.navigation.navigate('addServiceSubCatScreen',{mainScreen:mainScreen})}}><Text style={styles.btnText}>CONTINUE</Text></TouchableOpacity>
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
        marginTop: 20,
        paddingHorizontal:20,
        paddingVertical: 20,
        borderRadius:10,
        backgroundColor:'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
    textStyle: {
      fontFamily:"Montserrat-SemiBold",
      fontSize:17
    },
      categoryContainer: {
        flex: 1,
        paddingVertical:10,
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

export default AddServiceCatScreen;
