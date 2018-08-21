import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity,TouchableHighlight, Image, ScrollView,Platform} from 'react-native';
import { connect } from 'react-redux';
import {  Header,Button,Item, Input,Title, Toast, Switch, List, ListItem, Left, Body, Right, Text, Icon, Textarea } from 'native-base';
import ImagePicker  from 'react-native-image-picker';
import * as actions from '../actions';
import Advertisement from '../components/Advertisement';



const TopHeader = (props) => {
    return  <Header style={{backgroundColor:'white'}}>
    <Left style={{flex: 1}}>
        <Button transparent onPress={() => props.navigation.openDrawer()}>
          <Icon name='ios-menu' style={{color:'black',fontSize:25}}/>
        </Button>
      </Left>
      <Body style={{flex: 6,alignItems:'flex-start'}}>
        <Title style={{textAlign:'left',paddingBottom:5}}>{props.title}</Title>
      </Body>
     <Right style={{flex: 2,flexDirection:'row'}}>
          <View style={{flex: 1,alignItems:'flex-end'}}><Icon  name='md-search' style={{color:'black',fontSize:25,fontWeight:'bold'}}/></View>
          <View style={{flex: 1,alignItems:'flex-end'}}><Icon  name='ios-funnel-outline' style={{color:'black',fontSize:24,fontWeight:'bold'}}/></View>
     </Right>
  </Header>
}



class PostJobScreen extends Component {
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
        <View style={styles.container}>
        <TopHeader navigation={this.props.navigation} title={'Post a Job'}/>
        <Advertisement/>
        <ScrollView> 
        <View style={{marginTop:20,padding:10}}>
             <Text style={{fontSize:16,fontWeight:'bold',paddingVertical:5}}>Select Category</Text>
             <Text style={{fontSize:12,paddingVertical:10}}>Home Exterior</Text>
        </View>
        <View style={styles.inputContainer}>
        <View style={{marginBottom:20}}>
             <Text style={{fontSize:16,fontWeight:'bold',paddingVertical:5}}>Enter Job Address</Text>
             <Text style={{fontSize:12,paddingVertical:5}}>(It will show only once the job is Booked or Scheduled)</Text>
        </View>
        <Text style={styles.inputLabel}>SELECT JOB ADDRESS</Text>
        <Item>
              <Input
                  style={styles.inputField}
                  value={this.state.address}
                  autoCapitalize='none'
                  onSubmitEditing={() => {
                    this.focusNextField('country');
                  }}
                  returnKeyType={ "next" }
                  ref={ input => {
                    this.inputs['address'] = input;
                  }}
                  onChangeText={address => this.setState({ address })}
                  />
            </Item>
            <Text style={styles.inputLabel}>COUNTRY</Text>
            <Item>
              <Input
                  style={styles.inputField}
                  value={this.state.country}
                  autoCapitalize='none'
                  secureTextEntry={false}
                  onSubmitEditing={() => {
                     this.focusNextField('city');
                  }}
                  returnKeyType={ "next" }
                  ref={ input => {
                    this.inputs['country'] = input;
                  }}
                  onChangeText={country => this.setState({ country })}
                  />
            </Item>
            <View style={{flex:1,flexDirection:'row'}}>
                 <View style={{flex:1}}>
                 <Text style={styles.inputLabel}>CITY</Text>
                        <Item>
                        <Input
                            style={styles.inputField}
                            value={this.state.city}
                            autoCapitalize='none'
                            secureTextEntry={false}
                            onSubmitEditing={() => {
                                this.focusNextField('zip');
                            }}
                            returnKeyType={ "next" }
                            ref={ input => {
                                this.inputs['city'] = input;
                            }}
                            onChangeText={dob => this.setState({ city })}
                            />
                        </Item>
                 </View>    
                 <View style={{flex:1}}>
                  <Text style={styles.inputLabel}>ZIP CODE</Text>
                    <Item>
                    <Input
                        style={styles.inputField}
                        value={this.state.zip}
                        autoCapitalize='none'
                        secureTextEntry={false}
                        onSubmitEditing={() => {
                            this.focusNextField('zip');
                        }}
                        returnKeyType={ "next" }
                        ref={ input => {
                            this.inputs['zip'] = input;
                        }}
                        onChangeText={address => this.setState({ zip })}
                        />
                    </Item> 
                 </View>   
                  
            </View>
         
            
            <View style={styles.inputContainer}>
               <Text style={styles.inputLabel}>JOB TITLE</Text>
                    <Item>
                    <Input
                        style={styles.inputField}
                        value={this.state.title}
                        autoCapitalize='none'
                        secureTextEntry={false}
                        onSubmitEditing={() => {
                            this.focusNextField('description');
                        }}
                        returnKeyType={ "next" }
                        ref={ input => {
                            this.inputs['title'] = input;
                        }}
                        onChangeText={title => this.setState({ title })}
                        />
                    </Item> 
                 <Text style={styles.inputLabel}>JOB DESCRIPTION</Text>
                <Item>
                    <Textarea
                        style={styles.textAreaField}
                        value={this.state.description}
                        autoCapitalize='none'
                        rowSpan={4}
                        onSubmitEditing={() => {
                            this.focusNextField('budget');
                        }}
                        returnKeyType={ "next" }
                        ref={ input => {
                            this.inputs['description'] = input;
                        }}
                        onChangeText={description => this.setState({ description })}
                        />
                    </Item>
                    <Text style={styles.inputLabel}>BUDGET</Text>
                    <Item>
                    <Input
                        style={styles.inputField}
                        value={this.state.budget}
                        autoCapitalize='none'
                        secureTextEntry={false}
                        onSubmitEditing={() => {
                            this.focusNextField('beforeDate');
                        }}
                        returnKeyType={ "next" }
                        ref={ input => {
                            this.inputs['budget'] = input;
                        }}
                        onChangeText={budget => this.setState({ budget })}
                        />
                    </Item> 
                    <Text style={styles.inputLabel}>NEED TO BE DONE BEFORE</Text>
                    <Item>
                    <Input
                        style={styles.inputField}
                        value={this.state.beforeDate}
                        autoCapitalize='none'
                        secureTextEntry={false}
                        onSubmitEditing={() => {
                            this.focusNextField('expiryDate');
                        }}
                        returnKeyType={ "next" }
                        ref={ input => {
                            this.inputs['beforeDate'] = input;
                        }}
                        onChangeText={beforeDate => this.setState({ beforeDate })}
                        />
                    </Item> 
                    <Text style={styles.inputLabel}>EXPIRY DATE AND TIME</Text>
                    <Item>
                    <Input
                        style={styles.inputField}
                        value={this.state.expiryDate}
                        autoCapitalize='none'
                        secureTextEntry={false}
                        onSubmitEditing={() => {
                            this.handleSubmit();
                        }}
                        returnKeyType={ "next" }
                        ref={ input => {
                            this.inputs['expiryDate'] = input;
                        }}
                        onChangeText={expiryDate => this.setState({ expiryDate })}
                        />
                    </Item>
             </View>
  
