import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import * as actions from '../actions';
import Header from '../components/goBackHeader';

import Advertisement from '../components/Advertisement';

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
        <ScrollView>
        <View>
        <Header navigation={this.props.navigation} title={'Add Service'}/>
        <Advertisement />  
        <View style={styles.container}>
        {/* Popular categories starts here */}
          <View style={styles.heading}>
            <Text style={styles.headingTxt}>Popular Categories</Text>
         </View> 
         <View style={{marginTop:10,marginBottom:10}}> 
            <View style={{flexDirection: 'row',alignItems:'center'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              >     
                 {
                   popularCategories.map((category,key)=>{
                         return    <View style={{flexDirection:'column'}} key={key}>
                                        <View style={styles.categoryBox}>
                                            <Icon style={{color:'#4d4d4d'}} active name="md-star" />
                                            <Text>{category.name}</Text>
                                        </View>
                                 </View>     
                   })
                 }
              </ScrollView>   
            </View> 
         </View> 
          {/* Popular categories ends here */}  
         {/* All categories starts here */}  
         <View style={styles.heading}>
            <Text style={styles.headingTxt}>All Categories</Text>
         </View>   
         <View style={styles.categoryContainer}>
         {
                   allCategories.map((category,key)=>{
                         return    <View style={styles.categoryBox} key={key}>
                                            <Icon style={{color:'#4d4d4d'}} active name="md-star" />
                                            <Text>{category.name}</Text>
                                 </View>    
                   })
          }  
      </View>  
           {/* All categories ends here */}   
            <View style={{justifyContent: "center" }}>
               <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('addServiceSubCatScreen')}><Text style={styles.btnText}>CONTINUE</Text></TouchableHighlight>
           </View>
         </View>
         <Advertisement />  
        </View>
        </ScrollView>
      );
    }
}


const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 20,
          paddingBottom: 50,
          backgroundColor: 'white'
      },
      button:{
        backgroundColor:'#007EFA',
        width: '100%',
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#fff',
        paddingTop:10,
        paddingBottom:10,
        marginTop: 5,
        marginBottom: 5
    },
    btnText: { 
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    },
    heading: {
        margin: 20
    },
    headingTxt: {
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 18
    },
    categoryBox: {
        width: 100,
        height: 100,
        margin:5,
        borderColor: 'grey',
        borderWidth:0.5,
        borderRadius:10,
        justifyContent:'center',
        alignItems: 'center'
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
