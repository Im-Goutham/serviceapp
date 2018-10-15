import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
    Text, TouchableHighlight,
    AsyncStorage,
    PixelRatio
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Icon } from 'native-base'
import Advertisement from '../components/Advertisement';
import { connect } from 'react-redux';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import * as actions from '../actions';
import { scale } from '../global';
import HeaderScreen from './HeaderScreen';
import SearchBar from '../components/SearchBar';
let menu = require('../assets/icons/menu.png');
let logo = require('../images/logo.png');

class HomeScreen extends Component {
    constructor(props) {
        super(props);
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
                { name: 'George', image: null },
                { name: 'Billy', image: require('../images/svp1.png') },
                { name: 'George', image: require('../images/svp1.png') },
                { name: 'Luis', image: require('../images/svp2.png') },
                { name: 'Clayton', image: null },
            ],
            screens: [
                {
                    title: "Find Jobs",
                    iconname: require('../assets/icons/search.png'),
                    routename: "findJobs"
                },
                {
                    title: "Post a Job",
                    iconname: require('../assets/icons/post.png'),
                    routename: "postJob"
                },
                {
                    title: "Find Help",
                    iconname: require('../assets/icons/help.png'),
                    routename: "findHelp"
                },
                {
                    title: "My Jobs",
                    iconname: require('../assets/icons/list.png'),
                    routename: "myJobs"
                },
                {
                    title: "Favourites",
                    iconname: require('../assets/icons/heart.png'),
                    routename: "favourites"
                },
                {
                    title: "Notifications",
                    iconname: require('../assets/icons/bell.png'),
                    routename: "notifications"
                },
                {
                    title: "Chats",
                    iconname: require('../assets/icons/chat.png'),
                    routename: "chats"
                },
                {
                    title: "My Requests",
                    iconname: require('../assets/icons/navigation.png'),
                    routename: "myRequests"
                },
                {
                    title: "Track Now",
                    iconname: require('../assets/icons/location.png'),
                    routename: "trackNow"
                },
                {
                    title: "My Account",
                    iconname: require('../assets/icons/account.png'),
                    routename: "account"
                },
                {
                    title: "Subscription",
                    iconname: require('../assets/icons/subscribe.png'),
                    routename: "subscription"
                },
                {
                    title: "Settings",
                    iconname: require('../assets/icons/settings.png'),
                    routename: "settings"
                }
            ]
        }
    }
    navigateToScreen = (route) => () => {
        // const navigateAction = NavigationActions.navigate({
        //   routeName: route
        // });
        // console.log('route is ',route);
        this.props.showBackButton(true);
        this.props.navigation.navigate(route);
        // this.props.navigation.navigate({
        //     screen: route,
        //     params: {},
        //     transitionConfig: {}
        //   })
        // const navigateAction = NavigationActions.navigate({
        //   routeName: route,
        //   params: {backButton: false},
        //   action: NavigationActions.navigate({ routeName: route, params: {backButton: false}})
        // })
        // // this.props.navigation.navigate(route,{backButton: true});
        //   this.props.navigation.dispatch(navigateAction);
        //   // this.props.navigation.navigate(route,{name:'Goutham1222'});
    }
    render() {
        let { categories, serviceProviders, screens } = this.state;
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
                                is_home={true}
                                navigation={this.props.navigation}
                                left={
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.openDrawer()}
                                        style={{ width: scale(54), height: scale(54), justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={menu} style={{ width: '100%', height: scale(20) }} resizeMode="contain" resizeMethod="resize" />
                                    </TouchableOpacity>
                                }
                                title={
                                    <View style={{ backgroundColor: "transparent", justifyContent: 'center', width: '100%', alignItems: 'flex-start', height: scale(54), paddingTop: scale(3) }}>
                                        <Image source={logo} style={{ width: scale(140), height: scale(24) }} resizeMode="contain" resizeMethod="resize" />
                                    </View>
                                }
                                right={
                                    <View style={{ backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection: "row" }}>
                                        <TouchableOpacity onPress={this.navigateToScreen('account')} style={{ width: "75%", height: scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center' }}>
                                            <Image source={require('../images/svp1.png')} style={{ width: scale(36), height: scale(36), borderRadius: scale(18), borderWidth: scale(3), borderColor: 'white', overflow: 'hidden' }} resizeMode="contain" resizeMethod="resize" />
                                        </TouchableOpacity>
                                    </View>
                                }
                            />
                        }
                        content={
                            <View style={{ backgroundColor: "transparent", justifyContent: "space-between", paddingTop: scale(10), paddingBottom: scale(20), marginHorizontal: scale(10) }}>
                                <SearchBar placeholder={'Search here...'} />
                            </View>
                        }
                    />

                    <View style={{ backgroundColor: "rgb(249,252, 255)", flex: 1 }}>
                        <ScrollView contentContainerStyle={{
                            justifyContent: 'space-between'
                        }}>

                            <View style={{ backgroundColor: 'rgb(249, 252, 255)', paddingHorizontal: scale(15), paddingBottom: scale(30), justifyContent: 'space-between' }}>
                                <View style={{ flex: 1, marginHorizontal: scale(-14) }}>
                                    <Carousel />
                                </View>
                                <View style={[styles.servicesBox, { paddingVertical: 0 }]}>
                                    <View style={styles.categoryContainer}>
                                        {
                                            screens ? (
                                                screens.map((screen, key) => {
                                                    return <TouchableOpacity key={key} onPress={this.navigateToScreen(screen.routename)}>
                                                        <View style={styles.mainBox} key={key}>
                                                            <View style={styles.mainCategoryBox}>
                                                                <Image source={screen.iconname} style={{ width: scale(40), height: scale(40) }} resizeMode='contain' resizeMethod='resize' />
                                                            </View>
                                                            <Text style={styles.screenNameStyle}>{screen.title}</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                })
                                            ) : null
                                        }
                                    </View>
                                </View>
                                <View style={styles.servicesBox}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={styles.textStyle}>Home Interior</Text>
                                        <TouchableOpacity onPress={this.navigateToScreen('findJobs')}>
                                            <Text style={styles.view}>VIEW ALL</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scale(20) }}>
                                        <ScrollView
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                        >
                                            {
                                                categories ? (
                                                    categories.map((category, key) => {
                                                        return <View style={styles.categoryBox} key={key}>
                                                            <View style={styles.imageShadow}>
                                                                <Image source={category.image} style={styles.img_placeholder} />
                                                            </View>
                                                            <Text style={styles.categoryStyle}>{category.name}</Text>
                                                        </View>
                                                    })
                                                ) : null
                                            }
                                        </ScrollView>
                                    </View>
                                </View>
                                <View style={styles.servicesBox}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={styles.textStyle}>See other Service Providers</Text>
                                        <TouchableOpacity onPress={this.navigateToScreen('findHelp')}>
                                            <Text style={styles.view}>VIEW ALL</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scale(20) }}>
                                        <ScrollView
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                        >
                                            {
                                                serviceProviders ? (
                                                    serviceProviders.map((provider, key) => {
                                                        return <View style={styles.categoryBox} key={key}>
                                                            <View style={styles.imageShadow}>
                                                                <Image source={provider.image ? provider.image : require('../images/name_placeholder.png')} style={[styles.img_placeholder, { borderRadius: 35, width: 70, height: 70 }]} />
                                                                <Image source={require('../images/check.png')} style={styles.check} />
                                                                {
                                                                    (!provider.image) ? (
                                                                        <Text style={styles.letter} >
                                                                            {provider.name[0]}
                                                                        </Text>
                                                                    ) : (null)
                                                                }

                                                            </View>
                                                            <Text style={styles.categoryStyle}>{provider.name}</Text>
                                                        </View>
                                                    })
                                                ) : null
                                            }
                                        </ScrollView>
                                    </View>
                                </View>
                                <View style={styles.servicesBox}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={styles.textStyle}>Cars and Vehicles</Text>
                                        <TouchableOpacity onPress={this.navigateToScreen('findJobs')}>
                                            <Text style={styles.view}>VIEW ALL</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scale(20) }}>
                                        <ScrollView
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                        >
                                            {
                                                categories ? (
                                                    categories.map((category, key) => {
                                                        return <View style={styles.categoryBox} key={key}>
                                                            <View style={styles.imageShadow}>
                                                                <Image source={category.image} style={styles.img_placeholder} />
                                                            </View>
                                                            <Text style={styles.categoryStyle}>{category.name}</Text>
                                                        </View>
                                                    })
                                                ) : null
                                            }
                                        </ScrollView>
                                    </View>
                                </View>
                            </View>
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
        fontFamily: 'Montserrat-Bold',
    },
    borderImg: { width: '100%', height: scale(31) },
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
        elevation: 3,
    },
    view: {
        fontSize: scale(12),
        color: '#3E85EF',
        fontFamily: 'Montserrat-Medium',
    },
    textStyle: {
        fontFamily: "Montserrat-SemiBold",
        color: '#22262C',
        fontSize: scale(17)
    },
    categoryContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: scale(16),
        fontFamily: 'Montserrat-Bold',
    },
    categoryBox: {
        flexDirection: 'column',
        width: scale(100),
    },
    imageShadow: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
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
        height: scale(18),
        borderRadius: scale(9),
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    letter: {
        position: 'absolute',
        top: scale(22),
        left: scale(25),
        fontFamily: 'Montserrat-Regular',
        color: '#4A4A4A',
        fontSize: scale(22)
    },
    mainBox: { width: scale(90), height: scale(110), marginHorizontal: scale(5), marginVertical: scale(20) },
    screenNameStyle: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        color: '#4A4A4A',
        fontSize: scale(14),
        textAlign: 'center'
    },
    mainCategoryBox: {
        paddingVertical: scale(10),
        flexDirection: 'column',
        width: '100%',
        height: scale(70),
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryStyle: { fontFamily: 'Montserrat-Regular', paddingVertical: scale(10), color: '#4A4A4A', fontSize: scale(14) }
})
export default connect(null, actions)(HomeScreen);