              {/* Upload Pics of work starts here */ } 
              <View style={{flex:1,marginTop:10,marginBottom:10}}>
            <View style={{flexDirection: 'row',alignItems:'center',padding:10}}>
                 <Text style={{fontWeight:'bold'}}>Upload Pics</Text><Icon style={styles.plus} active name="md-add" />
            </View>  
            <View style={{flexDirection: 'row',alignItems:'center'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              >
                 <View style={{flexDirection:'column',width:100}}>
                    <View style={styles.imgsView}>
                     <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                     <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                     <Text style={{paddingTop:5,paddingBottom:5}}>01.jpeg</Text>
                     </View> 
                 </View>   
                 <View style={{flexDirection:'column',width:100}}>
                    <View style={styles.imgsView}>
                     <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                     <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                     <Text style={{paddingTop:5,paddingBottom:5}}>02.jpeg</Text>
                     </View> 
                 </View> 
                 <View style={{flexDirection:'column',width:100}}>
                    <View style={styles.imgsView}>
                     <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                     <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                     <Text style={{paddingTop:5,paddingBottom:5}}>03.jpeg</Text>
                    </View> 
                 </View> 
                 <View style={{flexDirection:'column',width:100}}>
                    <View style={styles.imgsView}>
                     <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                     <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                     <Text style={{paddingTop:5,paddingBottom:5}}>04.jpeg</Text>
                    </View> 
                 </View> 
              </ScrollView>   
            </View> 
         </View> 
              {/* Upload Pics of work ends here */ } 
              {/* Upload Video link starts here */}
              <View style={{flex:1,marginTop:10,marginBottom:10}}>
            <View style={{flexDirection: 'row',alignItems:'center',padding:10}}>
                 <Text style={{fontWeight:'bold'}}>Add video link</Text><Icon style={styles.plus} active name="md-add" />
            </View>  
            <View >
            <List style={{paddingTop:20,paddingBottom:20}}>
                    <ListItem avatar>
                    <Left>
                        <Image style={{width:80,height:60}} source={require('../images/img_placeholder.png')} />
                    </Left>
                    <Body>
                        <Text style={{color:'#3399ff'}}>https://www.youtube.com/watch?v=1tIBMiuWaOg</Text>
                    </Body>
                    <Right>
                         <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                    </Right>
                    </ListItem>
                </List>
            </View> 
           </View> 
             {/* Upload Video link ends here */}
             <View style={{justifyContent: "center" }}>
               <TouchableOpacity style={[styles.button,{backgroundColor:'white',borderColor:'grey'}]} onPress={() => this.handleSubmit()}><Text style={[styles.btnText,{color:'grey'}]}>CANCEL</Text></TouchableOpacity>
           </View>
            <View style={{justifyContent: "center" }}>
                {this.state.loading ? <ActivityIndicator color="#8E24AA" size="large" /> :
               <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}><Text style={styles.btnText}>POST A JOB</Text></TouchableOpacity>
                }
           </View>
        </View>  
        </ScrollView> 
        </View>
      );
    }
}


const styles = StyleSheet.create({
        container: {
          backgroundColor: 'white',
          paddingBottom: Platform.OS === 'ios' ? 120 : 0, 
          padding:5
      },
      img_placeholder: {
        width: 90,
        height: 90,
        position: 'relative',
		top: 0,
		left: 0
      },
      close_img: {
        width: 18,
        height: 18,
        borderRadius:9,
        position: 'absolute',
		top: 14,
		right: 4
      },
      inputContainer: {
          justifyContent: 'center',
          padding: 10
      },
      inputLabel: {
         textAlign:'left',
         fontSize: 12
      },
      textAreaField: {
        width:'100%',
        borderRadius:20,
        backgroundColor: '#F2F2F2',
        padding:15,
        marginTop: 10,
        marginBottom: 10
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
      text: {
        marginBottom: 15,
        marginTop: 15,
        fontSize: 15,
        textAlign: 'center',
      },
      button:{
        backgroundColor:'#007FFA',
        width: '100%',
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#fff',
        paddingTop:10,
        paddingBottom:10,
        marginTop: 5,
        marginBottom: 5
    },
    btnText: { 
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
    },
    plus: {
        color:'#3399ff',
        paddingLeft:10,
        fontSize:20,
        fontWeight: 'bold'
    },
    imgsView: {
        flex: 1,
        padding:10,
        position: 'relative',
        top: 0,
        left: 0
    }
})

export default connect(null, actions)(PostJobScreen);
