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
            <View style={{flex: 1,padding:10}}>
               <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
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
               <View style={{flex: 1,flexDirection: 'row', justifyContent:'flex-end'}}><Text style={{paddingRight:10}}>Yes</Text><Switch value={true}  style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}/></View>
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
                        <Text note style={{fontWeight:'bold',color:'#4d4d4d'}}>Satus: Active <Switch value={true} style={{ transform: [{ scaleX: .5 }, { scaleY: .5 }] }}/></Text>
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
                        <Text note style={{fontWeight:'bold',color:'#4d4d4d'}}>Satus: Active <Switch value={true} style={{ transform: [{ scaleX: .5 }, { scaleY: .5 }] }}/></Text>
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
                        <Text note style={{fontWeight:'bold',color:'#4d4d4d'}}>Satus: Active <Switch value={true} style={{ transform: [{ scaleX: .5 }, { scaleY: .5 }] }}/></Text>
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
      img_placeholder: {
        width: 100,
        height: 100,
        borderRadius:50
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
    }
})

export default connect(null, actions)(ProfileScreen);
