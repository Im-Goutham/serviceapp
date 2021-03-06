import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
    Text
} from 'react-native';
import Swiper from 'react-native-swiper';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { Share } from 'react-native';
import HeaderScreen from './HeaderScreen';
import PhotoGallery from '../components/PhotoGallery';
import Documents from '../components/Documents';
import { scale } from '../global';
let logo = require('../images/logo.png');
let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/arrow_left.png');
let border_img = require('../images/border_img.png');

export default class ServiceProviderDetailScreen extends Component {
    constructor() {
        super();
        this.state = {
            categories: [
                { name: 'Repair', image: require('../images/cat1.png') },
                { name: 'Wallpaper', image: require('../images/cat2.png') },
                { name: 'Wallpaper', image: require('../images/cat3.png') },
                { name: 'Flooring', image: require('../images/cat4.png') },
                { name: 'Watering', image: require('../images/cat1.png') },
                { name: 'Electrician', image: require('../images/cat2.png') },
                { name: 'Plumbing', image: require('../images/cat3.png') },
            ],
            serviceProviders: [
                { name: 'Clayton', image: require('../images/svp1.png') },
                { name: 'Luis', image: require('../images/svp2.png') },
                { name: 'Billy', image: require('../images/svp1.png') },
                { name: 'George', image: require('../images/svp1.png') },
                { name: 'Luis', image: require('../images/svp2.png') },
            ],
            videos: [
                {
                    name: 'video1.jpg',
                    image: require('../images/documents/video1.png')
                },
                {
                    name: 'video2.jpg',
                    image: require('../images/documents/video2.png')
                }
            ],
            websites: [
                {
                    name: 'video1.jpg',
                    image: require('../images/documents/website1.png')
                },
            ],
            profiles: [
                {
                    name: 'profile1.jpg',
                    image: require('../images/documents/profile1.png')
                },
            ],
            tags: ['Plumber', 'Tree Service', 'Fencing', 'Mounting and Installing', 'Painting', 'Hair'],
            liked: true
        };
    }
    renderJobDetail() {
        let { videos, websites, profiles, tags } = this.state;
        return (
            <ScrollView >
                <View style={styles.container}>
                    <PhotoGallery />
                    <View style={styles.desc}>
                        <View style={styles.budget}>
                            <View style={{ flex: 1, flexDirection: "row", height: scale(40), justifyContent: 'flex-start', alignItems: "center" }}>
                                <Text style={styles.budgettext}>Budget:</Text>
                                <Text style={styles.pricetext}>$240</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", height: scale(40), backgroundColor: "transparent", justifyContent: 'flex-end', alignItems: "center" }}>
                                <Image source={require('../assets/icons/map_location_red.png')} style={styles.pinimage} resizeMode="contain" resizeMethod="resize" />
                                <Text style={styles.distance}>3 mi</Text>
                            </View>
                        </View>
                        <View style={styles.deadline}>
                            <Text style={styles.title}>Need it done before</Text>
                            <Text style={styles.date}>10 jul 2018, 6:44 PM</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={styles.detaildesc}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    <Image source={require('../assets/icons/plus.png')} style={[styles.pinimage, { height: 20 }]} resizeMode="contain" resizeMethod="resize" />
                            </Text>
                        </View>
                    </View>
                    <View style={styles.servicesBox}>
                        <View >
                            <Text style={[styles.textStyle, { paddingBottom: scale(20) }]}>Area of Services</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {
                                tags.map((tag, key) => {
                                    return (
                                        <Text style={styles.tagStyle} key={key}>{tag}</Text>
                                    )
                                })
                            }

                        </View>
                    </View>
                    <View style={styles.servicesBox}>
                        <View >
                            <Text style={[styles.textStyle, { paddingBottom: scale(20) }]}>Video Link</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Documents documents={videos} placeholder={false} />
                        </View>
                    </View>
                    <View style={styles.servicesBox}>
                        <View>
                            <Text style={[styles.textStyle, { paddingBottom: scale(20) }]}>Website Link</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Documents documents={profiles} placeholder={false} />
                        </View>
                    </View>
                    <View style={styles.servicesBox}>
                        <View>
                            <Text style={[styles.textStyle, { paddingBottom: scale(20) }]}>Linkedin Profile Link</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Documents documents={profiles} placeholder={false} />
                        </View>
                    </View>
                </View>
                <LinearGradient
                    colors={['#3E85EF', '#3EBDEF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        paddingVertical: scale(10),
                        marginTop: scale(20)
                    }}>
                    <TouchableOpacity
                        style={{ height: scale(64), justifyContent: "center", alignItems: "center" }}
                        onPress={() => { this.props.navigation.navigate('select') }}
                    >
                        <Text style={{ fontFamily: "Montserrat-bold", fontSize: scale(18), color: "#fff" }}>HIRE NOW</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ScrollView>
        )
    }

