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

import {scale} from '../global';

let back_arrow = require('../assets/icons/arrow_left.png');


class AddServiceSubCatScreen extends Component {
  constructor(props){
      super(props);
      this.state={
          subCategories: [
            {name:'Hair',image: require('../assets/icons/hair.png')},
            {name:'Manicure/Pedicure',image: require('../assets/icons/manicure_pedicure.png')},
            {name:'Makeup',image: require('../assets/icons/makeup.png')},
            {name:'Wax',image: require('../assets/icons/wax.png')},
            {name:'Other',image: require('../assets/icons/other.png')},
          ]
      }
  }


    selectSubCategory(index){
            let {subCategories} = this.state;
            subCategories[index].selected = !subCategories[index].selected;
            this.setState({subCategories});
            console.log(subCategories);
    }  



    render() {
      let {subCategories} = this.state;

      var {params} = this.props.navigation.state;
      let {mainScreen} = params;
      console.log('props are in subcategory page .. ',mainScreen);
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
                                       style={{width : scale(54), height:scale(54), justifyContent:'center', alignItems: 'center'}}>
                                       <Image source={back_arrow} style={{ width: '100%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                   </TouchableOpacity>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:scale(54)}}>
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(20)}}>Add Services</Text>
                               </View>
                               }
                               right={
                                   <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', height:scale(54) ,flexDirection:"row"}}>
                                       <Text style={{ fontFamily: 'Montserrat-Regular', color:"#fff", fontSize: scale(14)}}>Step 2/2</Text>
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
               <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={styles.container}>
                <View style={{backgroundColor:'rgb(249, 252, 255)',paddingHorizontal:scale(10),justifyContent:'space-between'}}>
              <View style={styles.servicesBox}>
              <View style={{marginTop:scale(20)}}>
                  <Text style={styles.textStyle}>Select Sub Category</Text>
              </View>
              <View style={styles.categoryContainer}>
              {
                         subCategories ? (
                            subCategories.map((category,key)=>{
                                  return  <CategoryContainer key={key} index={key} category={category} selectCategory={(index)=> {this.selectSubCategory(index)}}/>
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
                     paddingVertical: scale(25)
                   }}>
                 <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text style={styles.btnText}>ADD SERVICE</Text></TouchableOpacity>
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

export default AddServiceSubCatScreen;