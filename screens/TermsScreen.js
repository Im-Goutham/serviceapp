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


class TermsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
              
        };
  
    }
   

    render() {
        
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Terms & Conditions</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
   
})
export default TermsScreen;
