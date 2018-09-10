import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity,TouchableHighlight, Image, ScrollView,Platform,Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {  Item, Input, Toast, Switch, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, Textarea,Label } from 'native-base';
import ImagePicker  from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import Documents from '../components/Documents';
import Header from '../components/Header';

const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

let back_arrow = require('../assets/icons/back-arrow.png');

import * as actions from '../actions';

class ProfileScreen extends Component {
  constructor(props) {
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
      };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }


  componentDidMount(){
     console.log('login screen is called ...');
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
        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={{flex:1}}>
              <Header
              navigation={this.props.navigation}
              left = {
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                  style={{width : 54, height:54, justifyContent:'center', alignItems: 'center'}}>
                  <Image source={back_arrow} style={{ width: '100%', height: 25}} resizeMode="contain" resizeMethod="resize"/>
                </TouchableOpacity>
              }
              title={
                <View></View>
              }
              right={
                <View></View>
              }
              />
              <ScrollView >
              <View style={styles.container}>   
      

              <View style={{position:'relative'}}>
                 <View style={{paddingTop:20,paddingBottom:40,paddingLeft:10}}><Text style={styles.logoText}>User Profile</Text></View>
                 <Image style={styles.borderImg} source={require('../images/border_img.png')}/>
              </View>  
              <View style={{backgroundColor:'rgb(249, 252, 255)',paddingHorizontal:10, paddingVertical:30,justifyContent:'space-between'}}>
                <View style={styles.logoContainer}>
                      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                        <View style={styles.imgsView}>
                        {
                            (avatarSource)?(
                               <View style={[styles.user_placeholder,{backgroundColor:'rgb(249, 252, 255)'}]}>
                                <Image source={avatarSource} />
                               </View> 
                            ):(
                              <View  style={[styles.user_placeholder,{backgroundColor:'rgb(229, 239, 252)'}]}>
                              <Image source={require('../images/user_placeholder.png')} />
                             </View>  
                            )
                        }
                            <View  style={[styles.camera_icon,{backgroundColor:'rgb(62, 136, 235)'}]}>
                                <Image  source={require('../images/camera.png')} />
                            </View>
                        </View>  
                      </TouchableOpacity>
                </View>  
                <View style={{flex:6,justifyContent:'space-between',marginVertical:30}}>
                <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                  <View style={{width:'50%',paddingRight:10}}>
                  <Item floatingLabel>
                    <Label style={styles.inputLabel}>First Name</Label>
                    <Input
                        value={this.state.username}
                        autoCapitalize='none'
                        onSubmitEditing={() => {
                          this.focusNextField('password');
                        }}
                        returnKeyType={ "next" }
                        ref={ input => {
                          this.inputs['username'] = input;
                        }}
                        onChangeText={username => this.setState({ username })}
                        />
                  </Item>
                  </View>
                  <View style={{width:'50%',paddingLeft:10}}>
                  <Item floatingLabel>
                  <Label style={styles.inputLabel}>Last Name</Label>
                  <Input
                      value={this.state.username}
                      autoCapitalize='none'
                      onSubmitEditing={() => {
                        this.focusNextField('password');
                      }}
                      returnKeyType={ "next" }
                      ref={ input => {
                        this.inputs['username'] = input;
                      }}
                      onChangeText={username => this.setState({ username })}
                      />
                 </Item>
                  </View>
                </View>

                <View style={styles.inputField}>
                <Item floatingLabel>
                  <Label style={styles.inputLabel}>Date of Birth</Label>
                  <Input
                      value={this.state.username}
                      autoCapitalize='none'
                      onSubmitEditing={() => {
                        this.focusNextField('password');
                      }}
                      returnKeyType={ "next" }
                      ref={ input => {
                        this.inputs['username'] = input;
                      }}
                      onChangeText={username => this.setState({ username })}
                      />
                 </Item>
                </View>
                <View style={styles.inputField}>
                <Item floatingLabel>
                  <Label style={styles.inputLabel}>Street Address</Label>
                  <Input
                      value={this.state.username}
                      autoCapitalize='none'
                      onSubmitEditing={() => {
                        this.focusNextField('password');
                      }}
                      returnKeyType={ "next" }
                      ref={ input => {
                        this.inputs['username'] = input;
                      }}
                      onChangeText={username => this.setState({ username })}
                      />
                 </Item>
                </View>
  
    
                <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                  <View style={{width:'50%',paddingRight:10}}>
                  <Item floatingLabel>
                    <Label style={styles.inputLabel}>City</Label>
                    <Input
                        value={this.state.username}
                        autoCapitalize='none'
                        onSubmitEditing={() => {
                          this.focusNextField('password');
                        }}
                        returnKeyType={ "next" }
                        ref={ input => {
                          this.inputs['username'] = input;
                        }}
                        onChangeText={username => this.setState({ username })}
                        />
                  </Item>
                  </View>
                  <View style={{width:'50%',paddingLeft:10}}>
                  <Item floatingLabel>
                  <Label style={styles.inputLabel}>State (Optional)</Label>
                  <Input
                      value={this.state.username}
                      autoCapitalize='none'
                      onSubmitEditing={() => {
                        this.focusNextField('password');
                      }}
                      returnKeyType={ "next" }
                      ref={ input => {
                        this.inputs['username'] = input;
                      }}
                      onChangeText={username => this.setState({ username })}
                      />
                 </Item>
                  </View>
                </View>

                 <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                  <View style={{width:'50%',paddingRight:10}}>
                  <Item floatingLabel>
                    <Label style={styles.inputLabel}>Zip</Label>
                    <Input
                        value={this.state.username}
                        autoCapitalize='none'
                        onSubmitEditing={() => {
                          this.focusNextField('password');
                        }}
                        returnKeyType={ "next" }
                        ref={ input => {
                          this.inputs['username'] = input;
                        }}
                        onChangeText={username => this.setState({ username })}
                        />
                  </Item>
                  </View>
                  <View style={{width:'50%',paddingLeft:10}}>
                  <Item floatingLabel>
                  <Label style={styles.inputLabel}>Country</Label>
                  <Input
                      value={this.state.username}
                      autoCapitalize='none'
                      onSubmitEditing={() => {
                        this.focusNextField('password');
                      }}
                      returnKeyType={ "next" }
                      ref={ input => {
                        this.inputs['username'] = input;
                      }}
                      onChangeText={username => this.setState({ username })}
                      />
                 </Item>
                  </View>
                </View>
                <View style={[styles.servicesBox,{flexDirection:'row'}]}>
                  <View style={{flex: 1}}><Text style={{color:'#3E85EF',fontWeight:'bold',fontSize: 17}}>Do you want to be a Service Provider</Text></View>
                  <View style={{flex: 1,flexDirection: 'row', justifyContent:'flex-end'}}><Text style={{paddingRight:10}}>Yes</Text><Switch value={true} style={styles.switch}/></View>
              </View>  


            <View style={styles.servicesBox}>
                 <Text style={styles.textStyle}>Select which services you want to provide</Text>
                 <List style={{paddingTop:20,paddingBottom:20}}>
                    <ListItem>
                    <Body>
                        <Text>Waiter</Text>
                          <View style={{flexDirection:'row'}}><Text note style={{fontWeight:'bold',color:'rgb(169,169,169)'}}>Satus: Active </Text><Switch value={true} style={{ transform: [{ scaleX: .4 }, { scaleY: .4 }]}}/></View>   
                    </Body>
                    <Right>
                         <Icon style={{color:'#3E85EF'}} active name="md-more" />
                    </Right>
                    </ListItem>
                    <ListItem>
                    <Body>
                        <Text>Painting</Text>
                        <View style={{flexDirection:'row'}}><Text note style={{fontWeight:'bold',color:'rgb(169,169,169)'}}>Satus: Active </Text><Switch value={true} style={{ transform: [{ scaleX: .4 }, { scaleY: .4 }]}}/></View>   
                    </Body>
                    <Right>
                         <Icon style={{color:'#3E85EF'}} active name="md-more" />
                    </Right>
                    </ListItem>
                    <ListItem>
                    <Body>
                        <Text>Dog Walking</Text>
                        <View style={{flexDirection:'row'}}><Text note style={{fontWeight:'bold',color:'rgb(169,169,169)'}}>Satus: Active </Text><Switch value={true} style={{ transform: [{ scaleX: .4 }, { scaleY: .4 }]}}/></View>   
                    </Body>
                    <Right>
                         <Icon style={{color:'#3E85EF'}} active name="md-more" />
                    </Right>
                    </ListItem>
                </List>
                <View style={{justifyContent: "center" ,marginBottom:20,marginTop:10}}>
                <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                       <TouchableOpacity onPress={() => {this.props.navigation.navigate('addServiceCatScreen')}}><Text style={styles.btnText}>ADD MORE SERVICES</Text></TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>  
              {/* Upload Certificates starts here */ }
              <View style={styles.servicesBox}>
              <View style={{marginVertical:20}}>
                  <Item floatingLabel>
                  <Label style={styles.inputLabel}>Write about your self</Label>
                  <Input
                      value={this.state.username}
                      autoCapitalize='none'
                      onSubmitEditing={() => {
                        this.focusNextField('password');
                      }}
                      returnKeyType={ "next" }
                      ref={ input => {
                        this.inputs['username'] = input;
                      }}
                      onChangeText={username => this.setState({ username })}
                      />
                 </Item>
                  </View>
                <View style={{flexDirection: 'row',alignItems:'center',marginVertical:20}}>
                    <Text style={styles.textStyle}>Upload Certificates</Text>
                </View>  
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={certificates}/>
                </View> 
             </View>   
              {/* Upload Certificates ends here */ } 
              {/* Upload Pics starts here */ }
             <View style={styles.servicesBox}>
                <View style={{flexDirection: 'row',alignItems:'center',marginVertical:20}}>
                    <Text style={styles.textStyle}>Upload Pics of Work</Text>
                </View>  
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents  documents={works}/>
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
                   <Documents documents={ids}/>
                </View> 
             </View>   
              {/* Upload Id ends here */}
           {/* Upload Video starts here */ }
           <View style={styles.servicesBox}>
                <View style={{marginVertical:20}}>
                    <Text style={styles.textStyle}>Add Video Link</Text>
                </View>  
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={videos}/>
                </View> 
             </View>   
              {/* Upload Video ends here */}
             {/* Upload Website starts here */ }
           <View style={styles.servicesBox}>
                <View style={{marginVertical:20}}>
                    <Text style={styles.textStyle}>Add Video Link</Text>
                </View>  
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={websites}/>
                </View> 
             </View>   
              {/* Upload Website ends here */}
          {/* Upload Linkedin starts here */ }
           <View style={styles.servicesBox}>
                <View style={{marginVertical:20}}>
                    <Text style={styles.textStyle}>Add Linkedin Profile Link</Text>
                </View>  
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents documents={profiles}/>
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
               </LinearGradient>
      );
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
      borderWidth: 1,
      borderColor: '#fff',
      marginTop:10,
      paddingTop:16,
      paddingBottom:16,
  },
  btnText: { 
      textAlign:'center',
      color:'white',
      fontSize: 16,
      fontWeight:'bold'
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
      paddingTop:20,
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
    elevation: 1,
},
textStyle: {
  fontFamily:"Montserrat-Bold",
  fontWeight:'bold'
}

      
})

export default connect(null, actions)(ProfileScreen);
