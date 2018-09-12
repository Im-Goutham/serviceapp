import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
    Text,
    TouchableHighlight
} from 'react-native';
import {  Icon } from 'native-base'
import Advertisement from '../components/Advertisement';
import JobsList from '../components/JobsList';
import Map from '../components/Map';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modalbox';
import HeaderScreen from './HeaderScreen';
import PhotoGrid from '../components/PhotoGrid';
var {height, width} = Dimensions.get('window');
let tabItems = ["List View", "Map View"];

let logo = require('../images/logo.png');
let menu = require('../assets/icons/menu.png');
let border_img = require('../images/border_img.png');


const images = [
    'https://drscdn.500px.org/photo/216465193/m%3D2048_k%3D1_a%3D1/dda61fd7cea5013f8ebe7661b7abea3a',
    'https://drscdn.500px.org/photo/215467843/m%3D2048_k%3D1_a%3D1/344703e86f31e1fffb2d63effa2cee33',
    'https://drscdn.500px.org/photo/216340727/m%3D2048_k%3D1_a%3D1/20d583e15467fb39d06d48131767edc2',
    'https://drscdn.500px.org/photo/215498077/m%3D2048_k%3D1_a%3D1/f79e906eb96938807f6f9d758fc652fd',
    'https://drscdn.500px.org/photo/216559713/m%3D2048_k%3D1_a%3D1/393ef5251fa94964fe62cad52a416b7e',
    // 'https://drscdn.500px.org/photo/214943889/m%3D2048_k%3D1_a%3D1/90bd2e3619dfcaae53fed683561aae1b',
    // 'https://drscdn.500px.org/photo/216158509/m%3D2048_k%3D1_a%3D1/cf70d51aab6ca4c4a3c1ecc225c69990',
    // 'https://drscdn.500px.org/photo/216111469/m%3D2048_k%3D1_a%3D1/d2d83296c838258095dbf2bffda70602',
    // 'https://drscdn.500px.org/photo/216051623/m%3D2048_k%3D1_a%3D1/5a3732bb413f240ad71b8279b038a3ff',
    // 'https://drscdn.500px.org/photo/216047335/m%3D2048_k%3D1_a%3D1/4237ac4606474f0ec7ccc05ca311772e',
    // 'https://drscdn.500px.org/photo/216000289/m%3D2048_k%3D1_a%3D1/5ac2a21092f9281feef3ab8484d2b19c'
]


export  default class JobDetailScreen extends Component {
  constructor(){
       super();
       this.state = {
            categories: [
              {name:'Repair',image: require('../images/cat1.png')},
              {name:'Wallpaper',image: require('../images/cat2.png')},
              {name:'Wallpaper',image: require('../images/cat3.png')},
              {name:'Flooring',image: require('../images/cat4.png')},
              {name:'Watering',image: require('../images/cat1.png')},
              {name:'Electrician',image: require('../images/cat2.png')},
              {name:'Pluming',image: require('../images/cat3.png')},
            ],
            serviceProviders: [
              {name:'Clayton',image: require('../images/svp1.png')},
              {name:'Luis',image: require('../images/svp2.png')},
              {name:'George',image: require('../images/svp3.png')},
              {name:'Billy',image: require('../images/svp1.png')},
              {name:'George',image: require('../images/svp1.png')},
              {name:'Luis',image: require('../images/svp2.png')},
              {name:'Clayton',image: require('../images/svp3.png')},
            ],

            screens: [
              {
                title : "Find Jobs",
                iconname : require('../assets/icons/search.png'),
                routename : "findJobs"
              },
              {
                title : "Post Job",
                iconname : require('../assets/icons/post.png'),
                routename : "postJob"
              },
              {
                title : "Find Help",
                iconname : require('../assets/icons/help.png'),
                routename : "findHelp"
              },
              {
                title : "My Jobs",
                iconname : require('../assets/icons/list.png'),
                routename : "myJobs"
              },
              {
                title : "Favourites",
                iconname : require('../assets/icons/heart.png'),
                routename : "favourites"
              },
              {
                title : "Notifications",
                iconname : require('../assets/icons/bell.png'),
                routename : "notifications"
              },
              {
                title : "Chats",
                iconname : require('../assets/icons/chat.png'),
                routename : "chats"
              },
              {
                title : "My Requests",
                iconname : require('../assets/icons/navigation.png'),
                routename : "myRequests"
              },
              {
                title : "Track Now",
                iconname : require('../assets/icons/location.png'),
                routename : "trackNow"
              },
              {
                title : "My Account",
                iconname : require('../assets/icons/account.png'),
                routename : "account"
              },
              {
                title : "Subscription",
                iconname : require('../assets/icons/subscribe.png'),
                routename : "subscription"
              },
              {
                title : "Settings",
                iconname : require('../assets/icons/settings.png'),
                routename : "settings"
              }
         ]
       }
  }

