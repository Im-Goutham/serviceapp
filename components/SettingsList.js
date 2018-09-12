
import React, {Component} from 'react';
import {StyleSheet, ListView,Dimensions, Text, View, ScrollView,Image,TouchableOpacity,ImageBackground} from 'react-native';
import {Switch, Icon} from 'native-base';
import { connect } from 'react-redux';
import ChangePasswordModal from './ChangePasswordModal';
import * as actions from '../actions';
var {height, width} = Dimensions.get('window');

class SettingsList extends Component {

  constructor() {
    super();

    this.state = {
        visible:false
    };
  }




  render() {
    let { visible } = this.state;
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
          <TouchableOpacity  onPress={() => { this.setState({visible:true})}}>
          <View style={styles.mainBox}>
              <View style={{flex:2,alignItems:'flex-start'}}><Text style={styles.textStyle}>Change Password</Text></View>
              <View style={{flex:1,alignItems:'flex-end'}}><Image source={require('../assets/icons/arrow_right.png')} style={{width:8,height:12}}/></View>
          </View>
          </TouchableOpacity>
          <View style={styles.mainBox}>
              <View style={{flex:2,alignItems:'flex-start'}}><Text style={styles.textStyle}>Accound Active</Text></View>
              <View style={{flex:1,alignItems:'flex-end'}}><Switch value={true} style={styles.switch}/></View>
          </View>
          <TouchableOpacity  onPress={() => {this.props.navigation.navigate('chooseLanguage')}}>
          <View style={styles.mainBox}>
                <View style={{flex:2}}>
                <Text style={styles.textStyle}>Change the language</Text>
                <Text style={{fontSize:13,marginVertical:5,fontFamily:'Montserrat-Medium',color:'rgb(186,187,189)'}}>English</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end'}}><Image source={require('../assets/icons/arrow_right.png')} style={{width:8,height:12}}/></View>
          </View>
         </TouchableOpacity>
         <TouchableOpacity  onPress={() => {this.props.navigation.navigate('deleteAccount')}}>
          <View style={styles.mainBox}>
              <View style={{flex:2,alignItems:'flex-start'}}>
                   <Text style={styles.textStyle}>Delete my account</Text>
              </View>
              <View style={{flex:1,alignItems:'flex-end'}}><Image source={require('../assets/icons/arrow_right.png')} style={{width:8,height:12}}/></View>
          </View>
          </TouchableOpacity>
        <ChangePasswordModal visible={visible} closeModal={() => { this.setState({visible:false})}}/>
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