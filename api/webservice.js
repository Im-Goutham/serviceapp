import React, { Component } from 'react'

import {
   StyleSheet,
   Text,
   TouchableOpacity,
   Platform,
   Alert,
   NetInfo,
   AppRegistry,
   AsyncStorage
} from 'react-native'

import Events from 'react-native-simple-events';
import Constant from 'Domingo/Src/Screens/GeneralClass/Constant';
import { NavigationActions } from 'react-navigation'


export default class webservice extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}
module.exports = {
  isConnectedGlobal : '',
  serverUri : 'http://angola.sandboxserver.info/api/',
  languageId : '',
  deviceToken :'',
  CALL_ONETIME:'',
  callWebservice(methodName,param,deviceId) {
    console.log('final device id is my ',deviceId)
    console.log("param",param)
    var params = Object.assign({},param)
    var strObj = JSON.stringify(params)
    console.log('Final Request is',params);
    fetch(this.serverUri+methodName, {
      headers: {
        //'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: strObj
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("getting responce in Webservice class is",responseJson);
      if(responseJson.code == '1010' || responseJson.code == '1001')
      {
        Alert.alert(
          Constant.APP_NAME,
          responseJson.message,
          [
            {text: 'Okay', onPress:() => Events.trigger('DeleteUser')},
          ],
          { cancelable: false }
        )
      }
      else if (responseJson.code == '102')
      {
        this.updateVersionfunction()
      }
      else
      {
        Events.trigger('receiveResponse', responseJson)
      }
    })
    .catch((error) => {
      console.log("getting error in Webservice class is",error);
      Events.trigger('receiveResponse', responseJson)
    });
  },
  callWebservicewithImage(methodName,params,deviceId) {
    console.log('final device id is my ',deviceId)
    const data = new FormData();
    console.log("file image is",params.image)
    if(params.image !== null) {
      var ext = params.image.uri.substring(params.image.uri.lastIndexOf(".")+1);
      var name = 'photo1.'+ext
      if (methodName == 'UploadVendor') {
        data.append('VendorImage', {uri: params.image.uri, name:name, type:'multipart/form-data'});
      }
      else {
        data.append('UserImagePath', {uri: params.image.uri, name:name, type:'multipart/form-data'});
      }
    }
    var reqData = {};
    Object.keys(params).map((key, index) => (
      key != 'image' && key != 'photoResponse' ? data.append(key, params[key]) : ''
    ))
    console.log('Final Request is',data);
    fetch(this.serverUri+methodName, {
      headers: {
        //'Accept': 'application/x-www-form-urlencoded',
        'Content-Type':'multipart/form-data'      //'application/octet-stream',
      },
      method: 'POST',
      body: data
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("getting responce in Webservice class is",responseJson);
      if(responseJson.code == '1010' || responseJson.code == '1001')
      {
        Alert.alert(
          Constant.APP_NAME,
          responseJson.message,
          [
            {text: 'Okay', onPress:() => Events.trigger('DeleteUser')},
          ],
          { cancelable: false }
        )
      }
      else if (responseJson.code == '102')
      {
      }
      else
      {
        //If getting Proper Responce
        console.log('sucess')
        Events.trigger('receiveResponse', responseJson)
      }
    })
    .catch((error) => {
      console.log("getting error in Webservice class is",error);
      //alert("Somthing went wrong,please try latter");
      Events.trigger('receiveResponse', error)
    });
  },
  initNetInfoForConnectivity(){
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectivityChange.bind(this)
    );
    NetInfo.isConnected.fetch().done((isConnected) => {isConnectedGlobal = isConnected });
  },
  handleConnectivityChange (isConnected) {
    console.log("isConnected:=",isConnected)
    isConnectedGlobal = isConnected,
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
    );
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this._handleConnectivityChange
    );
  },
  updateVersionfunction(){
    console.log('this method is  called')
    }
};
