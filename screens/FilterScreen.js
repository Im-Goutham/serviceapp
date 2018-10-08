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

import {Item,Input,Label} from 'native-base';

import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';



import HeaderScreen from './HeaderScreen';
import SearchBar from '../components/SearchBar';
import CategoryContainer from '../components/CategoryContainer';
import FloatingLabelInput from '../components/FloatingLabelInput';
import {scale} from '../global';

let back_arrow = require('../assets/icons/arrow_left.png');
let menu = require('../assets/icons/menu.png');

class FilterScreen extends Component {
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
            {name:'Painting',image: require('../assets/icons/painting.png'),selected:false},
            {name:'Appliance repair',image: require('../assets/icons/appliance.png'),selected:false},
            {name:'Mounting & installing',image: require('../assets/icons/mounting.png'),selected:false},
            {name:'Furniture Assembly',image: require('../assets/icons/furniture.png'),selected:false},
            {name:'Cars & Vehicles',image: require('../assets/icons/cars.png'),selected:false},
            {name:'Cleaning & Housework',image: require('../assets/icons/cleaning.png'),selected:false},
            {name:'Moving / Delivery',image: require('../assets/icons/delivery.png'),selected:false},
            {name:'Beauty',image: require('../assets/icons/beauty.png'),selected:false},
          ],
          allCategories: [
            {name:'All',image: require('../assets/icons/all.png')},
            {name:'Home Exterior',image: require('../assets/icons/home_exterior.png')},
            {name:'Landscaping',image: require('../assets/icons/landscaping.png')},
            {name:'Handyman',image: require('../assets/icons/handyman.png')},
            {name:'Electrician',image: require('../assets/icons/electrician.png')},
            {name:'Plumbing',image: require('../assets/icons/plumbing.png')},
            {name:'Painting',image: require('../assets/icons/painting.png')},
            {name:'Appliance repair',image: require('../assets/icons/appliance.png')},
            {name:'Mounting & installing',image: require('../assets/icons/mounting.png')},
            {name:'Furniture Assembly',image: require('../assets/icons/furniture.png')},
            {name:'Cars & Vehicles',image: require('../assets/icons/cars.png')},
            {name:'Cleaning & Housework',image: require('../assets/icons/cleaning.png')},
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
            {name:'Photo & Video',image: require('../assets/icons/photo.png')},
            {name:'Food',image: require('../assets/icons/food.png')},
            {name:'Wine & Gastronomy',image: require('../assets/icons/wine.png')},
            {name:'Private Chef',image: require('../assets/icons/chef.png')},
            {name:'Concierge',image: require('../assets/icons/concierge.png')},
            {name:'Event Planning',image: require('../assets/icons/event.png')},
            {name:'Home Interior',image: require('../assets/icons/home_interior.png')},
            {name:'Other',image: require('../assets/icons/other.png')},
       ],
       value:''
      }
      this.inputs = {};
  }

  handleTextChange = (newText) => this.setState({ value: newText });


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
                                <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                    <TouchableOpacity  onPress={() => this.props.navigation.goBack()}  style={{width: "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                      <Image source={back_arrow} style={{ width: '50%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{width: "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                      <Image source={menu} style={{ width: '50%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                    </TouchableOpacity>
                                </View>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:scale(54)}}>
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(20)}}>Filter</Text>
                               </View>
                               }
                               right={
                                   <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', height:scale(54) ,flexDirection:"row"}}>
                                       <Text style={{ fontFamily: 'Montserrat-Regular', color:"#fff", fontSize: scale(14)}}>Clear All</Text>
                                   </View>
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingVertical: scale(10),marginHorizontal:scale(10)}}>
                       
                          </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
   <ScrollView contentContainerStyle={{
      justifyContent: 'space-between'
  }}>
        <View style={styles.container}>
        <View style={{backgroundColor:'rgb(249, 252, 255)',paddingHorizontal:scale(15), paddingBottom:scale(30),justifyContent:'space-between'}}>

        <View>
                <View style={{marginVertical:scale(20)}}>
                  <Text style={{ color:'#4A4A4A',fontFamily:'Montserrat-Medium',fontSize:scale(13)}}>Address</Text>
                 <Item>
                        <Input style={styles.inputLabel} placeholder="Current Location" />
                </Item>
                </View>
                     <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                  <View style={{width:'50%',paddingRight:scale(10)}}>
                  <FloatingLabelInput
                    label="City"
                    value={this.state.city}
                    autoCapitalize='none'
                    returnKeyType={ "next" }
                    ref={ input => {
                    this.inputs['city'] = input;
                    }}/>
                  </View>
                  <View style={{width:'50%',paddingLeft:scale(10)}}>
                  <FloatingLabelInput
                    label="State"
                    value={this.state.state}
                    autoCapitalize='none'
                    returnKeyType={ "next" }
                    ref={ input => {
                    this.inputs['state'] = input;
                    }}/>
                  
                  </View>
                </View>

                <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                  <View style={{width:'50%',paddingRight:scale(10)}}>
                  <FloatingLabelInput
                    label="Zip Code"
                    value={this.state.zip}
                    autoCapitalize='none'
                    returnKeyType={ "next" }
                    ref={ input => {
                    this.inputs['zip'] = input;
                    }}/>
                  </View>
                  <View style={{width:'50%',paddingLeft:scale(10)}}>
                  <FloatingLabelInput
                    label="Country"
                    value={this.state.country}
                    autoCapitalize='none'
                    returnKeyType={ "next" }
                    ref={ input => {
                    this.inputs['country'] = input;
                    }}/>
                  </View>
                </View>
                <View style={{marginVertical:scale(20)}}>
                <Text style={{ color:'#4A4A4A',fontFamily:'Montserrat-Medium',fontSize:13}}>Search Category</Text>
                        <Item>
                        <Input style={styles.inputLabel} placeholder="Enter Keyword" />
                </Item>
                </View>


        </View>
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
                      paddingVertical: scale(30)
                   }}>
                 <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}><Text style={styles.btnText}>APPLY FILTER</Text></TouchableOpacity>
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
        fontSize:scale(35),
        fontWeight:'bold'
      },
    borderImg: {width:'100%',height:scale(31)},
    servicesBox: {
        flex: 1,
        marginVertical: scale(20),
        paddingHorizontal:scale(20),
        paddingVertical:scale(20),
        borderRadius:scale(10),
        backgroundColor:'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
    textStyle: {
      fontFamily:"Montserrat-SemiBold",
      fontSize:scale(17)
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
        fontSize: scale(18),
        fontFamily:'Montserrat-Bold'
    },
    inputField: {
        marginVertical: scale(10)
    },
    inputLabel: {
        textAlign:'left',
        fontSize: scale(16),
        marginLeft:0,
        fontFamily:'Montserrat-Light'
     },
})

export default FilterScreen;
