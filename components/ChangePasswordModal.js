
import React, { Component } from 'react';
import {StyleSheet,View, Text, TouchableOpacity,Dimensions,} from 'react-native';
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
import {  Item, Input, Toast, Switch, List, ListItem, Left, Body, Right, Thumbnail, Icon, Textarea,Label } from 'native-base';
import {scale} from '../global';




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
     <View style={{height:scale(230),paddingHorizontal:scale(10)}}>
        <View style={{paddingVertical:scale(20)}}>
            <Text style={{fontFamily:'Montserrat-Medium',fontSize:scale(14),textAlign:'center', color:'#9B9B9B'}}>For security reasons, please verify your password.</Text>
        </View>
        <View style={{marginVertical:scale(20)}}>
            <Text style={{ color:'#9B9B9B'}}>Password</Text>
                <Item>
                <Input style={styles.inputLabel} placeholder="Type here" placeholderTextColor='9B9B9B'/>
           </Item>
         </View>
         <View style={{paddingVertical:scale(10)}}>
            <Text style={{textAlign:'right', color:'#3E85EF',fontFamily:'Montserrat-Medium'}}>Forgot password?</Text>
        </View>
     </View>
     <View style={{height:scale(50),flexDirection:'row'}}>
        <View style={{flex:1}}>
        <TouchableOpacity onPress={() => this.props.closeModal()}>
            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F2F2F2', '#CCCCCC']} style={[styles.button,{borderBottomLeftRadius:scale(10)}]}>
                <Text style={[styles.btnText,{color:'black',fontFamily:'Montserrat-Regular'}]}>CANCEL</Text>
            </LinearGradient>
         </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
        <TouchableOpacity onPress={() => this.props.closeModal()}>
            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={[styles.button,{borderBottomRightRadius:scale(10)}]}>
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
        height:scale(60),
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth :scale(1),
        borderColor: "#e6e6e6",
        paddingVertical: scale(15)
    },
    headingText: {
         fontFamily:'Montserrat-Medium',
         color: '#22262C',
         fontSize: scale(18),
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
        fontFamily:'Montserrat-Bold',  
        textAlign:'center',
        color:'white',
        fontSize: scale(16),
    },
      modalContent: {
        height:scale(340),
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: scale(10),
        borderColor: "rgba(0, 0, 0, 0.1)"
      },
      inputLabel: {
        textAlign:'left',
        fontSize: scale(16),
        fontFamily:'Montserrat-Medium',
        borderBottomColor: '#D1D8E0'
     },
});
