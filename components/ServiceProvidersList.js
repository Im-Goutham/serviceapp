import Swipeout from 'react-native-swipeout';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableOpacity,ImageBackground} from 'react-native';
import {Icon} from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LinearGradient from 'react-native-linear-gradient';
import { Share } from 'react-native';
import {scale} from '../global';

class ServiceProvidersList extends Component {
    constructor() {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => true});
        this.state = {
            dataSource: ds.cloneWithRows([
                {text: 'list 1'},
                {text: 'list 2'},
                {text: 'list 3'},
                {text: 'list 4'},
                {text: 'list 5'}]),
            sectionID: null,
            rowID: null,
            images:[
                {image: require('../images/service1.png')},
                {image: require('../images/service2.png')},
                {image: require('../images/service3.png')},
            ],
            imgIndex: 0,
            liked: true,
            photoShow:false
        };
    }
    _renderRow(rowData, sectionID, rowID) {

        return (

                 <TouchableWithoutFeedback onPress={() => {
                    this.props.navigation.navigate('jobDetail')
                }}>
                <View style={styles.servicesBox} >
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:2}}>
                            <View style={styles.imageShadow}>
                                <Image source={require('../images/svp1.png')} style={[styles.img_placeholder,{borderRadius:scale(35),width:scale(70),height:scale(70)}]}/>
                                <Image source={require('../images/check.png')} style={styles.check}/>
                            </View>
                        </View>
                        <View style={{flex:7,paddingHorizontal:scale(20)}}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Text style={{fontFamily:'Montserrat-Medium',color:'#22262C',fontSize:scale(18)}}>Clayton L.</Text>
                                <Image style={{
                                    width: scale(20),
                                    height: scale(20),
                                    paddingHorizontal: scale(15),
                                    backgroundColor: "transparent"
                                }} source={require('../assets/icons/crown.png')} resizeMode="contain" resizeMethod="resize"/>
                            </View>
                            <View style={{flex:1,flexDirection:'row',paddingVertical:scale(10)}}>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingRight:scale(8)}}><Image source={require('../assets/icons/star_gold.png')} style={styles.iconStyle}  resizeMode="contain" resizeMethod="resize"/><Text style={{fontFamily:'Montserrat-Bold',marginLeft:8,marginRight:8}}>4</Text></View>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:scale(8),borderLeftColor:'#CCCCCC',borderLeftWidth:1,borderRightColor:'#CCCCCC',borderRightWidth:1}}><Image source={require('../assets/icons/chat_green.png')} style={styles.iconStyle}  resizeMode="contain" resizeMethod="resize"/><Text style={{fontFamily:'Montserrat-Regular',marginLeft:8,marginRight:8}}>3</Text></View>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:scale(8)}}><Image source={require('../assets/icons/location_red.png')} style={styles.iconStyle}  resizeMode="contain" resizeMethod="resize"/><Text style={{fontFamily:'Montserrat-Regular',color:'#4A4A4A',marginLeft:8,marginRight:8}}>3 mi.</Text></View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>14 <Text style={{fontFamily:'Montserrat-Regular',color:'#4A4A4A)',fontSize:scale(13)}}>Jobs done</Text></Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',marginTop:scale(10)}}>
                        <View style={{justifyContent:'center'}}><Text style={styles.tagStyle}>Plumber & 5 More</Text></View>
                        <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>{this.setState({liked: !this.state.liked})}}>
                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.iconButton}>
                                    <Image source={this.state.liked ? require('../assets/icons/heart_red.png'): require('../assets/icons/heart_white.png')} style={[styles.iconStyle,{width:scale(18),height:scale(18)}]}  resizeMode="contain" resizeMethod="resize"/>
                            </LinearGradient>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={()=> this.shareJob()}>
                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.iconButton}>
                                    <Image source={require('../assets/icons/send_white.png')} style={[styles.iconStyle,{width:scale(18),height:scale(18)}]}  resizeMode="contain" resizeMethod="resize"/>
                            </LinearGradient>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',paddingVertical:scale(3)}}>
                        {
                            this.state.images.map((image,key)=>{
                                return  <TouchableWithoutFeedback key={key}>
                                    <View style={styles.imgBox}>
                                        <ImageBackground style={styles.imgStyle} source={image.image}  resizeMode="contain" resizeMethod="resize">
                                            {(key == 2)? (
                                                <View style={styles.overlay}><Text style={{color:'white',fontSize:scale(22),fontFamily:'Montserrat-Bold'}}>+5</Text></View>
                                            ):(null)
                                            }
                                            </ImageBackground>
                                    </View>
                                </TouchableWithoutFeedback>
                            })
                        }
                        </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:5,paddingVertical:3}}>
                            <Text style={{color:'#9B9B9B',fontFamily:'Montserrat-Medium',fontSize:scale(13)}} numberOfLines={2}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </View>
                        <View style={{flex:3}}>
                        <TouchableOpacity onPress={()=> {this.props.navigation.navigate('select')}}>
                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                                <Text style={styles.btnText}>HIRE NOW</Text>
                            </LinearGradient>
                     </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </TouchableWithoutFeedback>
        );
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
        let {images,imgIndex,photoShow} = this.state;
        return (
            <View style={{flex:1,backgroundColor:"rgb(249,252,255)"}}>
                <ListView
                    scrollEnabled
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    style={styles.listview}/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
   listview: {
    flex: 1,
  },
  liText: {
    color: '#333',
    fontSize: scale(16),
  },
  button:{
    width: '100%',
    borderRadius:scale(30),
    paddingVertical:scale(10)
},
btnText: {
    textAlign:'center',
    color:'white',
    fontFamily: 'Montserrat-Bold',
    fontSize:scale(14)
},
imgBox: {
    flex:1,
    padding:1,

},
overlay: {
  position: 'absolute',
  top: scale(4),
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,.6)',
  opacity: 2,
      justifyContent:'center',
      alignItems:'center',
     width:'100%',
    height:scale(105),
    borderRadius:scale(10),
},
imgStyle:{
    width:'100%',
    height:scale(115),
    borderRadius:scale(10),
},
  servicesBox: {
    flex: 1,
    marginVertical: scale(5),
    marginHorizontal: scale(10),
    paddingVertical: scale(15),
    paddingHorizontal: scale(20),
    borderRadius: scale(10),
    backgroundColor:'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  imageShadow: {
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  img_placeholder: {
    width: scale(80),
    height: scale(80),
    borderRadius:scale(5),
    position: 'relative',
    top: 0,
    left: 0
  },
  check: {
    width: scale(18),
    height: scale(18),
    borderRadius:scale(9),
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  iconStyle: {
     width:scale(15),
     height:scale(15)
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
  iconButton: {
    marginHorizontal:scale(5),
    width: scale(45),
    height:scale(45),
    borderRadius:scale(30),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(255,255,255, 0.1)'
  }
  })
export default connect(null, actions)(ServiceProvidersList);
