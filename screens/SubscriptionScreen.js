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
import { connect } from 'react-redux';
import * as actions from '../actions';
import { scale } from '../global';
var { height, width } = Dimensions.get('window');
let logo = require('../images/logo.png');
let back_arrow = require('../assets/icons/arrow_left.png');
let menu = require('../assets/icons/menu.png');
let border_img = require('../images/border_img.png');

let maplocations = {
    data: [
        {
            jobtitle: 'Need Cook',
            icon: require('../assets/icons/crown.png'),
            image: require('../images/cook.png'),
            detail: "Lorem Ipsum has been the industrys standard dummy text ever",
        },
        {
            jobtitle: 'Need Carpenter',
            icon: require('../assets/icons/crown.png'),
            image: require('../images/tutorial.png'),
            detail: "Lorem Ipsum has been the industrys standard dummy text ever",
        },
        {
            jobtitle: 'Need Cook',
            icon: require('../assets/icons/crown.png'),
            image: require('../images/tutorial.png'),
            detail: "Lorem Ipsum has been the industrys standard dummy text ever",
        }
    ]
}
class SubscriptionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabindex: 0
        }
    }
    contentrender() {
        return (
            <View >
                <View style={styles.servicesBox}>
                    <View style={{ marginHorizontal: scale(20) }}><Text style={{ color: 'rgb(62,136,235)', fontFamily: 'Montserrat-Bold', fontSize: scale(13) }}>Most Popular</Text></View>
                    <View style={[styles.mainBox, { borderBottomWidth: 1, borderBottomColor: 'rgb(237,237,237)', paddingVertical: scale(10) }]}>
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={styles.textStyle}>Yearly</Text>
                            <Text style={styles.subTextStyle}>Subscription</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={styles.textStyle}>80 pts.</Text>
                            <Text style={styles.subTextStyle}>/year</Text>
                        </View>
                    </View>
                    <View style={{ padding: scale(10) }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 6, borderWidth: 1, borderColor: 'white' }}><Image source={require('../assets/icons/tick_green.png')} style={[styles.tick]} resizeMode="contain" resizeMethod="resize" /><Text style={[styles.subTextStyle, { paddingRight: 10 }]} >Full access to the app</Text></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 6, borderWidth: 1, borderColor: 'white' }}><Image source={require('../assets/icons/tick_green.png')} style={styles.tick} resizeMode="contain" resizeMethod="resize" /><Text style={[styles.subTextStyle]}>Provide unlimited services</Text></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 6, borderWidth: 1, borderColor: 'white' }}><Image source={require('../assets/icons/tick_green.png')} style={styles.tick} resizeMode="contain" resizeMethod="resize" /><Text style={[styles.subTextStyle]}>Upload more pictures & video links</Text></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 6, borderWidth: 1, borderColor: 'white' }}><Image source={require('../assets/icons/tick_green.png')} style={styles.tick} resizeMode="contain" resizeMethod="resize" /><Text style={[styles.subTextStyle, { paddingRight: 10 }]}>Longer tracking available before & after the appointment date.</Text></View>
                        <View>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('home') }}><Text style={styles.btnText}>SELECT</Text></TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
                <View style={styles.servicesBox}>
                    <View style={styles.mainBox}>
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={styles.textStyle}>Monthly</Text>
                            <Text style={styles.subTextStyle}>Subscription</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={styles.textStyle}>10 pts.</Text>
                            <Text style={styles.subTextStyle}>/month</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        let { backButton } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient
                    colors={['#3E85EF', '#3EBDEF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        flex: 1
                    }}>
                    <Header
                        navigation={this.props.navigation}
                        left={
                            <View style={{ backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection: "row" }}>
                                {
                                    (backButton) ? (
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('homePage')} style={{ width: "50%", height: scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center' }}>
                                            <Image source={back_arrow} style={{ width: '50%', height: scale(20) }} resizeMode="contain" resizeMethod="resize" />
                                        </TouchableOpacity>
                                    ) : (null)
                                }
                                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{ width: !backButton ? scale(54) : "50%", height: scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center' }}>
                                    <Image source={menu} style={{ width: !backButton ? '100%' : '50%', height: scale(20) }} resizeMode="contain" resizeMethod="resize" />
                                </TouchableOpacity>
                            </View>
                        }
                        title={
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', height: scale(54) }}>
                                <Text style={{ fontFamily: 'Montserrat-Bold', color: "#fff", fontSize: scale(20) }}>Subscriptions</Text>
                            </View>
                        }
                    />
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                        <View style={{ backgroundColor: "transparent", paddingVertical: scale(30) }}>
                            {this.contentrender()}
                        </View>
                        <View style={{ width: '100%' }}>
                                <Image source={require('../images/border_img.png')} style={{ 
                            width: '100%', 
                            height: Platform.OS==='ios'? 
                            height > 800 ? scale(31): height > 580 ? scale(37) :  scale(31)
                            : scale(35)
                            }}  resizeMode="contain" resizeMethod="resize" />
                        </View>
                        <View style={{ backgroundColor: "rgb(249,252, 255)", flex: 1, paddingHorizontal: scale(20), paddingBottom: scale(30) }}>
                            <View>
                                <Text style={[styles.textStyle, { textAlign: 'center' }]}>0</Text>
                                <Text style={[styles.subTextStyle, { color: 'rgb(34,38,34)', textAlign: 'center', fontSize: scale(15) }]}>Points</Text>
                            </View>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('home') }}><Text style={styles.btnText}>ADD CREDIT</Text></TouchableOpacity>
                            </LinearGradient>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Image source={require('../images/card.png')} resizeMode="contain" resizeMethod="resize" style={{ marginHorizontal: scale(5), width: scale(28), height: scale(28), marginTop: scale(10) }} />
                                <Image source={require('../images/paypal.png')} resizeMode="contain" resizeMethod="resize" style={{ marginHorizontal: scale(5), width: scale(20), height: scale(20), marginTop: scale(15) }} />
                                <Text style={{ textAlign: 'center', paddingVertical: scale(15), fontSize: scale(12), fontFamily: 'Montserrat-Medium', color: '#22262C' }}>Accept PayPal & All Credit & Debit cards</Text>
                            </View>
                        </View>
                    </ScrollView>
                </LinearGradient>
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
        // borderWidth: 1,
        // borderColor: '#008000',
        paddingTop: scale(5),
        paddingBottom: scale(5),
    },
    servicesBox: {
        marginVertical: scale(5),
        marginHorizontal: scale(10),
        paddingVertical: scale(15),
        borderRadius: scale(10),
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    mainBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: scale(20),
        paddingVertical: scale(5)
    },
    textStyle: {
        fontSize: scale(24),
        paddingBottom: scale(10),
        color: '#22262C',
        fontFamily: 'Montserrat-Bold'
    },
    subTextStyle: {
        fontSize: scale(15),
        fontFamily: 'Montserrat-Medium',
        color: '#9B9B9B'
    },
    button: {
        backgroundColor: '#4A4A4A',
        width: '100%',
        borderRadius: scale(30),
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: scale(10),
        paddingTop: scale(16),
        paddingBottom: scale(16),
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: scale(17),
        fontFamily: 'Montserrat-Bold'
    },
    tick: {
        height: scale(15),
        width: scale(15),
        marginTop: scale(2),
        marginHorizontal: scale(10),
    }
})
const mapStateToProps = state => ({
    backButton: state.user.backButton,
})
export default connect(mapStateToProps, actions)(SubscriptionScreen);