    render() {
      let {categories, serviceProviders, screens} = this.state;
        return (
           <View style={{flex:1}}>
               <LinearGradient
                   colors={['rgb(60, 139, 239)', 'rgb(60,187, 239)']}
                   start={{x: 0, y: 0}}
                   end={{x: 1, y: 0}}
                   style={{
                       flex: 1
                   }}>
                   <HeaderScreen
                       header={
                           <Header
                               navigation={this.props.navigation}
                               left = {
                                   <TouchableOpacity
                                       onPress={() => this.props.navigation.openDrawer()}
                                       style={{width : 54, height:54, justifyContent:'center', alignItems: 'center'}}>
                                       <Image source={menu} style={{ width: '100%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                   </TouchableOpacity>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', width:"100%", height:54}}>
                                  <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 20}}>Need Cook</Text>
                               </View>
                               }
                               right={
                                   <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                       <TouchableOpacity style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                           <Icon  name='md-search' style={{color:'#fff',fontSize:25,fontWeight:'bold'}}/>
                                       </TouchableOpacity>
                                       <TouchableOpacity onPress={() => this.refs.modal1.open()} style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                           <Icon  name='md-person' style={{color:'#fff',fontSize:25,fontWeight:'bold'}}/>
                                       </TouchableOpacity>
                                   </View>
                               }
                           />
                       }
                   />

                 <ScrollView>
                   <View style={styles.container}>
                   <View style={{ height:168, backgroundColor:"#fff", justifyContent:"center", alignItems:"center"}}>
                     <PhotoGrid
                       source={images}
                       onPressImage={()=>console.log("hello")}
                       height={168}
                       width={width-20}
                       // imageStyle={{width:50}}
                       // ratio={1 /2}
                       />
                   </View>
                   <View style={styles.desc}>
                     <View style={styles.budget}>
                       <View style={{flexDirection:"row", height:40,width:"40%" , justifyContent:'center', alignItems:"center"}}>
                         <Text style={styles.budgettext}>Budget:</Text>
                         <Text style={styles.pricetext}>$ 240</Text>
                       </View>
                       <View style={{flexDirection:"row", height:40,width:"40%", backgroundColor:"transparent" , justifyContent:'center', alignItems:"center"}}>
                         <Image source={require('../assets/icons/location_red.png')} style={styles.pinimage} resizeMode="contain" resizeMethod="resize"/>
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
                   <View style={styles.category}>
                     <View style={styles.categoryrow}>
                       <View style={{backgroundColor:"transparent", width: "40%"}}>
                         <Text style={styles.categorytitle}>Category</Text>
                         <Text style={styles.categorytext}>Event Planning</Text>
                       </View>
                       <View style={{backgroundColor:"transparent", width: "40%"}}>
                         <Text style={styles.categorytitle}>Sub Category</Text>
                         <Text style={styles.categorytext}>Cook</Text>
                       </View>
                     </View>
                     <View style={styles.categoryrow}>
                       <View style={{backgroundColor:"transparent", width: "40%"}}>
                         <Text style={styles.categorytitle}>Job created on</Text>
                         <Text style={styles.categorytext}>2 jul 2018, 08:00 AM</Text>
                       </View>
                       <View style={{backgroundColor:"transparent", width: "40%"}}>
                         <Text style={styles.categorytitle}>Job Id</Text>
                         <Text style={styles.categorytext}>JB5487</Text>
                       </View>
                     </View>
                   </View>
                   <View style={styles.customerinfo}>
                     <Text style={styles.categorytitle}>Customer's info</Text>
                     <View style={{flexDirection:"row", paddingVertical:20}}>
                       <View style={{width: "30%"}}>
                          <Image source={require('../images/svp2.png')} style={{width:"100%", height:100}} resizeMode="contain" resizeMethod="resize"/>
                       </View>
                       <View style={{width: "70%", justifyContent: "space-between", paddingVertical:10}}>
                         <Text style={{fontFamily:"Montserrat-Regular", fontSize:20}}>Trevors S.</Text>
                         <View style={{flexDirection: "row", alignItems:"center"}}>
                           <Text style={{
                               fontSize:18,
                               color:"#000",
                               fontFamily:"Montserrat-Regular",
                               borderRightWidth:2
                             }}> 4 </Text>
                           <Text style={{
                               fontSize:18,
                               color:"rgb(61, 133, 239)",
                               fontFamily:"Montserrat-Regular"
                             }}> 2 Reviews</Text>
                         </View>

