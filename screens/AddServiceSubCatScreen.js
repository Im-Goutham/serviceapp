import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableHighlight,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Toast } from 'native-base';
import * as actions from '../actions';
import Header from '../components/goBackHeader';

import Advertisement from '../components/Advertisement';

class AddServiceSubCatScreen extends Component {

    render() {
      return (  
        <ScrollView>
        <View>
        <Header navigation={this.props.navigation} title={'Add Service'}/>
        <Advertisement />  
        <View style={styles.container}>
         {/* All categories starts here */}  
         <View style={styles.heading}>
            <Text style={styles.headingTxt}>Select Sub Category</Text>
         </View>   
         <View style={styles.categoryContainer}>
         <View style={styles.categoryBox}></View>  
         <View style={styles.categoryBox}></View>  
         <View style={styles.categoryBox}></View>  
         <View style={styles.categoryBox}></View>  
         <View style={styles.categoryBox}></View>  
         <View style={styles.categoryBox}></View>  
         <View style={styles.categoryBox}></View>  
         <View style={styles.categoryBox}></View> 
         <View style={styles.categoryBox}></View>  
         <View style={styles.categoryBox}></View>  
         <View style={styles.categoryBox}></View>  
         <View style={styles.categoryBox}></View>  
         <View style={styles.categoryBox}></View>   
      </View>  
           {/* All categories ends here */}   
            <View style={{justifyContent: "center" }}>
               <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('profile')}><Text style={styles.btnText}>ADD SERVICE</Text></TouchableHighlight>
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
        borderRadius:10
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

export default connect(null, actions)(AddServiceSubCatScreen);
