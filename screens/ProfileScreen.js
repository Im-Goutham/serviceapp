import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity,TouchableHighlight, Image, ScrollView,Platform,Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {  Item, Input, Toast, Switch, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, Textarea,Label } from 'native-base';
import ImagePicker  from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import Documents from '../components/Documents';


const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';


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
        videoSource: null};
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
      let {avatarSource} = this.state;  
      return ( 
        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={{flex:1}}>

              <View style={styles.container}>   
              <View style={{justifyContent:'flex-start',paddingHorizontal:10}}>
                 <Icon style={{color:'white'}} active name="ios-arrow-back"  onPress={() => this.props.navigation.goBack()}/>
              </View>
              <ScrollView contentContainerStyle={{
            justifyContent: 'space-between'
        }}>
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
                                <Image source={avatarSource} style={styles.user_placeholder} />
                            ):(
                                <Image source={require('../images/user_placeholder.png')} style={styles.user_placeholder}/>
                            )
                        }
                                <Image  source={require('../images/camera_icon.png')} style={styles.camera_icon}/>
                        </View>  
                      </TouchableOpacity>
                      <View style={{flex: 1,padding:10}}>
                          <Text style={{fontSize: 18,textAlign: 'center'}}>Set Profile Pic</Text>
                      </View> 
                </View>  
                <View style={{flex:6,justifyContent:'space-between',marginVertical:30}}>
                <View style={{width:'100%',flexDirection:'row'}}>
                  <View style={{width:'50%'}}>
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
                  <View style={{width:'50%'}}>
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

                <View>
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
                <View>
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
  
    
                <View style={{width:'100%',flexDirection:'row'}}>
                  <View style={{width:'50%'}}>
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
                  <View style={{width:'50%'}}>
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

    <View style={{width:'100%',flexDirection:'row'}}>
                  <View style={{width:'50%'}}>
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
                  <View style={{width:'50%'}}>
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
                 <Text style={{fontSize: 16,color: 'black',fontWeight:'bold'}}>Select which services you want to provide</Text>
                 <List style={{paddingTop:20,paddingBottom:20}}>
                    <ListItem>
                    <Body>
                        <Text>Waiter</Text>
                          <View style={{flexDirection:'row'}}><Text note style={{fontWeight:'bold',color:'#4d4d4d'}}>Satus: Active </Text><Switch value={true} style={styles.switch}/></View>   
                    </Body>
                    <Right>
                         <Icon style={{color:'#3E85EF'}} active name="md-more" />
                    </Right>
                    </ListItem>
                    <ListItem>
                    <Body>
                        <Text>Painting</Text>
                        <View style={{flexDirection:'row'}}><Text note style={{fontWeight:'bold',color:'#4d4d4d'}}>Satus: Active </Text><Switch value={true} style={styles.switch}/></View>   
                    </Body>
                    <Right>
                         <Icon style={{color:'#3E85EF'}} active name="md-more" />
                    </Right>
                    </ListItem>
                    <ListItem>
                    <Body>
                        <Text>Dog Walking</Text>
                        <View style={{flexDirection:'row'}}><Text note style={{fontWeight:'bold',color:'#4d4d4d'}}>Satus: Active </Text><Switch value={true} style={styles.switch}/></View>   
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
                    <Text style={{fontWeight:'bold'}}>Upload Certificates</Text>
                </View>  
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents/>
                </View> 
             </View>   
              {/* Upload Certificates ends here */ } 
              {/* Upload Pics starts here */ }
             <View style={styles.servicesBox}>
                <View style={{flexDirection: 'row',alignItems:'center',marginVertical:20}}>
                    <Text style={{fontWeight:'bold'}}>Upload Pics of Work</Text>
                </View>  
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents/>
                </View> 
             </View>   
              {/* Upload Pics ends here */}
             {/* Upload Id starts here */ }
          <View style={styles.servicesBox}>
                <View style={{flexDirection: 'row',alignItems:'center',marginVertical:20}}>
                    <Text style={{fontWeight:'bold'}}>Upload ID</Text>
                    <Text style={{fontSize:28,marginVertical:10}}>Being </Text>
                </View>  
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents/>
                </View> 
             </View>   
              {/* Upload Id ends here */}

        





                </View>
                
              </View>
      
              </ScrollView>
               </View>
               </LinearGradient>

               

      );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: isAndroid ? 0 : 50,
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
    
    },
    inputField: {
        height: 40,
        borderRadius:20,
        backgroundColor: '#F2F2F2',
        paddingLeft : 15,
        paddingRight : 15,
        marginTop: 10,
        marginBottom: 10
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
      width: 100,
      height: 100,
      borderRadius:50,
      position: 'relative',
      top: 0,
      left: 0
    },
    camera_icon: {
      width: 34,
      height: 34,
      borderRadius:17,
      borderWidth:5,
      borderColor:'white',
      position: 'absolute',
      top: 10,
      right: 10
    },
 servicesBox: {
    flex: 1,
    marginVertical: 20,
    paddingVertical: 25,
    paddingHorizontal:10,
    borderRadius:10,
    backgroundColor:'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
},

      
})

export default connect(null, actions)(ProfileScreen);
