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
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import HeaderScreen from './HeaderScreen';
import SearchBar from '../components/SearchBar';
import { scale } from '../global';
let back_arrow = require('../assets/icons/arrow_left.png');
let menu = require('../assets/icons/menu.png');

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.inputs = {};
    }
    handleTextChange = (newText) => this.setState({ value: newText });
    render() {
        let { popularCategories, allCategories } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient
                    colors={['#3E85EF', '#3EBDEF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        flex: 1
                    }}>
                    <HeaderScreen
                        header={
                            <Header
                                navigation={this.props.navigation}
                                left={
                                    <View style={{ backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection: "row" }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ width: "50%", height: scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center' }}>
                                            <Image source={back_arrow} style={{ width: '50%', height: scale(20) }} resizeMode="contain" resizeMethod="resize" />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{ width: "50%", height: scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center' }}>
                                            <Image source={menu} style={{ width: '50%', height: scale(20) }} resizeMode="contain" resizeMethod="resize" />
                                        </TouchableOpacity>
                                    </View>
                                }
                                title={
                                    <View style={{ justifyContent: 'center', alignItems: 'flex-start', height: scale(54) }}>
                                        <Text style={{ fontFamily: 'Montserrat-Bold', color: "#fff", fontSize: scale(20) }}>Search</Text>
                                    </View>
                                }
                                right={
                                    <View style={{ backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', height: scale(54), flexDirection: "row" }}>
                                        <Text style={{ fontFamily: 'Montserrat-Regular', color: "#fff", fontSize: scale(14) }}>Clear All</Text>
                                    </View>
                                }
                            />
                        }
                        content={
                            <View style={{ backgroundColor: "transparent", justifyContent: "space-between", paddingTop: scale(10), paddingBottom: scale(20), marginHorizontal: scale(10) }}>
                                <SearchBar placeholder={'Search here...'} showKeyBoard={true} />
                            </View>
                        }
                    />
                    <View style={{ backgroundColor: "rgb(249,252, 255)", flex: 1 }}>
                        <ScrollView contentContainerStyle={{
                            justifyContent: 'space-between'
                        }}>
                        </ScrollView>
                    </View>
                </LinearGradient>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    logoText: {
        color: 'white',
        textAlign: 'left',
        fontSize: scale(35),
        fontWeight: 'bold'
    },
    borderImg: { width: '100%', height: scale(31) },
})
export default SearchScreen;
