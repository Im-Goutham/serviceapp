
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableOpacity,ImageBackground, Platform} from 'react-native';
import {Switch} from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {scale} from '../global';


class LanguageList extends Component {

  constructor() {
    super();

    this.state = {
          languages: ['English', 'French', 'Spanish', 'Italian', 'Portuguese', 'German','Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Gujarati', 'Kannada',  'Malayalam'],
          selectedkey: 0
    };
  }




  render() {
    let {languages} = this.state;
    return ( 
      <View style={{flex:1}}>
      {
            languages.map((language,index)=>{
                return  <TouchableOpacity key={index} onPress={()=>this.setState({selectedkey : index})}>
                <View style={styles.mainBox}>
                <View style={{flex:2}}><Text style={[styles.textStyle,{ color: index === this.state.selectedkey ? "rgb(61, 133, 239)" : "#000" }]}>{language}</Text></View>
                <View style={{flex:1,alignItems:'flex-end'}}>
                   {
                       (index === this.state.selectedkey)?(
                         <Image source={require('../assets/icons/tick_green.png')} style={{width:scale(16),height:scale(16)}}/>
                       ):(null)
                   }
                  
                </View>
                </View>
                </TouchableOpacity>
            })
      }
      </View>   
    );
  }

}


var styles = StyleSheet.create({
       mainBox: {
             flexDirection: 'row',
             height:scale(80),
             justifyContent:'center',
             alignItems:'center',
             paddingHorizontal:scale(20),
             borderBottomWidth:scale(1),
             borderBottomColor:'rgb(237,237,237)'
       },
       switch: {
          transform: Platform.OS === 'ios' ? [{ scaleX: scale(.5) }, { scaleY: scale(.5) }] : [{ scaleX: scale(.8) }, { scaleY: scale(.8) }]
       },
       textStyle:{
            fontSize:scale(17),
            color:'rgb(34,38,44)',
            fontFamily:'Montserrat-Medium'
       }
  })

export default connect(null, actions)(LanguageList);