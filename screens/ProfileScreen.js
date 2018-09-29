import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text, Dimensions, Platform,
    ScrollView
} from 'react-native';

import {  Item, Input, Toast, Switch, List, ListItem, Left, Body, Right, Thumbnail, Icon, Textarea,Label } from 'native-base';
import ImagePicker  from 'react-native-image-picker';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import OptionsMenu from "react-native-options-menu";
import HeaderScreen from './HeaderScreen';
import Documents from '../components/Documents';
import FloatingLabelInput from '../components/FloatingLabelInput';
const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

let back_arrow = require('../assets/icons/back-arrow.png');

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
          ]
      };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
    this.offset = 0;
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
                                       style={{width : 54, height:54, justifyContent:'center', alignItems: 'flex-start'}}>
                                       <Image source={back_arrow} style={{ width: '100%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                   </TouchableOpacity>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:54}}>

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
                              <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 33,paddingLeft:20,paddingBottom:20}}>User Profile</Text> 
                                 {/* <Animated.View
                                  style={
                                    {
                                      paddingHorizontal: screenWidth * 0.05,
                                      width: screenWidth,
                                      height: scrollOffset.interpolate({
                                        inputRange: [0, 20],
                                        outputRange: [60, 0],
                                        extrapolate: 'clamp',
                                      }),
                                    }
                                }>
                                  <Animated.Text
                                    onLayout={e => {
                                      if (this.offset === 0 && this.state.titleWidth === 0) {
                                        const titleWidth = e.nativeEvent.layout.width;
                                        this.setState({ titleWidth });
                                      }
                                    }}
                                    style={{
                                      fontFamily: 'Montserrat-Bold', 
                                      color:"#fff", 
                                      fontSize: 33,
                                      paddingLeft:  scrollOffset.interpolate({
                                        inputRange: [0, 20],
                                        outputRange: [0, 50],
                                        extrapolate: 'clamp',
                                      }),
                                      paddingBottom: scrollOffset.interpolate({
                                        inputRange: [0, 20],
                                        outputRange: [20, 0],
                                        extrapolate: 'clamp',
                                      }),
                                      fontSize: scrollOffset.interpolate({
                                        inputRange: [0, 20],
                                        outputRange: [33, 20],
                                        extrapolate: 'clamp',
                                      }),
                                      marginTop: scrollOffset.interpolate({
                                        inputRange: [0, 20],
                                        outputRange: [0, -40],
                                        extrapolate: 'clamp',
                                      }),
                                    }}>
                                    <Text style={{ }}>User Profile</Text> 
                                  </Animated.Text>
                                  <Animated.View
                                    style={{
                                      width: scrollOffset.interpolate({
                                        inputRange: [0, 100],
                                        outputRange: [screenWidth * 0.9 - this.state.titleWidth, 0],
                                        extrapolate: 'clamp',
                                      }),
                                    }}
                                  />
                                </Animated.View> */}
                      </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                            <ScrollView
                             >
              <View style={styles.container}>
              <View style={{backgroundColor:'rgb(249, 252, 255)',paddingHorizontal:20,justifyContent:'space-between'}}>
                <View style={styles.logoContainer}>
                      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                        <View style={styles.imgsView}>
                        {
                            (avatarSource)?(
                               <View style={[styles.user_placeholder,{backgroundColor:'rgb(249, 252, 255)'}]}>
                                <Image source={avatarSource} style={{width:'100%',height:'100%',borderRadius:70}}/>
                               </View>
                            ):(
                              <View  style={[styles.user_placeholder,{backgroundColor:'rgb(229, 239, 252)'}]}>
                              <Image source={require('../images/user_placeholder.png')}  style={{width:'100%',height:'100%',borderRadius:70}}/>
                             </View>
                            )
                        }
                            <View  style={[styles.camera_icon,{backgroundColor:'rgb(62, 136, 235)'}]}>
                                <Image  source={require('../images/camera.png')}/>
                            </View>
                        </View>
                      </TouchableOpacity>
                </View>
                <View style={{flex:6,justifyContent:'space-between',marginVertical:30}}>
                <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                  <View style={{width:'50%',paddingRight:10}}>
                  <FloatingLabelInput
                            label="First Name"
                            value={this.state.firstname}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['firstname'] = input;
                            }}
                            onChangeText={firstname => this.setState({ firstname })}
                            />
                  </View>
                  <View style={{width:'50%',paddingLeft:10}}>
                  <FloatingLabelInput
                            label="Last Name"
                            value={this.state.lastname}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['lastname'] = input;
                            }}
                            onChangeText={lastname => this.setState({ lastname })}
                            />
                  </View>
                </View>

                <View style={styles.inputField}>
                <FloatingLabelInput
                            label="Date of Birth"
                            value={this.state.dob}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['dob'] = input;
                            }}
                            onChangeText={dob => this.setState({ dob })}
                            />
                </View>
                <Text style={{fontFamily:'Montserrat-Medium',color:'rgb(219,220,221)',fontSize:13}} >This information is not shared with other users.</Text>
                <View style={styles.inputField}>
                <FloatingLabelInput
                            label="Street Address"
                            value={this.state.address}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['address'] = input;
                            }}
                            onChangeText={address => this.setState({ address })}
                            />
                </View>


                <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                  <View style={{width:'50%',paddingRight:10}}>
                  <FloatingLabelInput
                            label="City"
                            value={this.state.city}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['city'] = input;
                            }}
                            onChangeText={city => this.setState({ city })}
                            />
                
                  </View>
                  <View style={{width:'50%',paddingLeft:10}}>
                  <FloatingLabelInput
                            label="State"
                            value={this.state.state}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['state'] = input;
                            }}
                            onChangeText={state => this.setState({ state })}
                            />
                  </View>
                </View>

                 <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                  <View style={{width:'50%',paddingRight:10}}>
                  <FloatingLabelInput
                            label="Zip"
                            value={this.state.zip}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['zip'] = input;
                            }}
                            onChangeText={zip => this.setState({ zip })}
                            />
                  </View>
                  <View style={{width:'50%',paddingLeft:10}}>
                   <FloatingLabelInput
                            label="Country"
                            value={this.state.country}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['country'] = input;
                            }}
                            onChangeText={country => this.setState({ country })}
                            />
                  </View>
                </View>
                <View style={[styles.servicesBox,{flexDirection:'row'}]}>
                  <View style={{flex: 2}}><Text style={{color:'#3E85EF',fontFamily:'Montserrat-Medium',fontSize: 16,lineHeight:23}}>Do you want to be a service Provider?</Text></View>
                  <View style={{flex: 1,flexDirection: 'row', justifyContent:'flex-end'}}><Switch value={true} style={styles.switch}/></View>
              </View>


            <View style={styles.servicesBox}>
                 <Text style={styles.textStyle}>Select the services you will provide</Text>
                 <View style={{paddingTop:20,paddingBottom:20}}>
                    <View style={{flex:1,flexDirection:'row',paddingVertical:10}}>
                    <View style={{flex:1}}>
                        <Text style={{fontFamily:'Montserrat-Regular',fontSize:16}}>Waiter</Text>
                          <View style={{flexDirection:'row',paddingVertical:3,justifyContent:'space-between'}}><Text note style={{fontFamily:'Montserrat-Medium',color:'rgb(169,169,169)',fontSize:14}}>Satus: Active </Text><Switch value={true} style={styles.miniSwitch}/></View>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                        <OptionsMenu
                          button={ require('../assets/icons/eclipse.png')}
                          buttonStyle={{ width: 15, height: 15, margin: 7.5, resizeMode: "contain" }}
                          destructiveIndex={1}
                          options={["Edit", "Delete", "Cancel"]}
                          actions={[()=>console.log('Edit'),()=> console.log('Delete'),()=>console.log('Cancel')]}/>
                    </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',paddingVertical:10}}>
                    <View style={{flex:1}}>
                    <Text style={{fontFamily:'Montserrat-Regular',fontSize:16}}>Painting</Text>
                        <View style={{flexDirection:'row',paddingVertical:3,justifyContent:'space-between'}}><Text note style={{fontFamily:'Montserrat-Medium',color:'rgb(169,169,169)',fontSize:14}}>Satus: Active </Text><Switch value={true} style={styles.miniSwitch}/></View>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                        <OptionsMenu
                              button={ require('../assets/icons/eclipse.png')}
                              buttonStyle={{ width: 15, height: 15, margin: 7.5, resizeMode: "contain" }}
                              destructiveIndex={1}
                              options={["Edit", "Delete", "Cancel"]}
                              actions={[()=>console.log('Edit'),()=> console.log('Delete'),()=>console.log('Cancel')]}/>
                    </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',paddingVertical:10}}>
                    <View style={{flex:1}}>
                    <Text style={{fontFamily:'Montserrat-Regular',fontSize:16}}>Dog Walking</Text>
                        <View style={{flexDirection:'row',paddingVertical:3,justifyContent:'space-between'}}><Text note style={{fontFamily:'Montserrat-Medium',color:'rgb(169,169,169)',fontSize:14}}>Satus: Active </Text><Switch value={true} style={styles.miniSwitch}/></View>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                        <OptionsMenu
                              button={ require('../assets/icons/eclipse.png')}
                              buttonStyle={{ width: 15, height: 15, margin: 7.5, resizeMode: "contain" }}
                              destructiveIndex={1}
                              options={["Edit", "Delete", "Cancel"]}
                              actions={[()=>console.log('Edit'),()=> console.log('Delete'),()=>console.log('Cancel')]}/>
                    </View>
                    </View>
                </View>
                <View style={{justifyContent: "center" ,marginBottom:20,marginTop:10}}>
                <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                       <TouchableOpacity onPress={() => {this.props.navigation.navigate('addServiceCatScreen')}}><Text style={styles.btnText}>ADD MORE SERVICES</Text></TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
              {/* Upload Certificates starts here */ }
              <View style={styles.servicesBox}>
              <View style={{marginVertical:20}}>
              <FloatingLabelInput
                            label="Write about your self"
                            value={this.state.about}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['about'] = input;
                            }}
                            onChangeText={about => this.setState({ about })}
                            />
                  </View>
                <View style={{flexDirection: 'row',alignItems:'center',marginVertical:20}}>
                    <Text style={styles.textStyle}>Upload Certificates</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={certificates} placeholder={true}/>
                </View>
             </View>
              {/* Upload Certificates ends here */ }
              {/* Upload Pics starts here */ }
             <View style={styles.servicesBox}>
                <View style={{flexDirection: 'row',alignItems:'center',marginVertical:20}}>
                    <Text style={styles.textStyle}>Upload Pics of Work</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents  documents={works} placeholder={true}/>
                </View>
             </View>
              {/* Upload Pics ends here */}
             {/* Upload Id starts here */ }
          <View style={styles.servicesBox}>
                <View style={{marginVertical:20}}>
                    <Text style={styles.textStyle}>Upload ID</Text>
                    <Text style={{fontSize:13,marginVertical:10,fontFamily:'Montserrat-Light'}}>Being ID verified can get you more jobs. This info is not shared with other users.</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={ids}  placeholder={true}/>
                </View>
             </View>
              {/* Upload Id ends here */}
           {/* Upload Video starts here */ }
           <View style={styles.servicesBox}>
                <View style={{marginVertical:20}}>
                    <Text style={styles.textStyle}>Add Video Link</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={videos} placeholder={true}/>
                </View>
             </View>
              {/* Upload Video ends here */}
             {/* Upload Website starts here */ }
           <View style={styles.servicesBox}>
                <View style={{marginVertical:20}}>
                    <Text style={styles.textStyle}>Add Video Link</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={websites} placeholder={true}/>
                </View>
             </View>
              {/* Upload Website ends here */}
          {/* Upload Linkedin starts here */ }
           <View style={styles.servicesBox}>
                <View style={{marginVertical:20}}>
                    <Text style={styles.textStyle}>Add Linkedin Profile Link</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={profiles} placeholder={true}/>
                </View>
             </View>
            {/* Upload Website ends here */}
            <View style={{justifyContent: "center" ,marginBottom:20,marginTop:10}}>
                <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                       <TouchableOpacity onPress={() => {this.props.navigation.navigate('home')}}><Text style={styles.btnText}>SIGN UP</Text></TouchableOpacity>
                    </LinearGradient>
            </View>
                </View>
              </View>
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
    inputLabel: {
       textAlign:'left',
       fontSize: 16,
       fontFamily:'Montserrat-Light'
    },
    inputField: {
        marginVertical: 10
    },
    borderImg: {width:width,height:40,bottom:-10,position:'absolute'},
    text: {
      marginBottom: 15,
      marginTop: 15,
      fontSize: 15,
      textAlign: 'center',
    },
    button:{
      backgroundColor:'#4A4A4A',
      width: '100%',
      borderRadius:30,
      marginTop:10,
      paddingTop:16,
      paddingBottom:16,
        shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.2,
       shadowRadius: 2,
       elevation: 3,
  },
  btnText: {
      textAlign:'center',
      color:'white',
      fontSize:18,
      fontFamily:'Montserrat-Bold'
  },
    socialBox:{
      flexDirection:'row',
      backgroundColor:'white',
      borderRadius:20,
      elevation: 3,
    },
    logoContainer: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imgsView: {
      flex: 1,
      padding:10,
      position: 'relative',
      top: 0,
      left: 0
    },
    user_placeholder: {
      width: 140,
      height: 140,
      borderRadius:70,
      justifyContent:'center',
      alignItems:'center',
    },
    camera_icon: {
      width: 40,
      height: 40,
      borderRadius:20,
      position: 'absolute',
      bottom: 10,
      right: 10,
      justifyContent:'center',
      alignItems:'center',
    },
 servicesBox: {
    flex: 1,
    marginVertical: 20,
    paddingVertical: 25,
    paddingHorizontal:20,
    borderRadius:10,
    backgroundColor:'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
},
textStyle: {
  fontFamily:"Montserrat-SemiBold",
  fontSize: 16
},
miniSwitch: {
  transform: Platform.OS === 'ios' ? [{ scaleX: .4 }, { scaleY: .4 }] : [{ scaleX: .6}, { scaleY: .6 }]
},
switch: {
  transform: Platform.OS === 'ios' ? [{ scaleX: .5 }, { scaleY: .5 }] : [{ scaleX: .8 }, { scaleY: .8 }]
},
})

export default ProfileScreen;
