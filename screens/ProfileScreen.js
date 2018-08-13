import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableHighlight, Image, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import {  Item, Input, Toast, Switch, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, Textarea } from 'native-base';
import * as actions from '../actions';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { firstname: '', lastname: '', error: null, loading: false};
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
     let {firstname , lastname} = this.state;


     if(!firstname){
           this.handleError("Username is required!")
           return false;
     }
     if(!lastname){
          this.handleError("lastname is required!")
           return false;
     }
     this.setState({ error: null, loading: true });


  
   }


   handleError(error){
     Toast.show({
               text: error,
               buttonText: "Okay",
               type: "danger"
         })
   }


    render() {
      return ( 
        <ScrollView> 
        <View style={styles.container}>
        <View style={{padding: 10, backgroundColor:'white'}}>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>Basic Profile</Text>
        </View> 
        <View style={styles.logoContainer}>
            <View style={styles.imgsView}>
               <Image source={require('../images/user_placeholder.png')} style={styles.user_placeholder}/>
               <Image source={require('../images/camera_icon.png')} style={styles.camera_icon}/>
             </View> 
             <View style={{flex: 1,padding:10}}>
                <Text style={{fontSize: 18,textAlign: 'center'}}>Set Profile Pic</Text>
             </View> 
        </View>  
        <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>FIRST NAME</Text>
        <Item>
              <Input
                  style={styles.inputField}
                  value={this.state.firstname}
                  autoCapitalize='none'
                  onSubmitEditing={() => {
                    this.focusNextField('lastname');
                  }}
                  returnKeyType={ "next" }
                  ref={ input => {
                    this.inputs['firstname'] = input;
                  }}
                  onChangeText={firstname => this.setState({ firstname })}
                  />
            </Item>
            <Text style={styles.inputLabel}>LAST NAME</Text>
            <Item>
              <Input
                  style={styles.inputField}
                  value={this.state.lastname}
                  autoCapitalize='none'
                  secureTextEntry={false}
                  onSubmitEditing={() => {
                     this.focusNextField('dob');
                  }}
                  returnKeyType={ "next" }
                  ref={ input => {
                    this.inputs['lastname'] = input;
                  }}
                  onChangeText={lastname => this.setState({ lastname })}
                  />
            </Item>
            <Text style={styles.inputLabel}>DATE OF BIRTH</Text>
            <Item>
              <Input
                  style={styles.inputField}
                  value={this.state.dob}
                  autoCapitalize='none'
                  secureTextEntry={false}
                  onSubmitEditing={() => {
                    this.focusNextField('address');
                  }}
                  returnKeyType={ "next" }
                  ref={ input => {
                    this.inputs['dob'] = input;
                  }}
                  onChangeText={dob => this.setState({ dob })}
                  />
            </Item>
            <Text style={styles.inputLabel}>ADDRESS</Text>
            <Item>
              <Input
                  style={styles.inputField}
                  value={this.state.address}
                  autoCapitalize='none'
                  secureTextEntry={false}
                  onSubmitEditing={() => {
                    this.focusNextField('about');
                  }}
                  returnKeyType={ "done" }
                  ref={ input => {
                    this.inputs['address'] = input;
                  }}
                  onChangeText={address => this.setState({ address })}
                  />
            </Item>
            <View style={styles.serviceProviderBox}>
               <View style={{flex: 1}}><Text style={{fontWeight:'bold',fontSize: 17}}>Do you want to be a Service Provider</Text></View>
               <View style={{flex: 1,flexDirection: 'row', justifyContent:'flex-end'}}><Text style={{paddingRight:10}}>Yes</Text><Switch value={true} style={styles.switch}/></View>
            </View>  
            <View style={styles.servicesBox}>
                 <Text style={{fontSize: 16,color: 'black'}}>Select which services you want to provide</Text>
                 <List style={{paddingTop:20,paddingBottom:20}}>
                    <ListItem avatar>
                    <Left>
                        <Thumbnail style={{width:40,height:40}} source={require('../images/img_placeholder.png')} />
                    </Left>
                    <Body>
                        <Text>Waiter</Text>
                        <Text note style={{fontWeight:'bold',color:'#4d4d4d'}}>Satus: Active <Switch value={true} style={styles.switch}/></Text>
                    </Body>
                    <Right>
                         <Icon style={{color:'#4d4d4d'}} active name="md-more" />
                    </Right>
                    </ListItem>
                    <ListItem avatar>
                    <Left>
                        <Thumbnail style={{width:40,height:40}} source={require('../images/img_placeholder.png')} />
                    </Left>
                    <Body>
                        <Text>Painting</Text>
                        <Text note style={{fontWeight:'bold',color:'#4d4d4d'}}>Satus: Active <Switch value={true} style={styles.switch}/></Text>
                    </Body>
                    <Right>
                         <Icon style={{color:'#4d4d4d'}} active name="md-more" />
                    </Right>
                    </ListItem>
                    <ListItem avatar>
                    <Left>
                        <Thumbnail style={{width:40,height:40}} source={require('../images/img_placeholder.png')} />
                    </Left>
                    <Body>
                        <Text>Dog Walking</Text>
                        <Text note style={{fontWeight:'bold',color:'#4d4d4d'}}>Satus: Active <Switch value={true} style={styles.switch}/></Text>
                    </Body>
                    <Right>
                         <Icon style={{color:'#4d4d4d'}} active name="md-more" />
                    </Right>
                    </ListItem>
                </List>
                <View style={{justifyContent: "center" ,marginBottom:20,marginTop:10}}>
                {this.state.loading ? <ActivityIndicator color="#8E24AA" size="large" /> :
               <TouchableHighlight style={styles.button}><Text style={styles.btnText}>ADD MORE SERVICES</Text></TouchableHighlight>
                }
                </View>
            </View>  
            <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>WRITE ABOUT YOUR SELF</Text>
        <Item>
              <Textarea
                  style={styles.textAreaField}
                  value={this.state.about}
                  autoCapitalize='none'
                  rowSpan={4}
                  onSubmitEditing={() => {
                    this.handleSubmit();
                  }}
                  returnKeyType={ "done" }
                  ref={ input => {
                    this.inputs['about'] = input;
                  }}
                  onChangeText={about => this.setState({ about })}
                  />
            </Item>
         </View>
         {/* Upload Certificates starts here */ }
         <View style={{flex:1,marginTop:10,marginBottom:10}}>
            <View style={{flexDirection: 'row',alignItems:'center',padding:10}}>
                 <Text style={{fontWeight:'bold'}}>Upload Certificates</Text><Icon style={styles.plus} active name="md-add" />
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
                     <Text style={{paddingTop:5,paddingBottom:5}}>Certificate1.jpeg</Text>
                     </View> 
                 </View>   
                 <View style={{flexDirection:'column',width:100}}>
                    <View style={styles.imgsView}>
                     <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                     <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                     <Text style={{paddingTop:5,paddingBottom:5}}></Text>
                     </View> 
                 </View> 
                 <View style={{flexDirection:'column',width:100}}>
                    <View style={styles.imgsView}>
                     <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                     <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                     <Text style={{paddingTop:5,paddingBottom:5}}></Text>
                     </View> 
                 </View> 
              </ScrollView>   
            </View> 
         </View>   
              {/* Upload Certificates ends here */ } 
              {/* Upload Pics of work starts here */ } 
              <View style={{flex:1,marginTop:10,marginBottom:10}}>
            <View style={{flexDirection: 'row',alignItems:'center',padding:10}}>
                 <Text style={{fontWeight:'bold'}}>Upload Pics of work</Text><Icon style={styles.plus} active name="md-add" />
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
              {/* Upload ID start here */}
              <View style={{flex:1,marginTop:10,marginBottom:10}}>
                    <View style={{flexDirection: 'row',alignItems:'center',padding:10}}>
                        <Text style={{fontWeight:'bold'}}>Upload ID</Text><Icon style={styles.plus} active name="md-add" />
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
                            <Text style={{paddingTop:5,paddingBottom:5}}>id_01.jpeg</Text>
                            </View> 
                        </View>   
                        <View style={{flexDirection:'column',width:100}}>
                            <View style={styles.imgsView}>
                            <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                            <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                            <Text style={{paddingTop:5,paddingBottom:5}}>id_02.jpeg</Text>
                            </View> 
                        </View> 
                        <View style={{flexDirection:'column',width:100}}>
                            <View style={styles.imgsView}>
                            <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                            <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                            <Text style={{paddingTop:5,paddingBottom:5}}>id_03.jpeg</Text>
                            </View> 
                        </View> 
                    </ScrollView>   
                    </View> 
                </View> 
              {/* Upload ID ends here */}
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
            {/* Upload website link starts here */}
            <View style={{flex:1,marginTop:10,marginBottom:10}}>
                   <View style={{flexDirection: 'row',alignItems:'center',padding:10}}>
                  <Text style={{fontWeight:'bold'}}>Add website link</Text><Icon style={styles.plus} active name="md-add" />
            </View>  
            <View>
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
              {/* Upload website link ends here */}
            {/* Upload Linkedin Profile link starts here */}
            <View style={{flex:1,marginTop:10,marginBottom:10}}>
                   <View style={{flexDirection: 'row',alignItems:'center',padding:10}}>
                  <Text style={{fontWeight:'bold'}}>Add Linkedin Profile link</Text><Icon style={styles.plus} active name="md-add" />
            </View>  
            <View>
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
              {/* Upload LinkedIn Profile link ends here */}
            {/* Upload Other link starts here */}
            <View style={{flex:1,marginTop:10,marginBottom:10}}>
                            <View style={{flexDirection: 'row',alignItems:'center',padding:10}}>
                            <Text style={{fontWeight:'bold'}}>Add Other link</Text><Icon style={styles.plus} active name="md-add" />
                        </View>  
                        <View>
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
              {/* Upload Other link ends here */}
            <View style={{justifyContent: "center" }}>
                {this.state.loading ? <ActivityIndicator color="#8E24AA" size="large" /> :
               <TouchableHighlight style={styles.button} onPress={() => this.handleSubmit()}><Text style={styles.btnText}>FINISH</Text></TouchableHighlight>
                }
           </View>
        </View>  
        </View>
        </ScrollView> 
      );
    }
}


const styles = StyleSheet.create({
        container: {
          backgroundColor: 'white',
          paddingTop: 50,
          padding:5
      },
      logoContainer: {
          flex:1,
          justifyContent: 'center',
          alignItems: 'center'
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
      serviceProviderBox: {
          flex:1,
          marginTop: 20,
          marginBottom: 20,
          paddingTop: 25,
          paddingBottom:25,
          paddingLeft:10,
          paddingRight:10,
          flexDirection: 'row',
          borderColor:  '#808080',
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
     },
     servicesBox: {
         flex: 1,
         marginBottom: 20,
         borderColor:  '#808080',
         borderBottomWidth: 0.5
     },
     switch: {
          transform: [{ scaleX: .5 }, { scaleY: .5 }] 
     },
      text: {
        marginBottom: 15,
        marginTop: 15,
        fontSize: 15,
        textAlign: 'center',
      },
      button:{
        backgroundColor:'#4A4A4A',
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

export default connect(null, actions)(ProfileScreen);