                               <Text style={{
                                   fontSize:18,
                                   color:"rgb(61, 133, 239)",
                                   fontFamily:"Montserrat-Bold"
                                 }}>Other posted jobs</Text>
                       </View>
                     </View>
                   </View>
                   <View style={styles.servicesBox}>
                       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text style={styles.textStyle}>See people who applied</Text>
                           <Text style={{fontSize:11,color:'#3E85EF',fontFamily:'Montserrat-Light'}}>VIEW ALL</Text>
                       </View>
                       <View style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
                       <ScrollView
                       horizontal={true}
                       showsHorizontalScrollIndicator={false}
                       >
                          {
                            serviceProviders ? (
                             serviceProviders.map((provider,key)=>{
                                     return  <View style={styles.categoryBox} key={key}>
                                                 <View style={styles.imageShadow}>
                                                 <Image source={provider.image} style={[styles.img_placeholder,{borderRadius:35,width:70,height:70}]}/>
                                                 <Image source={require('../images/check.png')} style={styles.check}/>
                                                 </View>
                                                 <Text style={{paddingVertical:10,color:'#4A4A4A'}}>{provider.name}</Text>
                                           </View>
                               })
                            ) : null
                           }
                       </ScrollView>
                       </View>
                   </View>
                 </View>
                 <View style={{height : 100, backgroundColor:"transparent", justifyContent:"flex-start"}}>
                 <TouchableOpacity style={{height : 64, justifyContent:"center", alignItems:"center"}} >
                   <Text style={{fontFamily:"Montserrat-bold", fontSize:20, color:"#fff"}}>Apply for this job</Text>
                 </TouchableOpacity>
               </View>

                 </ScrollView>
               </LinearGradient>
               <LinearGradient
                 colors={['rgb(60, 139, 239)', 'rgb(60,187, 239)']}
                 start={{x: 0, y: 0}}
                 end={{x: 1, y: 0}}
                 style={{
                   bottom:30,
                   right:10,
                   width:80, height:80, backgroundColor:"blue", justifyContent:"center", alignItems:"center" ,position:"absolute",
                   borderRadius:40}}>
                 <Image source={require('../assets/icons/chat_white.png')} style={{width:"100%", height:40}} resizeMode="contain" resizeMethod="resize"/>
               </LinearGradient>
           </View>
        );
    }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F9FCFF",
    paddingHorizontal:10
  },
  desc:{
    // borderWidth:StyleSheet.hairlineWidth,
    marginTop:10,
    borderRadius:10,
    backgroundColor:"#fff",
    shadowOffset: { width:  0, height:  2 },
    shadowOpacity:  0.2,
    shadowRadius:  2,
    elevation:1
  },
  category:{
    marginVertical:10,
    borderRadius:10,
    backgroundColor:"#fff",
    shadowOffset: { width:  0, height:  2 },
    shadowOpacity:  0.2,
    shadowRadius:  2,
    elevation:1

  },
  budget:{
    height:54,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    // backgroundColor:"#666"
  },
  budgettext:{
    fontSize:18,
    color:"#000",
    fontFamily:"Montserrat-Bold"
  },
  pricetext:{
    fontSize:18,
    color:"#009933"
  },
  pinimage:{
    width:20,
    height:20
  },
  distance:{
    fontSize:20
  },
  deadline:{
    height:54,
    paddingHorizontal: 20,
    justifyContent:"center"
  },
  title:{
    color:"rgb(244, 41, 34)",
    fontSize:18,
    fontFamily:"Montserrat-Regular"
  },
  date:{
    // color:"#000",
    fontSize:18,
    fontFamily:"Montserrat-Regular"
  },
  detail:{
    padding:10
  },
  detaildesc:{
    fontFamily:"Montserrat-Medium",
    fontSize:18,
    lineHeight: 25,
    color:"rgb(161,161,161)"
  },
  categoryrow:{
    flexDirection:"row",
    justifyContent :"space-between",
    height:75,
    alignItems:'center',
    paddingHorizontal:10
  },
  categorytitle:{
    fontFamily:"Montserrat-Bold",
    fontSize:18,
    color:"rgb(74,74,74)"
  },
  categorytext:{
    fontFamily:"Montserrat-Regular",
    fontSize:15,
    color:"rgb(74,74,74)"
  },
  customerinfo:{
    // marginVertical:10,
    borderRadius:10,
    backgroundColor:"#fff",
    shadowOffset: { width:  0, height:  2 },
    shadowOpacity:  0.2,
    shadowRadius:  2,
    elevation:1
  },
  servicesBox: {
      flex: 1,
      marginVertical: 20,
      paddingHorizontal:20,
      paddingVertical:20,
      borderRadius:10,
      backgroundColor:'white',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 1,
  },
  textStyle: {
    fontFamily:"Montserrat-Bold",
    fontSize:17
  },
  categoryBox: {
      flexDirection:'column',
      width:100,
    },
    imageShadow: {
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 2,
    },
    img_placeholder: {
      width: 80,
      height: 80,
      borderRadius:5,
      position: 'relative',
      top: 0,
      left: 0
    },
    check: {
      width: 18,
      height: 18,
      borderRadius:9,
      position: 'absolute',
      bottom: 0,
      left: 0
    },

})
