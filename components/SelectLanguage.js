
import React, { Component } from 'react';
import {StyleSheet,View, Text, TouchableOpacity,Dimensions, Picker} from 'react-native';
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window')

export default class SelectLocation extends Component {

  constructor() {
    super();
     this.state = {
        visibleModal: true,
        language: 'english',
        languages: ['English', 'french', 'Spanish', 'Italian', 'Portuguese', 'German','Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Gujarati', 'Kannada',  'Malayalam']
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
     <View style={styles.heading}><Text style={styles.headingText}>Select Language</Text></View>
     <View style={{flex:5,justifyContent:'center'}}>
     <Picker
            mode={'dialog'}
            selectedValue={this.state.language}
            style={{height:'100%'}}
            itemStyle={{color:'#3581fc',height:200,paddingVertical:5}}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            {
               languages.map((language,key)=> {
                    return  <Picker.Item label={language} value={language} />
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
        borderBottomWidth :1,
        borderColor: "#e6e6e6"
    },
    headingText: {
         fontFamily:'Montserrat-Medium',
         color: '#22262C',
         fontSize: 18,
         textAlign: 'center',
         paddingVertical: 10
    },
    button: {
        backgroundColor:'#4A4A4A',
        width: '100%',
        height: '100%',
        alignItems:'center',
        justifyContent:'center',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
      },
      btnText: { 
        textAlign:'center',
        color:'white',
        fontSize:17,
        fontFamily:'Montserrat-Bold'
    },
      modalContent: {
        height:320,
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 4,
        borderRadius:10,
        borderColor: "rgba(0, 0, 0, 0.1)"
      },
});
