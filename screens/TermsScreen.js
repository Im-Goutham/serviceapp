import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView,
    Platform,
    Dimensions,
    TouchableWithoutFeedback, ImageBackground
} from 'react-native';
import {Icon} from 'native-base';


class TermsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
              
        };
  
    }
   

    render() {
        
        return (
            <ScrollView style={{backgroundColor:'white',paddingVertical:Platform.OS === 'ios'? 30: 0, paddingHorizontal:20 }}>
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor:'transparent',
                    borderBottomWidth:2,
                    borderBottomColor: 'rgb(223,223,223)',
                    paddingVertical:20,
                    }}>
                <View style={{flex:4}}>
                    <Text style={styles.heading}>Terms & Conditions</Text>
                    <Text style={{color:'rgb(161,161,161)'}}>Important information about our Terms. Please read thoroughly.</Text>
                </View>
                <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                        <Icon name="close" style={{}} onPress={() => {this.props.navigation.navigate('register');}}/>
                </View>
             </View>
             {/* Terms starts */}
              <View>
                  <View style={{flex:1,paddingVertical:20}}>
                       <Text style={styles.subHeading}>1. Terms</Text>
                       <Text style={styles.text}>Conversations can be a tricky business. Sometimes, decoding what is said with what is meant is difficult at best. However, communication is a necessary tool in todays world. And it's not only speaking that can be difficult, but trying to interpret body language, and other language barriers are just a few of the obstacles barring effective communication. It's often been the case where one party completely miscommunicates to other.</Text>
                  </View>
                  <View style={{flex:1,paddingVertical:20}}>
                       <Text style={styles.subHeading}>2. Privacy Policy</Text>
                       <Text style={styles.text}>Conversations can be a tricky business. Sometimes, decoding what is said with what is meant is difficult at best. However, communication is a necessary tool in todays world. And it's not only speaking that can be difficult, but trying to interpret body language, and other language barriers are just a few of the obstacles barring effective communication. It's often been the case where one party completely miscommunicates to other.</Text>
                  </View>
              </View>
             {/* Terms ends */}

            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
     heading: {
         color:'rgb(91,91,91)',
         fontFamily:'Montserrat-Bold',
         fontSize: 17,
         paddingBottom:3
        },
        subHeading: {
            color:'rgb(91,91,91)',
            fontFamily:'Montserrat-SemiBold',
            fontSize: 15,
            paddingBottom:3
        },
        text :{
            color :'rgb(110,110,110)',
            fontFamily:'Montserrat-Regular',
            lineHeight: 30
        }
})
export default TermsScreen;
