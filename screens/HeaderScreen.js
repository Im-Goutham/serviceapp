import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
    Text, TouchableHighlight
} from 'react-native';
import { scale, height } from '../global';
let border_img = require('../images/border_img.png');

class HeaderScreen extends Component {
    render() {
        return (
            <View style={{ flex: 0 }}>
                {this.props.header}
                {this.props.content}
                <View style={{ width: '100%' }}>
                    <Image source={border_img} style={{
                        width: '100%',
                        height: Platform.OS === 'ios' ?
                            height > 800 ? scale(31) : height > 580 ? scale(36) : scale(31)
                            : scale(35)
                    }} resizeMode="contain" resizeMethod="resize" />
                    <View style={{ height: scale(20), backgroundColor: "#F9FCFF" }} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modal: {
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    modal2: {
        height: scale(230),
        backgroundColor: "#3B5998"
    },
    modal3: {
        height: scale(300),
        width: scale(300)
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scale(100),
        height: scale(40),
        borderRadius: scale(20),
        paddingTop: scale(5),
        paddingBottom: scale(5),
    },
})
export default HeaderScreen;