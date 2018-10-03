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
    AsyncStorage
} from 'react-native';
import {NavigationActions} from 'react-navigation';
 import {  Icon } from 'native-base'
import Advertisement from '../components/Advertisement';
import { connect } from 'react-redux';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import * as actions from '../actions';



import HeaderScreen from './HeaderScreen';
import SearchBar from '../components/SearchBar';


let menu = require('../assets/icons/menu.png');
let logo = require('../images/logo.png');




class HomeScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        categories: [
            {name:'Repair',image: require('../images/cat1.png')},
            {name:'Wallpaper',image: require('../images/cat2.png')},
            {name:'Wallpaper',image: require('../images/cat3.png')},
            {name:'Flooring',image: require('../images/cat4.png')},
            {name:'Watering',image: require('../images/cat1.png')},
            {name:'Electrician',image: require('../images/cat2.png')},
            {name:'Plumbing',image: require('../images/cat3.png')},
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

          screens: [
            {
              title : "Find Jobs",
              iconname : require('../assets/icons/search.png'),
              routename : "findJobs"
            },
            {
              title : "Post a Job",
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
        let {categories, serviceProviders, screens} = this.state;
       return (
           <View style={{flex:1}}>
               <LinearGradient
                   colors={['#3E85EF', '#3EBDEF']}
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
                                <View style={{ justifyContent : 'center',width:'100%', alignItems: 'flex-start', height:54}}>
                                    <Image source={logo} style={{  width:140,height: 24}} resizeMode="contain" resizeMethod="resize"/>
                               </View>
                               }
                               right={
                                   <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                       <TouchableOpacity 
                                          style={{width: "100%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}
                                          onPress={this.navigateToScreen('account')}
                                          >
                                            <Image source={require('../images/svp1.png')} style={{ width: 35, height: 35,borderWidth:3,borderRadius:18,borderColor:'white',overflow: 'hidden'}} />
                                       </TouchableOpacity>
                                   </View>
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingTop: 10,paddingBottom:20,marginHorizontal:10}}>
                                <SearchBar placeholder={'Search here...' }/>
                   </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                               <ScrollView contentContainerStyle={{
                          justifyContent: 'space-between'
                      }}>
                            <View style={{backgroundColor:'rgb(249, 252, 255)',paddingHorizontal:15, paddingBottom:30,justifyContent:'space-between'}}>
                         <View style={{flex:1}}>
                             <Carousel/>
                         </View>
                          <View style={[styles.servicesBox,{paddingVertical:0}]}>
                            <View style={styles.categoryContainer}>
                            {
                                      screens ? (
                                          screens.map((screen,key)=>{
                                                return  <TouchableOpacity key={key} onPress={this.navigateToScreen(screen.routename)}>
                                                 <View style={styles.mainBox} key={key}>
                                                <View style={styles.mainCategoryBox}>
                                                      <Image source={screen.iconname} style={{ width: 40, height: 40}} resizeMode='contain' resizeMethod='resize' />
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
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <Text style={styles.textStyle}>Home Interior</Text>
                                    <TouchableOpacity onPress={this.navigateToScreen('findJobs')}>
                                    <Text style={styles.view}>VIEW ALL</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
                                <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                                   {
                                     categories ? (
                                        categories.map((category,key)=>{
                                              return  <View style={styles.categoryBox} key={key}>
                                                          <View style={styles.imageShadow}>
                                                          <Image source={category.image} style={styles.img_placeholder}/>
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
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <Text style={styles.textStyle}>See other Service Providers</Text>
                                    <TouchableOpacity onPress={this.navigateToScreen('findHelp')}>
                                    <Text style={styles.view}>VIEW ALL</Text>
                                    </TouchableOpacity>
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
                                                          <Image source={provider.image ? provider.image : require('../images/name_placeholder.png')} style={[styles.img_placeholder,{borderRadius:35,width:70,height:70}]}/>
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


                            <View style={styles.servicesBox}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                    <Text style={styles.textStyle}>Cars and Vehicles</Text>
                                    <TouchableOpacity onPress={this.navigateToScreen('findJobs')}>
                                      <Text style={styles.view}>VIEW ALL</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
                                <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                >
                                   {
                                     categories ? (
                                        categories.map((category,key)=>{
                                              return  <View style={styles.categoryBox} key={key}>
                                                          <View style={styles.imageShadow}>
                                                          <Image source={category.image} style={styles.img_placeholder}/>
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
        color:'white',
        textAlign:'left',
        fontSize:35,
        fontWeight:'bold'
      },
    borderImg: {width:'100%',height:31},
    servicesBox: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal:20,
        paddingVertical:20,
        borderRadius:10,
        backgroundColor:'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    view: {
        fontSize:12,
        color:'#3E85EF',
        fontFamily:'Montserrat-Medium',
    },
    textStyle: {
      fontFamily:"Montserrat-SemiBold",
      color:'#22262C',
      fontSize:17
    },
      categoryContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
    },
    btnText: {
        textAlign:'center',
        color:'white',
        fontSize: 16,
        fontWeight:'bold'
    },
    categoryBox: {
        flexDirection:'column',
        width:100,
      },
      imageShadow: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
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
      letter: {
        position: 'absolute',
        top:22,
        left:25,
        fontFamily:'Montserrat-Regular',
        color:'#4A4A4A',
        fontSize:22
      },
      mainBox: {width:90,height:110,marginHorizontal:5,marginVertical:20},
      screenNameStyle: {
        textAlign:'center',  
        fontFamily:'Montserrat-Medium',  
        color:'#4A4A4A',
        fontSize: 14,
        textAlign:'center'
    },
    mainCategoryBox: {
      paddingVertical:10,
      flexDirection:'column',
      width: '100%',
      height: 70,
      justifyContent:'center',
      alignItems:'center',
    },
    categoryStyle: {fontFamily:'Montserrat-Regular',paddingVertical:10,color:'#4A4A4A',fontSize:14}
})


export default connect(null, actions)(HomeScreen);
