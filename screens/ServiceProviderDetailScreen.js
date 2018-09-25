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
import { Icon } from 'native-base'
import Advertisement from '../components/Advertisement';
import JobsList from '../components/JobsList';
import Map from '../components/Map';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modalbox';
import HeaderScreen from './HeaderScreen';
import PhotoGallery from '../components/PhotoGallery';
var { height, width } = Dimensions.get('window');
import Documents from '../components/Documents';



let logo = require('../images/logo.png');
let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/back-arrow.png');
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
                { name: 'Pluming', image: require('../images/cat3.png') },
            ],
            serviceProviders: [
                { name: 'Clayton', image: require('../images/svp1.png') },
                { name: 'Luis', image: require('../images/svp2.png') },
                { name: 'George', image: require('../images/svp3.png') },
                { name: 'Billy', image: require('../images/svp1.png') },
                { name: 'George', image: require('../images/svp1.png') },
                { name: 'Luis', image: require('../images/svp2.png') },
                { name: 'Clayton', image: require('../images/svp3.png') },
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
            tags: ['Plumber', 'Tree Service', 'Fencing', 'Mounting and Installing', 'Painting', 'Hair']
        };
    }


    renderJobDetail(){
        console.log('params are .. ',this.props.navigation.state);
       
        let i=1
        let { videos, websites, profiles,tags} = this.state;
         return (
            <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['rgb(60, 139, 239)', 'rgb(60,187, 239)']}
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
                                  <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                    <TouchableOpacity  onPress={() => this.props.navigation.goBack()}  style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                    <Image source={back_arrow} style={{ width: '50%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                    <Image source={menu} style={{ width: '50%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                    </TouchableOpacity>
                                </View>
                            }
                            title={
                                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: "100%", height: 54 }}>
                                  <Text style={{ fontFamily: 'Montserrat-Bold', color: "#fff", fontSize: 20 }}>Need Cook</Text>
                                </View>
                            }
                            right={
                                <View style={{ backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection: "row" }}>
                                      <TouchableOpacity style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                         <Image source={require('../assets/icons/heart_red.png')} style={{ width: '100%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                        <Image source={require('../assets/icons/send_white.png')} style={{ width: '100%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    }
                />
                <ScrollView >
                    <View style={styles.container}>
                        <PhotoGallery />
                        <View style={styles.desc}>
                            <View style={styles.budget}>
                                <View style={{ flex:1,flexDirection: "row", height: 40, justifyContent: 'flex-start', alignItems: "center" }}>
                                    <Text style={styles.budgettext}>Budget:</Text>
                                    <Text style={styles.pricetext}>$240</Text>
                                </View>
                                <View style={{ flex:1,flexDirection: "row", height: 40,backgroundColor: "transparent", justifyContent: 'flex-end', alignItems: "center" }}>
                                    <Image source={require('../assets/icons/location_red.png')} style={styles.pinimage} resizeMode="contain" resizeMethod="resize" />
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
                                </Text>
                            </View>
                        </View>
                        <View style={styles.servicesBox}>
                            <View style={{marginVertical:20}}>
                                <Text style={styles.textStyle}>Area of Services</Text>
                            </View>
                            <View style={{flexDirection: 'row',flexWrap:'wrap'}}>
                               {
                                    tags.map((tag,key)=>{
                                         return (
                                             <Text style={styles.tagStyle} key={key}>{tag}</Text>
                                         )
                                    })
                               }
                                
                            </View>
                        </View>
                        <View style={styles.servicesBox}>
                            <View style={{marginVertical:20}}>
                                <Text style={styles.textStyle}>Video Link</Text>
                            </View>
                            <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <Documents documents={videos}  placeholder={false}/>
                            </View>
                        </View>
                        <View style={styles.servicesBox}>
                            <View style={{marginVertical:20}}>
                                <Text style={styles.textStyle}>Website Link</Text>
                            </View>
                            <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <Documents documents={profiles} placeholder={false}/>
                            </View>
                        </View>
                        <View style={styles.servicesBox}>
                            <View style={{marginVertical:20}}>
                                <Text style={styles.textStyle}>Linkedin Profile Link</Text>
                            </View>
                            <View style={{flexDirection: 'row',alignItems:'center'}}>
                            <Documents documents={profiles}  placeholder={false}/>
                            </View>
                        </View>
                    </View>
                            <View style={{
                                height: Platform.OS === 'ios' ? 100 : 64,
                                backgroundColor: "transparent",
                                justifyContent: "flex-start"
                            }}>
                                <TouchableOpacity
                                    style={{height: 64, justifyContent: "center", alignItems: "center"}}>
                                    <Text style={{fontFamily: "Montserrat-bold", fontSize: 20, color: "#fff"}}>HIRE NOW</Text>
                                </TouchableOpacity>
                            </View>

                </ScrollView>
            </LinearGradient>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('message')}}>
              <LinearGradient
                    colors={['rgb(60, 139, 239)', 'rgb(60,187, 239)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        bottom: 30,
                        right: 10,
                        width: 60, height: 60, backgroundColor: "blue", justifyContent: "center", alignItems: "center", position: "absolute",
                        borderRadius: 40
                    }}>
                       <Image source={require('../assets/icons/chat_white.png')} style={{ width: "100%", height: 30 }} resizeMode="contain" resizeMethod="resize" />
                </LinearGradient>
                </TouchableOpacity>
        </View>
         )
    }
    render() {

      
        return (
            <Swiper 
             showsButtons={false}
             dot={<View/>}
             activeDot={<View/>}
            >
                <View style={{flex:1}}>
                   {this.renderJobDetail()}
                </View>
                <View style={{flex:1}}>
                  {this.renderJobDetail()}
                </View>
                <View style={{flex:1}}>
                  {this.renderJobDetail()}
                </View>
                <View style={{flex:1}}>
                  {this.renderJobDetail()}
                </View>
            </Swiper>  
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FCFF",
        paddingHorizontal: 10
    },
    desc: {
        // borderWidth:StyleSheet.hairlineWidth,
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3
    },
   
    budget: {
        height: 54,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor:"#666"
    },
    tagStyle:{
        backgroundColor: 'rgb(239,186,47)',
        borderRadius:10,
        overflow:"hidden",
        paddingVertical:2,
        paddingHorizontal:10,
        marginBottom:10,
        color: 'white',
        marginRight: 10,
        fontFamily: 'Montserrat-Bold'
    },
    budgettext: {
        fontSize: 15,
        color: "rgb(74,74,74)",
        fontFamily: "Montserrat-Bold"
    },
    pricetext: {
        fontSize: 15,
        paddingHorizontal: 10,
        color: "#009933"
    },
    pinimage: {
        width: 16,
        height: 16
    },
    distance: {
        fontSize: 15,
        paddingHorizontal: 10,
        fontFamily: 'Montserrat-Regular',
        color: "rgb(90,90,90)"
    },
    deadline: {
        height: 54,
        justifyContent: "center"
    },
    title: {
        color: "rgb(244, 41, 34)",
        fontSize: 15,
        fontFamily: "Montserrat-SemiBold"
    },
    date: {
        color: "rgb(83,83,83)",
        fontSize: 14,
        paddingVertical: 5,
        fontFamily: "Montserrat-Regular"
    },
    detail: {
        paddingVertical: 10
    },
    detaildesc: {
        fontFamily: "Montserrat-Medium",
        fontSize: 15,
        lineHeight: 25,
        color: "rgb(163,163,163)",
    },
   
    categorytitle: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 14,
        paddingVertical: 3,
        color: "rgb(74,74,74)"
    },
    categorytext: {
        fontFamily: "Montserrat-Regular",
        paddingVertical: 5,
        fontSize: 13,
        color: "rgb(93,93,93)"
    },
    customerinfo: {
        // marginVertical:10,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        padding: 20
    },
    servicesBox: {
        flex: 1,
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3
    },
    textStyle: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 16
    },
    categoryBox: {
        flexDirection: 'column',
        width: 100,
    },
    imageShadow: {
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3, shadowRadius: 2,
        elevation: 3,
    },
    img_placeholder: {
        width: 80,
        height: 80,
        borderRadius: 5,
        position: 'relative',
        top: 0,
        left: 0
    },
    check: {
        width: 18,
        height: 18,
        borderRadius: 9,
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    livetrackbox:{
        flexDirection : 'row',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 2,
        // elevation: 3
    }
})