import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text, Dimensions, 
    Platform,
    ScrollView,
    DatePickerIOS,
    DatePickerAndroid
} from 'react-native';

import {  Item, Input, Toast, Switch, List, ListItem, Left, Body, Right, Thumbnail, Icon, Textarea,Label } from 'native-base';
import ImagePicker  from 'react-native-image-picker';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import OptionsMenu from "react-native-options-menu";
import DateTimePicker from 'react-native-modal-datetime-picker';
import HeaderScreen from './HeaderScreen';
import Documents from '../components/Documents';
import FloatingLabelInput from '../components/FloatingLabelInput';
const { width, height } = Dimensions.get('window');
import {scale} from '../global'; 

let back_arrow = require('../assets/icons/arrow_left.png');

class ProfileScreen extends Component {
  constructor(props){
      super(props);
       this.state = {
        firstname: '',
        lastname: '',
        error: null,
        loading: false,
        avatarSource: null,
        videoSource: null,
        certificates: [
            {
                name: 'certificate1.jpg',
                image: require('../images/documents/cert1.png')
            },
            {
              name: 'certificate2.jpg',
              image: require('../images/documents/cert2.png')
            }
        ],
        works: [
              {
                name: 'work1.jpg',
                image: require('../images/documents/work1.png')
             },
            {
              name: 'work2.jpg',
              image: require('../images/documents/work2.png')
             }
        ],
        ids: [
              {
                name: 'id1.jpg',
                image: require('../images/documents/id1.png')
              }
          ],
         videos: [
            {
              name: 'video1.jpg',
              image: require('../images/documents/video1.png')
            },
            {
              name: 'video2.jpg',
              image: require('../images/documents/video2.png')
            }
        ],
        websites: [
          {
            name: 'video1.jpg',
            image: require('../images/documents/website1.png')
          },
        ],
        profiles: [
            {
              name: 'profile1.jpg',
              image: require('../images/documents/profile1.png')
            },
          ],
          isDateTimePickerVisible: false
      };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
    this.offset = 0;
  }


  state={
     qwerty:''
  }

 

    focusNextField(id) {
        this.inputs[id]._root.focus();
    }


    

     handleSubmit = async () => {
        this.props.navigation.navigate('home');

   }

   handleError(error){
     Toast.show({
               text: error,
               buttonText: "Okay",
               type: "danger"
         })
   }


   selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }


  selectDocumentTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

      
      }
    });
  }

  selectVideoTapped() {
    const options = {
      title: 'Video Picker',
      takePhotoButtonTitle: 'Take Video...',
      mediaType: 'video',
      videoQuality: 'medium'
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled video picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        this.setState({
          videoSource: response.uri
        });
      }
    });
  }



  async openAndroidDatePicker() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      });
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
  



  async openIosDatePicker() {
    try {
      const {action, year, month, day} = await DatePickerIOS.open({
        date: new Date()
      });
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };


    render() {
       let {avatarSource,certificates,works,ids,videos,websites,profiles} = this.state;
   
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
                                       onPress={() => this.props.navigation.navigate('register')}
                                       style={{width : scale(54), height:scale(54), justifyContent:'center', alignItems: 'flex-start'}}>
                                       <Image source={back_arrow} style={{ width: '100%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                   </TouchableOpacity>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:scale(54)}}>

                               </View>
                               }
                               right={
                                   <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>

                                   </View>
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between"}}>
                              <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(33),paddingLeft:scale(20),paddingBottom:scale(20)}}>User Profile</Text> 
                      </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                            <ScrollView
                             >
              <View style={styles.container}>
              <View style={{backgroundColor:'rgb(249, 252, 255)',paddingHorizontal:scale(20),justifyContent:'space-between'}}>
                <View style={styles.logoContainer}>
                      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                        <View style={styles.imgsView}>
                        {
                            (avatarSource)?(
                               <View style={[styles.user_placeholder,{backgroundColor:'rgb(249, 252, 255)'}]}>
                                <Image source={avatarSource} style={{width:'100%',height:'100%',borderRadius:scale(70)}}/>
                               </View>
                            ):(
                              <View  style={[styles.user_placeholder,{backgroundColor:'rgb(229, 239, 252)'}]}>
                              <Image source={require('../images/user_placeholder.png')}  style={{width:scale(100),height:scale(120),marginTop:scale(20)}}/>
                             </View>
                            )
                        }
                            <View  style={[styles.camera_icon,{backgroundColor:'rgb(62, 136, 235)'}]}>
                                <Image  source={require('../images/camera.png')}/>
                            </View>
                        </View>
                      </TouchableOpacity>
                </View>
                <View style={{flex:6,justifyContent:'space-between',marginVertical:scale(30)}}>
                <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                  <View style={{width:'50%',paddingRight:scale(10)}}>
                  <FloatingLabelInput
                            testID='firstname'
                            label="First Name"
                            value={this.state.firstname}
                            autoCapitalize='none'
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['firstname'] = input;
                            }}
                            onChangeText={firstname => this.setState({ firstname })}
                            />
                  </View>
                  <View style={{width:'50%',paddingLeft:scale(10)}}>
                  <FloatingLabelInput
                            testID='lastname' 
                            label="Last Name"
                            value={this.state.lastname}
                            autoCapitalize='none'
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['lastname'] = input;
                            }}
                            onChangeText={lastname => this.setState({ lastname })}
                            />
                  </View>
                </View>

                <TouchableOpacity
                   style={styles.inputField}
                 //  onPress={()=> Platform.OS == 'ios' ? this.openIosDatePicker() :  this.openAndroidDatePicker()}
                   onPress={this._showDateTimePicker}
                 >
                <FloatingLabelInput
                            testID='dob' 
                            label="Date of Birth"
                            value={this.state.dob}
                            onFocus={ this._showDateTimePicker }
                            autoCapitalize='none'
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['dob'] = input;
                            }}
                            onChangeText={dob => this.setState({ dob })}
                            />
                </TouchableOpacity>
                <Text style={{fontFamily:'Montserrat-Medium',color:'#CCCCCC',fontSize:scale(13)}} >This information is not shared with other users.</Text>
                <View style={styles.inputField}>
                <FloatingLabelInput
                            testID='address' 
                            label="Street Address"
                            value={this.state.address}
                            autoCapitalize='none'
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['address'] = input;
                            }}
                            onChangeText={address => this.setState({ address })}
                            />
                </View>


                <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                  <View style={{width:'50%',paddingRight:scale(10)}}>
                  <FloatingLabelInput
                            testID='city' 
                            label="City"
                            value={this.state.city}
                            autoCapitalize='none'
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['city'] = input;
                            }}
                            onChangeText={city => this.setState({ city })}
                            />
                  </View>
                  <View style={{width:'50%',paddingLeft:scale(10)}}>
                  <FloatingLabelInput
                            testID='state' 
                            label="State"
                            value={this.state.state}
                            autoCapitalize='none'
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['state'] = input;
                            }}
                            onChangeText={state => this.setState({ state })}
                            />
                  </View>
                </View>
                 <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                  <View style={{width:'50%',paddingRight:scale(10)}}>
                  <FloatingLabelInput
                            testID='zip' 
                            label="Zip Code"
                            value={this.state.zip}
                            autoCapitalize='none'
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['zip'] = input;
                            }}
                            onChangeText={zip => this.setState({ zip })}
                            />
                  </View>
                  <View style={{width:'50%',paddingLeft:scale(10)}}>
                   <FloatingLabelInput
                            testID='country'
                            label="Country"
                            value={this.state.country}
                            autoCapitalize='none'
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['country'] = input;
                            }}
                            onChangeText={country => this.setState({ country })}
                            />
                  </View>
                </View>
                <View style={[styles.servicesBox,{flexDirection:'row'}]}>
                  <View style={{flex: 2}}><Text style={{color:'#3E85EF',fontFamily:'Montserrat-Medium',fontSize: scale(16),lineHeight:scale(23)}}>Do you want to be a service provider?</Text></View>
                  <View style={{flex: 1,flexDirection: 'row', justifyContent:'flex-end',alignItems:'center'}}><Switch value={true} style={styles.switch}/></View>
              </View>


            <View style={styles.servicesBox}>
                 <Text style={styles.textStyle}>Select the services you will provide</Text>
                 <View style={{paddingBottom:scale(20)}}>
                    <View style={{flex:1,flexDirection:'row',paddingVertical:scale(10)}}>
                    <View style={{flex:1.5}}>
                        <Text style={{fontFamily:'Montserrat-Regular',fontSize:scale(16)}}>Waiter</Text>
                          <View style={{flexDirection:'row',paddingVertical:scale(3),justifyContent:'space-between'}}><Text note style={{fontFamily:'Montserrat-Medium',color:'#9B9B9B',fontSize:scale(15),marginTop:scale(4)}}>Satus: Active </Text><Switch value={true} style={styles.miniSwitch}/></View>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                        <OptionsMenu
                          button={ require('../assets/icons/eclipse_blue.png')}
                          buttonStyle={{ width: scale(15), height: scale(15), margin: 7.5, resizeMode: "contain" }}
                          destructiveIndex={1}
                          options={["Edit", "Delete"]}
                          actions={[()=>console.log('Edit'),()=> console.log('Delete'),()=>console.log('Cancel')]}/>
                    </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',paddingVertical:scale(10)}}>
                    <View style={{flex:1.5}}>
                    <Text style={{fontFamily:'Montserrat-Regular',fontSize:scale(16)}}>Painting</Text>
                        <View style={{flexDirection:'row',paddingVertical:scale(3),justifyContent:'space-between'}}><Text note style={{fontFamily:'Montserrat-Medium',color:'#9B9B9B',fontSize:scale(15),marginTop:scale(4)}}>Satus: Active </Text><Switch value={true} style={styles.miniSwitch}/></View>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                        <OptionsMenu
                              button={ require('../assets/icons/eclipse_blue.png')}
                              buttonStyle={{ width: scale(15), height: scale(15), margin: scale(7.5), resizeMode: "contain" }}
                              destructiveIndex={1}
                              options={["Edit", "Delete"]}
                              actions={[()=>console.log('Edit'),()=> console.log('Delete'),()=>console.log('Cancel')]}/>
                    </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',paddingVertical:10}}>
                    <View style={{flex:1.5}}>
                    <Text style={{fontFamily:'Montserrat-Regular',fontSize:scale(16)}}>Dog Walking</Text>
                        <View style={{flexDirection:'row',paddingVertical:scale(3),justifyContent:'space-between'}}><Text note style={{fontFamily:'Montserrat-Medium',color:'#9B9B9B',fontSize:scale(15),marginTop:scale(4)}}>Satus: Active </Text><Switch value={true} style={styles.miniSwitch}/></View>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                        <OptionsMenu
                              button={ require('../assets/icons/eclipse_blue.png')}
                              buttonStyle={{ width: scale(15), height: scale(15), margin: scale(7.5), resizeMode: "contain" }}
                              destructiveIndex={1}
                              options={["Edit", "Delete"]}
                              actions={[()=>console.log('Edit'),()=> console.log('Delete'),()=>console.log('Cancel')]}/>
                    </View>
                    </View>
                </View>
                <View style={{justifyContent: "center" ,marginBottom:scale(20),marginTop:scale(10)}}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('addServiceCatScreen',{mainScreen: 'profile'})}}>
                <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F2F2F2', '#CCCCCC']} style={styles.button}>
                       <Text style={[styles.btnText,{fontFamily:'Montserrat-Regular',color:'black'}]}>ADD SERVICES</Text>
                    </LinearGradient>
               </TouchableOpacity>
                </View>
            </View>
              {/* Upload Certificates starts here */ }
              <View style={styles.servicesBox}>
              <View style={{marginVertical:scale(20)}}>
              <FloatingLabelInput
                            testID='about'
                            label="Write about yourself"
                            value={this.state.about}
                            multiline={true}
         
                            numberOfLines={8}
                            autoCapitalize='none'
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['about'] = input;
                            }}
                            onChangeText={about => this.setState({ about })}
                            />
                  </View>
                <View style={{flexDirection: 'row',alignItems:'center',marginVertical:scale(20)}}>
                    <Text style={styles.textStyle}>Upload Certificates</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={certificates} placeholder={true} addDocument={this.selectDocumentTapped.bind(this)}/>
                </View>
             </View>
              {/* Upload Certificates ends here */ }
              {/* Upload Pics starts here */ }
             <View style={styles.servicesBox}>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                    <Text style={styles.textStyle}>Upload Pics of Work</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents  documents={works} placeholder={true} addDocument={this.selectDocumentTapped.bind(this)}/>
                </View>
             </View>
              {/* Upload Pics ends here */}
             {/* Upload Id starts here */ }
          <View style={styles.servicesBox}>
                <View >
                    <Text style={[styles.textStyle,{paddingBottom:0}]}>Upload ID</Text>
                    <Text style={{fontSize:scale(13),color:'#CCCCCC',marginVertical:scale(10),fontFamily:'Montserrat-Medium'}}>Being ID verified can get you more jobs. This info is not shared with other users.</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={ids}  placeholder={true}  addDocument={this.selectDocumentTapped.bind(this)}/>
                </View>
             </View>
              {/* Upload Id ends here */}
           {/* Upload Video starts here */ }
           <View style={styles.servicesBox}>
                <View>
                    <Text style={styles.textStyle}>Add Video Link</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={videos} placeholder={true} addDocument={this.selectDocumentTapped.bind(this)}/>
                </View>
             </View>
              {/* Upload Video ends here */}
             {/* Upload Website starts here */ }
           <View style={styles.servicesBox}>
                <View >
                    <Text style={styles.textStyle}>Add Website Link</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={websites} placeholder={true} addDocument={this.selectDocumentTapped.bind(this)}/>
                </View>
             </View>
              {/* Upload Website ends here */}
          {/* Upload Linkedin starts here */ }
           <View style={styles.servicesBox}>
                <View>
                    <Text style={styles.textStyle}>Add Linkedin Profile Link</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={profiles} placeholder={true} addDocument={this.selectDocumentTapped.bind(this)}/>
                </View>
             </View>
            {/* Upload Website ends here */}
            <View style={{justifyContent: "center" ,marginBottom:scale(20),marginTop:scale(10)}}>
            <TouchableOpacity 
                testID='signUpButton'
                onPress={() => {this.props.navigation.navigate('home')}}>
                <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                      <Text style={styles.btnText}>SIGN UP</Text>
                    </LinearGradient>
              </TouchableOpacity>
            </View>
                </View>
              </View>
               </View>
               </ScrollView>

                       </View>
               </LinearGradient>
               <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
            />
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
      fontFamily: 'Montserrat-Bold',
    },
    inputLabel: {
       textAlign:'left',
       fontSize: scale(16),
       fontFamily:'Montserrat-Light'
    },
    inputField: {
        marginVertical: scale(10)
    },
    borderImg: {width:width,height:scale(40),bottom:scale(-10),position:'absolute'},
    text: {
      marginBottom: scale(15),
      marginTop: scale(15),
      fontSize: scale(15),
      textAlign: 'center',
    },
    button:{
      backgroundColor:'#4A4A4A',
      width: '100%',
      borderRadius:scale(30),
      marginTop:scale(10),
      paddingTop:scale(16),
      paddingBottom:scale(16),
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
  },
  btnText: {
      textAlign:'center',
      color:'white',
      fontSize:scale(18),
      fontFamily:'Montserrat-Bold'
  },
    socialBox:{
      flexDirection:'row',
      backgroundColor:'white',
      borderRadius:scale(20),
      elevation: 3,
    },
    logoContainer: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imgsView: {
      flex: 1,
      padding:scale(10),
      position: 'relative',
      top: 0,
      left: 0
    },
    user_placeholder: {
      width: scale(140),
      height: scale(140),
      borderRadius:scale(70),
      justifyContent:'center',
      alignItems:'center',
    },
    camera_icon: {
      width: scale(40),
      height: scale(40),
      borderRadius:scale(20),
      position: 'absolute',
      bottom: scale(10),
      right: scale(10),
      justifyContent:'center',
      alignItems:'center',
    },
 servicesBox: {
    flex: 1,
    marginTop: scale(20),
    paddingVertical: scale(25),
    paddingHorizontal:scale(20),
    borderRadius:scale(10),
    backgroundColor:'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
},
textStyle: {
  fontFamily:"Montserrat-SemiBold",
  fontSize: scale(16),
  paddingBottom:scale(20)
},
miniSwitch: {
  transform: Platform.OS === 'ios' ? [{ scaleX: .6 }, { scaleY: .6 }] : [{ scaleX: .6}, { scaleY: .6 }]
},
switch: {
  transform: Platform.OS === 'ios' ? [{ scaleX: .9 }, { scaleY: .9 }] : [{ scaleX: .8 }, { scaleY: .8 }]
},
})

export default ProfileScreen;
