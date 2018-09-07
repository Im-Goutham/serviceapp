
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'native-base';
import Header from '../components/Header';
import Advertisement from '../components/Advertisement';
let logo = require('../images/logo.png');
let menu = require('../assets/Icons/menu.png');
class HomeScreen extends Component {
    render() {
       return (
           <View style={{flex:1}}>
               <Header
                 navigation={this.props.navigation}
                 left = {
                   <TouchableOpacity
                     onPress={() => this.props.navigation.openDrawer()}
                     style={{width : 54, height:54, justifyContent:'center', alignItems: 'center'}}>
                     <Image source={menu} style={{ width: '100%', height: 25}} resizeMode="contain" resizeMethod="resize"/>
                   </TouchableOpacity>
                 }
                 title={
                   <View style={{ justifyContent : 'center', alignItems: 'flex-start', width:"50%", height:54}}>
                     <Image source={logo} style={{ width: '100%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                   </View>
                     }
                 />
               <ScrollView>
               <Advertisement/>
               <View style={styles.container}>
             {/* Categories start here */}
               <View style={styles.categoryContainer}>
                    <View style={styles.categoryBox}>
                      <Icon style={{color:'#4d4d4d',fontSize:40}} active name="ios-albums-outline" />

                        <Text>Find Jobs</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Icon style={{color:'#4d4d4d',fontSize:40}} active name="ios-albums-outline" />
                        <Text>Post a Job</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Icon style={{color:'#4d4d4d',fontSize:40}} active name="ios-albums-outline" />
                        <Text>Find Help</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Icon style={{color:'#4d4d4d',fontSize:40}} active name="ios-albums-outline" />
                        <Text>My Jobs</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Icon style={{color:'#4d4d4d',fontSize:40}} active name="ios-albums-outline" />
                        <Text>Favourites</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Icon style={{color:'#4d4d4d',fontSize:40}} active name="ios-albums-outline" />
                        <Text>Notifications</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Icon style={{color:'#4d4d4d',fontSize:40}} active name="ios-albums-outline" />
                        <Text>Chats</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Icon style={{color:'#4d4d4d',fontSize:40}} active name="ios-albums-outline" />
                        <Text>My Requests</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Icon style={{color:'#4d4d4d',fontSize:40}} active name="ios-albums-outline" />
                        <Text>Track Now</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Icon style={{color:'#4d4d4d',fontSize:40}} active name="ios-albums-outline" />
                        <Text>My Account</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Icon style={{color:'#4d4d4d',fontSize:40}} active name="ios-albums-outline" />
                        <Text>Subscription</Text>
                    </View>
                    <View style={styles.categoryBox}>
                        <Icon style={{color:'#4d4d4d',fontSize:40}} active name="ios-albums-outline" />
                        <Text>Settings</Text>
                    </View>
                </View>
           {/* Categories end here */}
           { /* Subcategories Scroll starts here */}
            <View style={{marginTop:10,marginBottom:10,padding:5,backgroundColor:'#F2F2F2'}}>
            <View style={styles.categoryHeading}>
                <View><Text style={{fontWeight:'bold',fontSize:18}}>Home Interior</Text></View>
                <View><Text style={{textAlign:'right',fontSize:12}}>VIEW ALL</Text></View>
            </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                        <Icon style={styles.heart_icon} active name="md-heart-outline" />
                        <Icon style={styles.share_icon} active name="md-share" />
                        <Text style={{paddingTop:5,paddingBottom:5}}>Repair</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                        <Icon style={styles.heart_icon} active name="md-heart-outline" />
                        <Icon style={styles.share_icon} active name="md-share" />
                        <Text style={{paddingTop:5,paddingBottom:5}}>Wallpaper</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                        <Icon style={styles.heart_icon} active name="md-heart-outline" />
                        <Icon style={styles.share_icon} active name="md-share" />
                        <Text style={{paddingTop:5,paddingBottom:5}}>Flooring</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                        <Icon style={styles.heart_icon} active name="md-heart-outline" />
                        <Icon style={styles.share_icon} active name="md-share" />
                        <Text style={{paddingTop:5,paddingBottom:5}}>Wall Ceiling</Text>
                        </View>
                    </View>
                </ScrollView>
                </View>
             </View>
             { /* Subcategories Scroll end here */}
             { /* Service Provider scroll starts  here */}
             <View style={{marginTop:10,marginBottom:10,padding:5,backgroundColor:'#F2F2F2'}}>
            <View style={styles.categoryHeading}>
                <View><Text style={{fontWeight:'bold',fontSize:18}}>See other Service Providers</Text></View>
                <View><Text style={{textAlign:'right',fontSize:12}}>VIEW ALL</Text></View>
            </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/user_placeholder.png')} style={styles.user_placeholder}/>
                        <Icon style={styles.checkmark_icon} active name="md-checkmark-circle" />
                        <View style={{flexDirection:'row',padding:5}}>
                            <Icon active name="md-star" style={styles.star_icon} />
                            <Text style={{paddingLeft:2}}>3</Text>
                        </View>
                        <Text style={{paddingTop:5,paddingBottom:5}}>Wesley R</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/user_placeholder.png')} style={styles.user_placeholder}/>
                        <View style={{flexDirection:'row',padding:5}}>
                            <Icon active name="md-star" style={styles.star_icon} />
                            <Text style={{paddingLeft:2}}>2</Text>
                        </View>
                        <Text style={{paddingTop:5,paddingBottom:5}}>Brian B</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/user_placeholder.png')} style={styles.user_placeholder}/>
                        <Icon style={styles.checkmark_icon} active name="md-checkmark-circle" />
                        <View style={{flexDirection:'row',padding:5}}>
                            <Icon active name="md-star" style={styles.star_icon} />
                            <Text style={{paddingLeft:2}}>1</Text>
                        </View>
                        <Text style={{paddingTop:5,paddingBottom:5}}>Leonard G</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/user_placeholder.png')} style={styles.user_placeholder}/>
                        <View style={{flexDirection:'row',padding:5}}>
                            <Icon active name="md-star" style={styles.star_icon} />
                            <Text style={{paddingLeft:2}}>5</Text>
                        </View>
                        <Text style={{paddingTop:5,paddingBottom:5}}>Clayton F</Text>
                        </View>
                    </View>
                </ScrollView>
                </View>
             </View>
             { /* Service Provider scroll ends  here */}
             { /* Subcategories Scroll starts here */}
             <View style={{marginTop:10,marginBottom:10,padding:5,backgroundColor:'#F2F2F2'}}>
            <View style={styles.categoryHeading}>
                <View><Text style={{fontWeight:'bold',fontSize:18}}>Cars & Vehicles</Text></View>
                <View><Text style={{textAlign:'right',fontSize:12}}>VIEW ALL</Text></View>
            </View>
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                        <Icon style={styles.heart_icon} active name="md-heart-outline" />
                        <Icon style={styles.share_icon} active name="md-share" />
                        <Text style={{paddingTop:5,paddingBottom:5}}>Repair</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                        <Icon style={styles.heart_icon} active name="md-heart-outline" />
                        <Icon style={styles.share_icon} active name="md-share" />
                        <Text style={{paddingTop:5,paddingBottom:5}}>Wallpaper</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                        <Icon style={styles.heart_icon} active name="md-heart-outline" />
                        <Icon style={styles.share_icon} active name="md-share" />
                        <Text style={{paddingTop:5,paddingBottom:5}}>Flooring</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                        <Icon style={styles.heart_icon} active name="md-heart-outline" />
                        <Icon style={styles.share_icon} active name="md-share" />
                        <Text style={{paddingTop:5,paddingBottom:5}}>Wall Ceiling</Text>
                        </View>
                    </View>
                </ScrollView>
                </View>
             </View>
             { /* Subcategories Scroll end here */}
               </View>
               </ScrollView>
           </View>
       )
    }
}

const styles = StyleSheet.create({
      container: {
          padding:5,
          paddingBottom:40,
          backgroundColor:'white'
    },
    categoryBox: {
        minWidth: 100,
        height: 100,
        margin:10,
        justifyContent:'center',
        alignItems: 'center'
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        marginTop:20,
        marginBottom:20
    },
    imgsView: {
        flex: 1,
        padding:10,
        position: 'relative',
        top: 0,
        left: 0
    },
    img_placeholder: {
        width: 90,
        height: 90,
        position: 'relative',
		top: 0,
		left: 0
      },
      user_placeholder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        position: 'relative',
		top: 0,
		left: 0
      },
      heart_icon: {
        color:'white',
        fontSize:14,
        fontWeight:'bold',
        position: 'absolute',
		top: 14,
		right: 4
      },
      checkmark_icon:  {
        color:'#008000',
        fontSize:18,
        fontWeight:'bold',
        position: 'absolute',
        top: 40,
		left: 12
      },
      share_icon: {
        color:'white',
        fontSize:14,
        position: 'absolute',
		top: 80,
		right: 4
      },
      star_icon: {
          fontSize: 18,
          color: '#ccad00'
      },
      categoryHeading: {
          flexDirection: 'row',
          justifyContent:'space-between',
          marginTop:10,
          marginBottom:10
    }
})

export default HomeScreen;
