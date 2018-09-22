
import React, { Component } from 'react';
import {StyleSheet,View, Text, TouchableOpacity,Dimensions, DatePickerIOS} from 'react-native';
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
import {  Item, Input, Toast, Switch, List, ListItem, Left, Body, Right, Thumbnail, Icon, Textarea,Label } from 'native-base';
const { width, height } = Dimensions.get('window')

export default class ApplyModal extends Component {

  constructor(props) {
    super(props);
     this.state = {
        visible: props.visible,
        chosenDate: new Date()
     },

     this.setDate = this.setDate.bind(this);
  }

  componentWillReceiveProps(newProps){
      let {visible}  = newProps;
      this.setState({visible})
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }


  renderModalContent = () => (
    <View style={styles.modalContent}>
     <View style={styles.heading}><Text style={styles.headingText}>Apply for the job</Text></View>
     <View style={{height:280,paddingHorizontal:10}}>
        <View style={{paddingVertical:20}}>
            <Text style={{textAlign:'center', color:'#9B9B9B'}}>Suggest which day and time would work best for you.</Text>
        </View>
        <View >
            <DatePickerIOS
            date={this.state.chosenDate}
            onDateChange={this.setDate}
            />
         </View>
     </View>
     <View style={{height:50,flexDirection:'row'}}>
        <View style={{flex:1}}>
        <TouchableOpacity onPress={() => this.props.closeModal()}>
            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#F2F2F2', '#CCCCCC']} style={[styles.button,{borderBottomLeftRadius:10}]}>
                <Text style={[styles.btnText,{color:'black'}]}>SKIP</Text>
            </LinearGradient>
         </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
        <TouchableOpacity onPress={() => this.props.closeModal()}>
            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={[styles.button,{borderBottomRightRadius:10}]}>
                <Text style={styles.btnText}>APPLY</Text>
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
        height:380,
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
