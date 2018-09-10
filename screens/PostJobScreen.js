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
let menu = require('../assets/icons/menu.png');

import * as actions from '../actions';

class PostJobScreen extends Component {
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
                <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                <TouchableOpacity  onPress={() => this.props.navigation.goBack()}  style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                <Image source={back_arrow} style={{ width: '50%', height: 25}} resizeMode="contain" resizeMethod="resize"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                <Image source={menu} style={{ width: '50%', height: 25}} resizeMode="contain" resizeMethod="resize"/>
                </TouchableOpacity>
                </View>
              }
              title={
                <View style={{ justifyContent : 'center', alignItems: 'flex-start', width:"50%", height:54}}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 20}}>Post a Job</Text>
                </View>
              }
              right={
                <View></View>
              }
              />
                   <ScrollView contentContainerStyle={{
          justifyContent: 'space-between'
        }}>
              <View style={styles.container}>   
              <View style={{position:'relative'}}>
                 <Image style={styles.borderImg} source={require('../images/border_img.png')}/>
              </View>  
              <View style={{backgroundColor:'rgb(249, 252, 255)',paddingHorizontal:10, paddingVertical:30,justifyContent:'space-between'}}> 
                <View style={{justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',marginVertical:10}}>
                  <View style={{flex:1,flexDirection:'column',alignItems:'flex-start'}}>
                        <Text style={{}}>Select a Category</Text>
                        <Text style={[styles.inputLabel,{fontSize:13,marginVertical:5}]}>Home Exterior</Text>
                   </View>
                   <View style={{flex:1,alignItems:'flex-end'}}>
                        <Icon name='ios-arrow-forward' style={{fontSize: 18,fontFamily:'Montserrat-Light'}}/>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginVertical:10}}>
                  <View style={{flex:1}}>
                        <Text>Enter Job Address</Text>
                        <Text style={[styles.inputLabel,{fontSize:13,marginVertical:5}]}>It will show only the job is Booked or Scheduled</Text>
                   </View>
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
                  </Item>
                  </View>
                  <View style={{width:'50%',paddingLeft:10}}>
                  <Item floatingLabel>
                  <Label style={styles.inputLabel}>State</Label>
                  <Input
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
                 </Item>
                  </View>
                </View>


                 <View style={[styles.inputField,{width:'100%',flexDirection:'row'}]}>
                  <View style={{width:'50%',paddingRight:10}}>
                  <Item floatingLabel>
                    <Label style={styles.inputLabel}>Zip Code</Label>
                    <Input
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
                  </Item>
                  </View>
                  <View style={{width:'50%',paddingLeft:10}}>
                  <Item floatingLabel>
                  <Label style={styles.inputLabel}>Country</Label>
                  <Input
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
                 </Item>
                  </View>
                </View>
                <Text style={{marginVertical:10}}>Enter Job Basic Details</Text>
                <View style={styles.inputField}>
                <Item floatingLabel>
                  <Label style={styles.inputLabel}>Job Title</Label>
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
                  <Label style={styles.inputLabel}>Job Description</Label>
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
                  <Label style={styles.inputLabel}>Budget</Label>
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
                <Text style={{marginVertical:10}}>Set Dates</Text>
                <View style={styles.inputField}>
                <Item floatingLabel>
                  <Label style={styles.inputLabel}>Need to be done before</Label>
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
                  <Label style={styles.inputLabel}>Expiry Date & Time</Label>
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
                
    


              {/* Upload Pics starts here */ }
             <View style={styles.servicesBox}>
                <View style={{flexDirection: 'row',alignItems:'center',marginVertical:20}}>
                    <Text style={styles.textStyle}>Upload Pics</Text>
                </View>  
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents  documents={works}/>
                </View> 
             </View>   
              {/* Upload Pics ends here */}

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

            <View style={{justifyContent: "center" ,flexDirection:'row',marginBottom:20,marginTop:10}}>
            <View style={{flex:1,paddingRight:10}}>
                <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#CCCCCC', '#F2F2F2']} style={styles.button}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('home')}}><Text style={styles.btnText}>CANCEL</Text></TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={{flex:1,paddingLeft:10}}>
                <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('home')}}><Text style={styles.btnText}>SIGN UP</Text></TouchableOpacity>
                </LinearGradient>
            </View>   
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
        justifyContent: 'space-between',
        marginTop:40
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

export default connect(null, actions)(PostJobScreen);
