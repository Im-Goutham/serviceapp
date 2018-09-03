
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
        language: 'english'
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
            itemStyle={{color:'#3581fc',height:200}}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="Chinese" value="chinese" />
            <Picker.Item label="French" value="french" />
            <Picker.Item label="English" value="english" />
            <Picker.Item label="Italian" value="italian" />
            <Picker.Item label="Spanish" value="spanish" />
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
         fontWeight:'bold',
         color: '#595959',
         fontSize: 20,
         textAlign: 'center',
         paddingVertical: 10
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
        fontWeight:'bold'
    },
      modalContent: {
        height:300,
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
      },
});