    shareJob() {
        Share.share({
            message: 'BAM: we\'re helping your business with awesome React Native apps',
            url: 'http://bam.tech',
            title: 'Wow, did you see that?'
        }, {
                // Android only:
                dialogTitle: 'Share BAM goodness',
                // iOS only:
                excludedActivityTypes: [
                    'com.apple.UIKit.activity.PostToTwitter'
                ]
            })
    }
    render() {
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
                                    <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: "100%", height: scale(54) }}>
                                        <Text style={{ fontFamily: 'Montserrat-Bold', color: "#fff", fontSize: scale(20) }}>Need Cook</Text>
                                    </View>
                                }
                                right={
                                    <View style={{ backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection: "row" }}>
                                        <TouchableOpacity
                                            style={{ width: "50%", height: scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center' }}
                                            onPress={() => this.setState({ liked: !this.state.liked })}
                                        >
                                            <Image source={this.state.liked ? require('../assets/icons/heart_red.png') : require('../assets/icons/heart_white.png')} style={{ width: '100%', height: scale(20) }} resizeMode="contain" resizeMethod="resize" />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={{ width: "50%", height: scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center' }}
                                            onPress={() => { this.shareJob() }}
                                        >
                                            <Image source={require('../assets/icons/send_white.png')} style={{ width: '100%', height: scale(20) }} resizeMode="contain" resizeMethod="resize" />
                                        </TouchableOpacity>
                                    </View>
                                }
                            />
                        }
                    />
                    <Swiper
                        showsButtons={false}
                        dot={<View />}
                        activeDot={<View />}
                        style={{ backgroundColor: "rgb(249,252, 255)" }}
                    >
                        <View style={{ flex: 1 }}>
                            {this.renderJobDetail()}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderJobDetail()}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderJobDetail()}
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderJobDetail()}
                        </View>
                    </Swiper>
                </LinearGradient>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('message') }}>
                    <LinearGradient
                        colors={['#3E85EF', '#3EBDEF']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                            bottom: scale(30),
                            right: scale(10),
                            width: scale(60), height: scale(60), backgroundColor: "blue", justifyContent: "center", alignItems: "center", position: "absolute",
                            borderRadius: scale(40)
                        }}>
                        <Image source={require('../assets/icons/chat_white.png')} style={{ width: "100%", height: scale(30) }} resizeMode="contain" resizeMethod="resize" />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FCFF",
        paddingHorizontal: scale(10)
    },
    desc: {
        // borderWidth:StyleSheet.hairlineWidth,
        paddingHorizontal: scale(20),
        marginTop: scale(10),
        borderRadius: scale(10),
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3
    },
    budget: {
        height: scale(54),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor:"#666"
    },
    tagStyle: {
        backgroundColor: 'rgb(239,186,47)',
        borderRadius: scale(10),
        overflow: "hidden",
        paddingVertical: scale(2),
        paddingHorizontal: scale(10),
        marginBottom: scale(10),
        color: 'white',
        fontSize: scale(14),
        marginRight: scale(10),
        fontFamily: 'Montserrat-Bold'
    },
    budgettext: {
        fontSize: scale(15),
        color: "rgb(74,74,74)",
        fontFamily: "Montserrat-Bold"
    },
    pricetext: {
        fontSize: scale(15),
        paddingHorizontal: scale(10),
        color: "#009933"
    },
    pinimage: {
        width: scale(16),
        height: scale(16)
    },
    distance: {
        fontSize: scale(15),
        paddingHorizontal: scale(10),
        fontFamily: 'Montserrat-Regular',
        color: "rgb(90,90,90)"
    },
    deadline: {
        height: scale(54),
        justifyContent: "center"
    },
    title: {
        color: "rgb(244, 41, 34)",
        fontSize: scale(15),
        fontFamily: "Montserrat-SemiBold"
    },
    date: {
        color: "rgb(83,83,83)",
        fontSize: scale(14),
        paddingVertical: scale(5),
        fontFamily: "Montserrat-Regular"
    },
    detail: {
        paddingVertical: scale(10)
    },
    detaildesc: {
        fontFamily: "Montserrat-Medium",
        fontSize: scale(15),
        lineHeight: scale(25),
        color: "rgb(163,163,163)",
    },

    categorytitle: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: scale(14),
        paddingVertical: scale(3),
        color: "rgb(74,74,74)"
    },
    categorytext: {
        fontFamily: "Montserrat-Regular",
        paddingVertical: scale(5),
        fontSize: scale(13),
        color: "rgb(93,93,93)"
    },
    customerinfo: {
        // marginVertical:10,
        borderRadius: scale(10),
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        padding: scale(20)
    },
    servicesBox: {
        flex: 1,
        marginTop: scale(20),
        paddingHorizontal: scale(20),
        paddingVertical: scale(20),
        borderRadius: scale(10),
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3
    },
    textStyle: {
        fontFamily: "Montserrat-SemiBold",
        color: '#22262C',
        fontSize: scale(16)
    },
    categoryBox: {
        flexDirection: 'column',
        width: scale(100),
    },
    imageShadow: {
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3, shadowRadius: 2,
        elevation: 3,
    },
    img_placeholder: {
        width: scale(80),
        height: scale(80),
        borderRadius: scale(5),
        position: 'relative',
        top: 0,
        left: 0
    },
    check: {
        width: scale(18),
        height: 18,
        borderRadius: scale(9),
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    livetrackbox: {
        flexDirection: 'row',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 2,
        // elevation: 3
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        fontSize: scale(15)
    },
})