
import React, { Component } from 'react';
import {StyleSheet,View, Text, TouchableOpacity,Dimensions,} from 'react-native';
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
import {  Item, Input, Toast, Switch, List, ListItem, Left, Body, Right, Thumbnail, Icon, Textarea,Label } from 'native-base';
const { width, height } = Dimensions.get('window')
import FloatingLabelInput from '../components/FloatingLabelInput';




export default class ChangePassword extends Component {

  constructor(props) {
    super(props);
     this.state = {
        visible: props.visible
     }
     this.inputs = {};
  }

  componentWillReceiveProps(newProps){
      let {visible}  = newProps;
      this.setState({visible})
  }



  renderModalContent = () => (
    <View style={styles.modalContent}>
     <View style={styles.heading}><Text style={styles.headingText}>Enter Current Password</Text></View>
     <View style={{height:230,paddingHorizontal:10}}>
        <View style={{paddingVertical:20}}>
            <Text style={{textAlign:'center', color:'#9B9B9B'}}>For security reasons, please verify your password.</Text>
        </View>
        <View style={{marginVertical:20}}>
        <FloatingLabelInput
                label="Password"
                value={this.state.password}
                autoCapitalize='none'
                returnKeyType={ "next" }
                ref={ input => {
                    this.inputs['password'] = input;
                }}
                onChangeText={password => this.setState({ password })}
                style={{marginVertical: 5}}
                secureTextEntry={true}
                />
         </View>
         <View style={{paddingVertical:10}}>
            <Text style={{textAlign:'right', color:'rgb(87,152,238)',fontFamily:'Montserrat-Medium'}}>Forgot password?</Text>
        </View>
     </View>
     <View style={{height:50,flexDirection:'row'}}>
        <View style={{flex:1}}>
        <TouchableOpacity onPress={() => this.props.closeModal()}>
            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F2F2F2', '#CCCCCC']} style={[styles.button,{borderBottomLeftRadius:10}]}>
                <Text style={[styles.btnText,{color:'black'}]}>CANCEL</Text>
            </LinearGradient>
         </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
        <TouchableOpacity onPress={() => this.props.closeModal()}>
            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={[styles.button,{borderBottomRightRadius:10}]}>
                <Text style={styles.btnText}>VERIFY</Text>
            </LinearGradient>
         </TouchableOpacity>
        </View>
        
     </View>
    </View>
  );



  render() {
    let {visible} = this.state;
    return (
        <Modal isVisible={visible}>
        {this.renderModalContent()}
        </Modal>
    );
  }
}


const styles = StyleSheet.create({
    heading: {
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth :1,
        borderColor: "#e6e6e6",
        paddingVertical: 15
    },
    headingText: {
         fontFamily:'Montserrat-Medium',
         color: 'rgb(34,38,44)',
         fontSize: 18,
         textAlign: 'center',
 
    },
    button: {
        backgroundColor:'#4A4A4A',
        width: '100%',
        height: '100%',
        alignItems:'center',
        justifyContent:'center',
      },
      btnText: { 
        textAlign:'center',
        color:'white',
        fontSize: 16,
    },
      modalContent: {
        height:340,
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 10,
        borderColor: "rgba(0, 0, 0, 0.1)"
      },
      inputLabel: {
        textAlign:'left',
        fontSize: 16,
        fontFamily:'Montserrat-Light'
     },
});
