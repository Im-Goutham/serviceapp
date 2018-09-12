
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableOpacity,ImageBackground} from 'react-native';
import {Switch} from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';


class SettingsList extends Component {

  constructor() {
    super();

    this.state = {

    };
  }




  render() {

    return ( 
      <View style={{flex:1}}>
          <View style={styles.mainBox}>
              <View style={{flex:2,alignItems:'flex-start'}}><Text style={styles.textStyle}>Notifications</Text></View>
              <View style={{flex:1,alignItems:'flex-end'}}><Switch value={true} style={styles.switch}/></View>
          </View>
          <View style={styles.mainBox}>
              <View style={{flex:2,alignItems:'flex-start'}}><Text style={styles.textStyle}>Job alerts</Text></View>
              <View style={{flex:1,alignItems:'flex-end'}}><Switch value={true} style={styles.switch}/></View>
          </View>
          <View style={styles.mainBox}>
              <View style={{flex:2,alignItems:'flex-start'}}><Text style={styles.textStyle}>Change Password</Text></View>
              <View style={{flex:1,alignItems:'flex-end'}}><Image source={require('../assets/icons/arrow_right.png')} style={{width:8,height:12}}/></View>
          </View>
          <View style={styles.mainBox}>
              <View style={{flex:2,alignItems:'flex-start'}}><Text style={styles.textStyle}>Accound Active</Text></View>
              <View style={{flex:1,alignItems:'flex-end'}}><Switch value={true} style={styles.switch}/></View>
          </View>
          <View style={styles.mainBox}>
              <View style={{flex:2}}><Text style={styles.textStyle}>Change the language</Text></View>
              <View style={{flex:1,alignItems:'flex-end'}}><Image source={require('../assets/icons/arrow_right.png')} style={{width:8,height:12}}/></View>
          </View>
          <View style={styles.mainBox}>
              <View style={{flex:2,alignItems:'flex-start'}}>
                   <Text style={styles.textStyle}>Delete my account</Text>
                   <Text style={{fontSize:13,marginVertical:5,fontFamily:'Montserrat-Medium',color:'rgb(186,187,189)'}}>English</Text>
              </View>
              <View style={{flex:1,alignItems:'flex-end'}}><Image source={require('../assets/icons/arrow_right.png')} style={{width:8,height:12}}/></View>
          </View>
      </View>   
    );
  }

}


var styles = StyleSheet.create({
       mainBox: {
             flexDirection: 'row',
             height:80,
             justifyContent:'center',
             alignItems:'center',
             paddingHorizontal:20,
             borderBottomWidth:1,
             borderBottomColor:'rgb(237,237,237)'
       },
       switch: {
            transform: [{ scaleX: .5 }, { scaleY: .5 }]
       },
       textStyle:{
            fontSize:17,
            color:'rgb(34,38,44)',
            fontFamily:'Montserrat-Medium'
       }
  })

export default connect(null, actions)(SettingsList);