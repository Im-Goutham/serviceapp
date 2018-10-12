import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    Dimensions,
    ScrollView,
    Platform
} from 'react-native';
 import {  Icon } from 'native-base'
import Advertisement from '../components/Advertisement';
import NotificationsList from '../components/NotificationsList';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import HeaderScreen from './HeaderScreen';

var {height, width} = Dimensions.get('window');
import {scale} from '../global';

const comments = {
    data:[
        {
            name:"Clayton L.",
            image:require('../images/svp1.png'),
            vesti:"Vestibulum",
            emptype:"Plumber & 5 more",
            comment : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut upidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            date: "07/18/2018"
        },
        {
            name:"Clayton L.",
            image:require('../images/svp1.png'),
            vesti:"Vestibulum",
            emptype:"Plumber & 5 more",
            comment : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut upidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            date: "07/18/2018"
        },
        {
            name:"Clayton L.",
            image:require('../images/svp1.png'),
            vesti:"Vestibulum",
            emptype:"Plumber & 5 more",
            comment : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut upidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            date: "07/18/2018"
        },
    ]

}


let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/arrow_left.png');

class RatingScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        tabindex : 0
      }
  }


  commmentsList(){
    return comments.data.map((data, index)=>{
        return(
            <View style={styles.servicesBox} key={index} >
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:3,paddingVertical:scale(5)}}>
                        <View style={styles.imageShadow}>
                            <Image source={data.image} style={[styles.img_placeholder,{borderRadius:scale(35),width:scale(70),height:scale(70)}]}/>
                            <Image source={require('../images/check.png')} style={styles.check}/>
                        </View>
                    </View>
                    <View style={{flex:7,paddingHorizontal:scale(20), justifyContent:"space-between", backgroundColor:"transparent"}}>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:scale(18)}}>{data.name}</Text>
                            <Image source={require('../assets/icons/crown.png')} style={{width:scale(20), height:scale(20), marginLeft: scale(10)}} resizeMode="contain" resizeMethod="resize"/>
                        </View>
                        <View style={{flexDirection: "row", paddingRight: scale(10)}}>
                            <Image source={require('../assets/icons/star_gold.png')} style={styles.star_style} resizeMode="contain" resizeMethod="resize"/>
                            <Image source={require('../assets/icons/star_gold.png')} style={styles.star_style} resizeMode="contain" resizeMethod="resize"/>
                            <Image source={require('../assets/icons/star_gold.png')} style={styles.star_style} resizeMode="contain" resizeMethod="resize"/>
                            <Image source={require('../assets/icons/star_gold.png')} style={styles.star_style} resizeMode="contain" resizeMethod="resize"/>
                            <Image source={require('../assets/icons/star_gold.png')} style={styles.star_style} resizeMode="contain" resizeMethod="resize"/>
                        </View>
                        <View style={{justifyContent:'center'}}><Text style={styles.tagStyle}>Plumber and 5 More</Text></View>
                    </View>
                </View>
                <View style={{flex:1,flexDirection:'row',paddingTop:scale(10),paddingBottom:scale(10)}}>
                    <View style={{paddingVertical:scale(3)}}>
                        <Text style={{color:'#9B9B9B',fontFamily:'Montserrat-Medium',fontSize:scale(13)}} >{data.comment}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{color:'#9B9B9B',fontFamily:'Montserrat-Medium',fontSize:scale(13)}} >{data.date}</Text>
                </View>
            </View>
        )
    })
}

    render() {
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
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:scale(54)}}>
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(20)}}>Your Ratings & Reviews</Text>
                               </View>
                               }
                               right={
                                 null
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingVertical: scale(10)}}>
                       
                   </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1,paddingHorizontal:scale(5)}}>
                   <ScrollView>
                        <View style={{backgroundColor:'rgb(249, 252, 255)',paddingHorizontal:scale(10), paddingVertical:scale(10),justifyContent:'space-between'}}>
                            <View style={styles.logoContainer}>
                                <TouchableOpacity>
                                    <View style={styles.imgsView}>
                                        <View  style={[styles.user_placeholder,{backgroundColor:'rgb(229, 239, 252)'}]}>
                                            <Image source={require('../images/svp1.png')} style={{width:'100%',height:'100%'}}   resizeMode="contain" resizeMethod="resize"/>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:"transparent", justifyContent:"center", alignItems:'center', paddingVertical:scale(20)}}>
                                <Text style={{ fontFamily:"Montserrat-Bold", fontSize:scale(22)}}>John Doe</Text>
                            </View>
                            <View style={{backgroundColor:"transparent", justifyContent:"center", alignItems:'center', flexDirection:"row"}}>
                                <View style={{flexDirection: "row", paddingRight: scale(10), borderRightWidth: scale(2)}}>
                                    <Image source={require('../assets/icons/star_gold.png')} style={styles.star_style} resizeMode="contain" resizeMethod="resize"/>
                                    <Image source={require('../assets/icons/star_gold.png')} style={styles.star_style} resizeMode="contain" resizeMethod="resize"/>
                                    <Image source={require('../assets/icons/star_gold.png')} style={styles.star_style} resizeMode="contain" resizeMethod="resize"/>
                                    <Image source={require('../assets/icons/star_gold.png')} style={styles.star_style} resizeMode="contain" resizeMethod="resize"/>
                                    <Image source={require('../assets/icons/star_gold.png')} style={styles.star_style} resizeMode="contain" resizeMethod="resize"/>
                                </View>
                                <Text style={{ fontFamily:"Montserrat-Medium", fontSize:scale(15), color:"rgb(62, 133,240)", paddingLeft: scale(10)}}>3 Reviews</Text>
                            </View>
                            {this.commmentsList()}
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
        justifyContent: 'space-between'
    },
    logoText: {
        color:'white',
        textAlign:'left',
        fontSize:scale(35),
        fontFamily: 'Montserrat-Bold',
    },
    star_style: {
        width:scale(15), height:scale(15), marginHorizontal:scale(5)
    },
    tagStyle:{
        backgroundColor: 'rgb(239,186,47)',
        borderRadius:scale(10),
        overflow:"hidden",
        paddingVertical:scale(2),
        paddingHorizontal:scale(10),
        marginBottom:scale(10),
        color: 'white',
        marginRight: scale(10),
        fontSize: scale(14),
        fontFamily: 'Montserrat-Bold'
    },
    check: {
        width: scale(18),
        height: scale(18),
        borderRadius:scale(9),
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    inputLabel: {
        textAlign:'left',
        fontSize: scale(16),
        fontFamily:'Montserrat-Light'
    },
    inputField: {
        marginVertical: scale(10)
    },
    borderImg: {
        width:width,
        height:scale(40),
        bottom:scale(-10),
        position:'absolute'
    },
    text: {
        marginBottom: scale(15),
        marginTop: scale(15),
        fontSize: scale(15),
        textAlign: 'center',
    },
    button:{
        backgroundColor:'#4A4A4A',
        width: '100%',
        borderRadius:scale(30),
        borderWidth: scale(1),
        borderColor: '#fff',
        marginTop:scale(10),
        paddingTop:scale(16),
        paddingBottom:scale(16),
    },
    btnText: {
        textAlign:'center',
        color:'black',
        fontSize: scale(16),
        fontFamily: 'Montserrat-Bold',
    },
    socialBox:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius: scale(20),
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    logoContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgsView: {
        flex: 1,
        padding:scale(10),
        position: 'relative',
        top: 0,
        left: 0
    },
    user_placeholder: {
        width: scale(140),
        height: scale(140),
        borderRadius:scale(70),
        justifyContent:'center',
        alignItems:'center',
    },
    camera_icon: {
        width: scale(40),
        height: scale(40),
        borderRadius:scale(20),
        position: 'absolute',
        bottom: scale(10),
        right: scale(10),
        justifyContent:'center',
        alignItems:'center',
    },
    servicesBox: {
        flex: 1,
        marginTop: scale(20),
        paddingVertical: scale(25),
        paddingHorizontal:scale(20),
        borderRadius:scale(10),
        backgroundColor:'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    textStyle: {
        fontFamily:"Montserrat-Bold",
        fontFamily: 'Montserrat-Bold',
    }
})

export default RatingScreen;
