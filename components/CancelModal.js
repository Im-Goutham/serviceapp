
import React, { Component } from 'react';
import {StyleSheet,View, Text, TouchableOpacity,Dimensions,} from 'react-native';
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
import {  Item, Input, Toast, Switch, List, ListItem, Left, Body, Right, Thumbnail, Icon, Textarea,Label } from 'native-base';
const { width, height } = Dimensions.get('window')

export default class CancelJob extends Component {

  constructor(props) {
    super(props);
     this.state = {
        visible: props.visible
     }
  }

  componentWillReceiveProps(newProps){
      let {visible}  = newProps;
      this.setState({visible})
  }



  renderModalContent = () => (
    <View style={styles.modalContent}>
     <View style={[styles.heading,{flex:1}]}><Text style={styles.headingText}>Reason for Cancelling</Text></View>
     <View style={{paddingHorizontal:10,flex:4}}>
        <View style={{marginVertical:20}}>
            <Text style={{ color:'#9B9B9B'}}>Write the reason below</Text>
                <Item>
                <Input style={styles.inputLabel} placeholder="Type here" />
           </Item>
         </View>
     </View>
     <View style={{flex:2}}>
        <TouchableOpacity onPress={() => this.props.closeModal()}>
            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={[styles.button,{borderBottomRightRadius:10,borderBottomLeftRadius:10}]}>
                <Text style={styles.btnText}>CANCEL THE JOB</Text>
            </LinearGradient>
         </TouchableOpacity>
     </View>
    </View>
  );



  render() {
    let {visible} = this.state;
    return (
        <Modal isVisible={visible}>
        <View style={{ marginBottom: -10, width: 40, borderTopLeftRadius:10, borderTopRightRadius:10, paddingBottom:10, alignSelf:"flex-end", height: 45, backgroundColor: 'rgba(213,213,213,0.4)', justifyContent:'center', alignItems:'center', right:0}} >
                       <Icon name="close" style={{}} onPress={() => this.props.closeModal()}/>
        </View>
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
         color: '#22262C',
         fontSize: 18,
         textAlign: 'center',
 
    },
    button: {
        backgroundColor:'#4A4A4A',
        paddingVertical:10,
        width: '100%',
        height: '100%',
        alignItems:'center',
        justifyContent:'center',
      },
      btnText: { 
        textAlign:'center',
        color:'white',
        fontSize:17,
        fontFamily:'Montserrat-Bold'
    },
      modalContent: {
        height:250,
        alignContent:'space-between',
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
