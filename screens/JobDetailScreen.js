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
import Share, {ShareSheet, Button} from 'react-native-share';
import HeaderScreen from './HeaderScreen';
import PhotoGallery from '../components/PhotoGallery';
import ApplyModal from '../components/ApplyModal';
import {scale} from '../global';



let logo = require('../images/logo.png');
let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/arrow_left.png');
let border_img = require('../images/border_img.png');

export default class JobDetailScreen extends Component {
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
                {name:'Clayton',image: require('../images/svp1.png')},
                {name:'Luis',image: require('../images/svp2.png')},
                {name:'George',image: null},
                {name:'Billy',image: require('../images/svp1.png')},
                {name:'George',image: require('../images/svp1.png')},
                {name:'Luis',image: require('../images/svp2.png')},
                {name:'Clayton',image: null},
              ],
            visible: false
        };
    }


    renderJobDetail(){
        console.log('params are .. ',this.props.navigation.state);

        let { serviceProviders } = this.state;
        console.log('pops rar',this.props.navigation)
         return (
        
                <ScrollView>
                    <View style={styles.container}>
                        <PhotoGallery />
                        <View style={styles.desc}>
                            <View style={styles.budget}>
                                <View style={{ flex:1,flexDirection: "row", height: scale(40), justifyContent: 'flex-start', alignItems: "center" }}>
                                    <Text style={styles.budgettext}>Budget:</Text>
                                    <Text style={styles.pricetext}>$240</Text>
                                </View>
                                <View style={{ flex:1,flexDirection: "row", height: scale(40),backgroundColor: "transparent", justifyContent: 'flex-end', alignItems: "center" }}>
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
                                    <Image source={require('../assets/icons/plus.png')} style={[styles.pinimage,{height:scale(20)}]} resizeMode="contain" resizeMethod="resize" />
                                </Text>
                            </View>
                        </View>
                        <View style={styles.category}>
                            <View style={styles.categoryrow}>
                                <View style={{ backgroundColor: "transparent", width: "50%", paddingHorizontal: scale(5) }}>
                                    <Text style={styles.categorytitle}>Category</Text>
                                    <Text style={styles.categorytext}>Event Planning</Text>
                                </View>
                                <View style={{ backgroundColor: "transparent", width: "50%", paddingHorizontal: scale(5) }}>
                                    <Text style={styles.categorytitle}>Sub Category</Text>
                                    <Text style={styles.categorytext}>Cook</Text>
                                </View>
                            </View>
                            <View style={styles.categoryrow}>
                                <View style={{ backgroundColor: "transparent", width: "50%", paddingHorizontal: scale(5) }}>
                                    <Text style={styles.categorytitle}>Job created on</Text>
                                    <Text style={styles.categorytext}>2 jul 2018, 08:00 AM</Text>
                                </View>
                                <View style={{ backgroundColor: "transparent", width: "50%", paddingHorizontal: scale(5) }}>
                                    <Text style={styles.categorytitle}>Job Id</Text>
                                    <Text style={styles.categorytext}>JB5487</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.customerinfo}>
                            <Text style={styles.textStyle}>Customer's info</Text>
                            <View style={{ flexDirection: "row", paddingVertical: scale(10) }}>
                                <View style={{ flex: 2}}>
                                    <Image source={require('../images/svp2.png')} style={{ width: "100%", height: scale(70) }} resizeMode="contain" resizeMethod="resize" />
                                </View>
                                <View style={{  flex: 8, justifyContent: "space-between",paddingHorizontal:scale(10) }}>
                                    <View style={{ flexDirection: "row", }} >
                                        <Text style={{ fontFamily: "Montserrat-Medium", fontSize: scale(16),color:'#22262C' }}>Trevors S.</Text>
                                        <Image source={require('../assets/icons/crown.png')} style={{ width: scale(20), height: scale(20), paddingHorizontal: scale(20) }} resizeMode="contain" resizeMethod="resize" />
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: scale(5) }}>
                                        <View style={{ flexDirection: "row", borderRightWidth: 0.3, paddingRight: scale(10) }} >
                                            <Image source={require('../assets/icons/star_gold.png')} style={{ width: scale(15), height: scale(15) }} resizeMode="contain" resizeMethod="resize" />
                                            <Text style={{
                                                fontSize: scale(14),
                                                color: "#4A4A4A",
                                                fontFamily: "Montserrat-Bold",
                                                // paddingRight: 10
                                            }}> 4 </Text>
                                        </View>
                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('rating')}}>
                                            <Text style={{
                                                fontSize: scale(14),
                                                color: "#3E85EF",
                                                fontFamily: "Montserrat-Medium",
                                                paddingLeft: scale(10)
                                            }}> 2  Reviews</Text>
                                        </TouchableOpacity> 
                                    </View>
                                    <Text style={{
                                        fontSize: scale(14),
                                        color: "rgb(61, 133, 239)",
                                        fontFamily: "Montserrat-Medium"
                                    }}>Other posted jobs</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.servicesBox,{marginTop:scale(10)}]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textStyle}>See people who applied</Text>
                                <TouchableOpacity onPress={() => {this.props.navigation.navigate('allServiceProvider')}}><Text style={{ fontSize: scale(11), color: '#3E85EF', fontFamily: 'Montserrat-Medium' }}>VIEW ALL</Text></TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scale(20) }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    {
                                     serviceProviders ? (
                                      serviceProviders.map((provider,key)=>{
                                              return  <View style={styles.categoryBox} key={key}>
                                                          <View style={styles.imageShadow}>
                                                          <Image source={provider.image ? provider.image : require('../images/name_placeholder.png')} style={[styles.img_placeholder,{borderRadius:scale(35),width:scale(70),height:scale(70)}]}/>
                                                          <Image source={require('../images/check.png')} style={styles.check}/>
                                                          {
                                                              (!provider.image)?(
                                                                <Text style={styles.letter} >
                                                                    {provider.name[0]}
                                                                </Text>
                                                              ):(null)
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
                        {
                            this.props.navigation.state.routeName != "jobDetail" ?
                                <View style={styles.livetrackbox}>
                                    <TouchableOpacity style={{
                                        width: "50%",
                                        height: scale(120),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRightWidth: scale(2)
                                    }}>
                                        <Image source={require('../assets/icons/calander_black.png')}/>
                                        <TouchableOpacity style={{justifyContent: "center", alignItems: 'center'}}>
                                            <Text style={{
                                                fontSize: scale(14),
                                                color: "#3E85EF",
                                                fontFamily: "Montserrat-Medium"
                                            }}>{'Add to'}</Text>
                                            <Text style={{
                                                fontSize: scale(14),
                                                color: "#3E85EF",
                                                fontFamily: "Montserrat-Medium"
                                            }}>{'Google Calender'}</Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{
                                        width: "50%",
                                        height: scale(120),
                                        justifyContent: "center",
                                        alignItems: "center"}}>
                                        <Image source={require('../assets/icons/location_pin_black.png')}/>
                                        <TouchableOpacity style={{justifyContent: "center", alignItems: 'center'}}>
                                            <Text style={{
                                                // paddingVertical:10,
                                                fontSize: scale(14),
                                                color: "#3E85EF",
                                                fontFamily: "Montserrat-Medium"}}>
                                                {'Live track'}</Text>
                                            <Text style={{
                                                // paddingVertical:10,
                                                fontSize: scale(14),
                                                color: "#3E85EF",
                                                fontFamily: "Montserrat-Medium"}}>
                                                {'service provider'}</Text>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                                : <View/>
                        }
                        {
                            this.props.navigation.state.routeName != "jobDetail" ?
                                <LinearGradient
                                    colors={['#3E85EF', '#3EBDEF']}
                                    start={{x: 0, y: 0}}
                                    end={{x: 1, y: 0}} style={{
                                    borderRadius: scale(27),
                                    marginVertical: scale(10)
                                }}>
                                    <TouchableOpacity
                                        style={{height: scale(54), alignItems: "center", justifyContent: "center",}}>
                                        <Text style={{fontFamily: "Montserrat-bold", fontSize: scale(20), color: "#fff"}}>MARK
                                            JOB AS COMPLETED</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                                : <View/>
                        }
                        {
                            this.props.navigation.state.routeName != "jobDetail" ?
                                <TouchableOpacity style={{ height:scale(54),alignItems:"center", justifyContent:"center", borderRadius:scale(27), backgroundColor:"#fff", marginBottom: scale(10) }}>
                                    <Text style={{ fontFamily: "Montserrat-bold", fontSize: scale(20), color: "#666" }}>RATE & REVIEW</Text>
                                </TouchableOpacity>
                                :
                                <View/>
                        }
                    </View>
                    {
                            this.props.navigation.state.routeName === "jobDetail" ?
                            <LinearGradient
                            colors={['#3E85EF', '#3EBDEF']}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            style={{
                               paddingVertical: scale(10)
                            }}>
                                <TouchableOpacity
                                    style={{height: scale(64), justifyContent: "center", alignItems: "center"}}
                                    onPress={() => {this.setState({visible:true})}}
                                    >
                                    <Text style={{fontFamily: "Montserrat-bold", fontSize: scale(16), color: "#fff"}}>APPLY FOR THIS JOB</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            :
                            <View/>
                    }

                </ScrollView>
         )
    }


    shareJob() {
        console.log('share icon clicked')
        let shareOptions = {
            title: "Need Cook",
            message: "Eleifend suspendisse curae ur natoque leifend leifend suspendiss natoque ur n...",
            url: "http://facebook.github.io/react-native/",
            subject: "SpotJobs"
        };
        Share.open(shareOptions);
    }

    render() {

      let {visible} = this.state;
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
                                  <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                    <TouchableOpacity  onPress={() => this.props.navigation.goBack()}  style={{width: "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                    <Image source={back_arrow} style={{ width: '50%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{width: "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                    <Image source={menu} style={{ width: '50%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
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
                                        style={{width: "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}
                                        onPress={()=>{this.setState({liked : !this.state.liked})}}
                                        >
                                         <Image source={this.state.liked ? require('../assets/icons/heart_red.png') : require('../assets/icons/heart_white.png')} style={{ width: '100%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                      style={{width: "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}
                                      onPress={()=> this.shareJob()}
                                      >
                                        <Image source={require('../assets/icons/send_white.png')} style={{ width: '100%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                    </TouchableOpacity>
                                </View>
                            }
                        />
                    }
                />
            <Swiper 
             showsButtons={false}
             dot={<View/>}
             activeDot={<View/>}
             style={{backgroundColor :"rgb(249,252, 255)"}}
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
            </LinearGradient>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('message')}}>
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
                <ApplyModal visible={visible} closeModal={() => { this.setState({visible:false})}}/>
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
        marginVertical: scale(10),
        borderRadius: scale(10),
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3
    },
    category: {
        marginVertical: scale(10),
        paddingHorizontal: scale(20),
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
    categoryrow: {
        flexDirection: "row",
        justifyContent: "space-between",
        // height:100,
        alignItems: 'center',
        paddingTop: scale(20),
        paddingBottom: scale(10),

        // marginVertical:2,
        // backgroundColor:"red"
    },
    categorytitle: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: scale(14),
        paddingVertical: scale(3),
        color: "#4A4A4A"
    },
    categorytext: {
        fontFamily: "Montserrat-Regular",
        paddingVertical: scale(5),
        fontSize: scale(13),
        color: "#4A4A4A"
    },
    customerinfo: {
        marginVertical:scale(10),
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
        marginVertical: scale(20),
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
        color:'#22262C',
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
        height: scale(18),
        borderRadius: scale(9),
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
    },
    letter: {
        position: 'absolute',
        top:scale(22),
        left:scale(25),
        fontFamily:'Montserrat-Regular',
        color:'#4A4A4A',
        fontSize:scale(22)
      },
})