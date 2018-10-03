
import React, { Component } from 'react';
import {StyleSheet,View, Text, TouchableOpacity,Dimensions, Platform, DatePickerIOS,DatePickerAndroid,TimePickerAndroid,Image} from 'react-native';
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-datepicker'
import {  Item, Input, Toast, Switch, List, ListItem, Left, Body, Right, Thumbnail, Icon, Textarea,Label } from 'native-base';
const { width, height } = Dimensions.get('window')

export default class ApplyModal extends Component {

  constructor(props) {
    super(props);
     this.state = {
        visible: props.visible,
        chosenDate: new Date(),
        date:"2016-05-15"
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

  async openAndroidDatePicker() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date()
      });
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }
  

  async openAndroidTimePicker() {
    try {
        const {action, hour, minute} = await TimePickerAndroid.open({
          hour: 14,
          minute: 0,
          is24Hour: false, // Will display '2 PM'
        });
        if (action !== TimePickerAndroid.dismissedAction) {
          // Selected hour (0-23), minute (0-59)
        }
      } catch ({code, message}) {
        console.warn('Cannot open time picker', message);
      }
  }


  renderModalContent = () => (
    <View style={styles.modalContent}>
     <View style={styles.heading}><Text style={styles.headingText}>Apply for the job</Text></View>
     <View style={{height:280,paddingHorizontal:10}}>
        <View style={{paddingVertical:20}}>
            <Text style={{textAlign:'center', color:'#9B9B9B'}}>Suggest which day and time would work best for you.</Text>
        </View>
  
          {
               Platform.OS === 'ios' ?(
                <View>
                   <DatePickerIOS
                    date={this.state.chosenDate}
                    onDateChange={this.setDate}
                    />
                 </View>
               ):(
                  <View style={{flex:1,flexDirection:'column'}}>
                      <TouchableOpacity
                       style={{flex:1,flexDirection:'column'}} 
                       onPress={()=> this.openAndroidDatePicker()}
                       >
                           <Text style={styles.textStyle}>Schedule date</Text>
                           <Item style={styles.inputBox}>
                                <Input placeholder='' style={styles.inputField}   placeholderTextColor='rgb(188,188,188)'/>
                                <Image source={require('../assets/icons/calender.png')} style={{ width: 20, height: 20}} resizeMode="contain" resizeMethod="resize"/>
                           </Item>
                       </TouchableOpacity>  
                       <View style={{flex:1,flexDirection:'row'}}>
                         <TouchableOpacity
                          style={{flex:1}} 
                          onPress={()=> this.openAndroidTimePicker()}
                          >
                             <Text style={styles.textStyle}>Hour</Text>
                             <Item style={styles.inputBox}>
                                <Input placeholder='' style={styles.inputField}   placeholderTextColor='rgb(188,188,188)'/>
                                <Image source={require('../assets/icons/arrow_down.png')} style={{ width: 10, height: 10}} resizeMode="contain" resizeMethod="resize"/>
                             </Item>
                         </TouchableOpacity>
                         <TouchableOpacity 
                         style={{flex:1}}
                         onPress={()=> this.openAndroidTimePicker()}
                         >
                             <Text style={styles.textStyle}>Minute</Text>
                             <Item style={styles.inputBox}>
                                <Input placeholder='' style={styles.inputField}   placeholderTextColor='rgb(188,188,188)'/>
                                <Image source={require('../assets/icons/arrow_down.png')} style={{ width: 10, height: 10}} resizeMode="contain" resizeMethod="resize"/>
                           </Item>
                         </TouchableOpacity>
                       </View>  
                   </View>     
               )
          }
           

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
         color: '#22262C',
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
        height:390,
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
        inputBox: {
            backgroundColor:'white',
            borderRadius:10,
            paddingHorizontal:15,
            borderWidth:0.5
        },
        inputField: {
        fontFamily: 'Montserrat-Regular',

        },
        textStyle:{
            color:'rgb(82,82,82)',
            paddingLeft:5,
            fontSize: 14,
            fontFamily:'Montserrat-Medium'
        }
});



// <DatePicker
//                         style={{width: 200}}
//                         date={this.state.date}
//                         mode="date"
//                         placeholder="select date"
//                         format="YYYY-MM-DD"
//                         minDate="2016-05-01"
//                         maxDate="2016-06-01"
//                         confirmBtnText="Confirm"
//                         cancelBtnText="Cancel"
//                         customStyles={{
//                         dateIcon: {
//                             position: 'absolute',
//                             left: 0,
//                             top: 4,
//                             marginLeft: 0
//                         },
//                         dateInput: {
//                             marginLeft: 36
//                         }
//                         // ... You can check the source to find the other keys.
//                         }}
//                         onDateChange={(date) => {this.setState({date: date})}}
//                     />