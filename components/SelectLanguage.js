
import React, { Component } from 'react';
import {StyleSheet,View, Text, TouchableOpacity,Dimensions, Picker} from 'react-native';
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
import {scale} from '../global';

export default class SelectLocation extends Component {

  constructor() {
    super();
     this.state = {
        visibleModal: true,
        language: 'english',
        languages: ['English', 'French', 'Spanish', 'Italian', 'Portuguese', 'German','Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Gujarati', 'Kannada',  'Malayalam']
     }
  }

  renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
        <Text style={styles.btnText}> {text}</Text>
     </LinearGradient>
    </TouchableOpacity>
  );

  renderModalContent = () => (
    <View style={styles.modalContent}>
     <View style={styles.heading}><Text style={styles.headingText}>Select a Language</Text></View>
     <View style={{flex:5,justifyContent:'center'}}>
     <Picker
            mode={'dialog'}
            selectedValue={this.state.language}
            style={{height:'100%'}}
            itemStyle={{color:'#3581fc',height:scale(200),paddingVertical:scale(5)}}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            {
               this.state.languages.map((language,key)=> {
                    return  <Picker.Item key={key} label={language} value={language} />
               })
            }
            </Picker>
     </View>
     <View style={{flex:1}}>
        {this.renderButton("SELECT", () => this.setState({ visibleModal: false }))}
     </View>
    </View>
  );



  render() {
    let {visibleModal} = this.state;
    return (
        <Modal isVisible={visibleModal}>
        {this.renderModalContent()}
        </Modal>
    );
  }
}


const styles = StyleSheet.create({
    heading: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth :scale(1),
        borderColor: "#e6e6e6"
    },
    headingText: {
         fontFamily:'Montserrat-Medium',
         color: '#22262C',
         fontSize: scale(18),
         textAlign: 'center',
         paddingVertical: scale(10)
    },
    button: {
        backgroundColor:'#4A4A4A',
        width: '100%',
        height: '100%',
        alignItems:'center',
        justifyContent:'center',
        borderBottomLeftRadius:scale(10),
        borderBottomRightRadius:scale(10)
      },
      btnText: { 
        textAlign:'center',
        color:'white',
        fontSize:scale(17),
        fontFamily:'Montserrat-Bold'
    },
      modalContent: {
        height:scale(320),
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: scale(4),
        borderRadius:scale(10),
        borderColor: "rgba(0, 0, 0, 0.1)"
      },
});
