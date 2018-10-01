import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity,TouchableHighlight, Image, ScrollView,Platform,Dimensions} from 'react-native';
import {  Item, Input, Toast, Switch, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, Textarea,Label } from 'native-base';
import ImagePicker  from 'react-native-image-picker';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LinearGradient from 'react-native-linear-gradient';
import Documents from '../components/Documents';
import Header from '../components/Header';
import FloatingLabelInput from '../components/FloatingLabelInput';

const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

let back_arrow = require('../assets/icons/back-arrow.png');
let menu = require('../assets/icons/menu.png');


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
      const {params} = this.props.navigation.state;
      let { backButton } = this.props;
      return ( 
        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={{flex:1}}>
              <Header
              navigation={this.props.navigation}
              left = {
                <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                {
                    (backButton)?(
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('homePage')}  style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                        <Image source={back_arrow} style={{ width: '50%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                        </TouchableOpacity>
                    ):(null)
                }
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{width: !backButton ? 54 : "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                <Image source={menu} style={{ width: !backButton? '100%': '50%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
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
                  <TouchableOpacity 
                      onPress={()=>{this.props.navigation.navigate('addServiceCatScreen')}}
                    >
                  <View style={styles.servicesBox}>
                      <View style={{flex:1,flexDirection:'row'}}>
                            <View style={{flex:1,flexDirection:'column',alignItems:'flex-start'}}>
                                <Text style={styles.textStyle}>Select a Category</Text>
                                <Text style={[styles.inputLabel,{fontSize:13,marginVertical:5,color:'#D8D8D8',fontFamily:'Montserrat-Medium'}]}>Home Exterior</Text>
                            </View>
                           <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                                <Image source={require('../assets/icons/arrow_right.png')} style={{width:15,height: 15}} resizeMode="contain" resizeMethod="resize"/>
                            </View>
                      </View>
                </View>
                </TouchableOpacity>
                 <View style={styles.servicesBox}>
                      <View style={{flex:1}}>
                           <Text style={styles.textStyle}>Enter Job Address</Text>
                            <Text style={[styles.inputLabel,{fontSize:13,color:'#D8D8D8',marginVertical:5,fontFamily:'Montserrat-Medium'}]}>It will show only the job is Booked or Scheduled</Text>
                      </View>
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
                            label="Zip Code"
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

                </View>



                    <View style={styles.servicesBox}>
                     <Text style={styles.textStyle}>Enter Job Basic Details</Text>
                        <View style={styles.inputField}>
                        <FloatingLabelInput
                            label="Job Title"
                            value={this.state.title}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['title'] = input;
                            }}
                            onChangeText={title => this.setState({ title })}
                            />
                        </View>
                        <View style={styles.inputField}>
                        <FloatingLabelInput
                            label="Job Description"
                            value={this.state.description}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['description'] = input;
                            }}
                            onChangeText={description => this.setState({ description })}
                            />
                        </View>
                          <View style={styles.inputField}>
                          <FloatingLabelInput
                            label="Budget"
                            value={this.state.budget}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['budget'] = input;
                            }}
                            onChangeText={budget => this.setState({ budget })}
                            />
                            </View>
                    </View>



                    <View style={styles.servicesBox}>
                      <Text style={styles.textStyle}>Set Dates</Text>
                        <View style={styles.inputField}>
                        <FloatingLabelInput
                            label="Need to be done before"
                            value={this.state.before}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['before'] = input;
                            }}
                            onChangeText={before => this.setState({ before })}
                            />
                        </View>
                        <View style={styles.inputField}>
                        <FloatingLabelInput
                            label="Expiry Date & Time"
                            value={this.state.expiry}
                            autoCapitalize='none'
                            onSubmitEditing={() => {
                              this.focusNextField('password');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                              this.inputs['expiry'] = input;
                            }}
                            onChangeText={expiry => this.setState({ expiry })}
                            />
                        </View>
                    </View>

              {/* Upload Pics starts here */ }
             <View style={styles.servicesBox}>
                <View style={{flexDirection: 'row',alignItems:'center',marginVertical:20}}>
                    <Text style={styles.textStyle}>Upload Pics</Text>
                </View>  
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                   <Documents  documents={works} placeholder={true}/>
                </View> 
             </View>   
              {/* Upload Pics ends here */}

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

            <View style={{justifyContent: "center" ,flexDirection:'row',marginBottom:20,marginTop:10}}>
            <View style={{flex:1,paddingRight:10}}>
                <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#CCCCCC', '#F2F2F2']} style={styles.button}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('homePage')}}><Text style={styles.btnText}>CANCEL</Text></TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={{flex:1,paddingLeft:10}}>
                <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('homePage')}}><Text style={styles.btnText}>POST A JOB</Text></TouchableOpacity>
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
    elevation: 3,
},
textStyle: {
  fontFamily:"Montserrat-SemiBold"
}

      
})




const mapStateToProps = state=> ({ 
  backButton:state.user.backButton,
})

export default connect(mapStateToProps, actions)(PostJobScreen);

