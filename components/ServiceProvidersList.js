import Swipeout from 'react-native-swipeout';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableOpacity,ImageBackground} from 'react-native';
import {Icon} from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LinearGradient from 'react-native-linear-gradient';

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
            photoShow:false
        };
    }
    _renderRow(rowData, sectionID, rowID) {
        const btnsTypes = [
            {
                component: <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    alignContent: 'center'}}>
                    <Icon name='md-heart-outline' style={{color: 'white', fontSize: 27}}/>
                </View>,
                backgroundColor: '#007FFA',
                onPress:()=>{console.log(rowData.text)}},
            {
                component: <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    alignContent: 'center'}}>
                    <Icon name='md-share' style={{color: 'white', fontSize: 27}}/>
                </View>,
                backgroundColor: '#007FFA',
                onPress:()=>{console.log(rowData.text)}
            },
        ];
        return (
            <Swipeout
                close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
                left={null}
                right={btnsTypes}
                rowID={rowID}
                sectionID={sectionID}
                autoClose={rowData.autoClose}
                backgroundColor={'rgb(249,252,255)'}
                onOpen={(sectionID, rowID) => {
                    this.setState({
                        sectionID,
                        rowID,
                    })
                }}
                onClose={() => console.log('===close') }
                scroll={event => console.log('scroll event') }>
                <View style={styles.servicesBox} >
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:2}}>
                            <View style={styles.imageShadow}>
                                <Image source={require('../images/svp1.png')} style={[styles.img_placeholder,{borderRadius:35,width:70,height:70}]}/>
                                <Image source={require('../images/check.png')} style={styles.check}/>
                            </View>
                        </View>
                        <View style={{flex:7,paddingHorizontal:20}}>
                            <View style={{flex:1}}>
                                <Text style={{fontSize:18}}>Clayton L.</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',paddingVertical:10}}>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingRight:8}}><Image source={require('../assets/icons/star_gold.png')} style={styles.iconStyle}  resizeMode="contain" resizeMethod="resize"/><Text style={{marginLeft:8,marginRight:8}}>4</Text></View>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:8,borderLeftColor:'rgb(204,204,204)',borderLeftWidth:1,borderRightColor:'rgb(204,204,204)',borderRightWidth:1}}><Image source={require('../assets/icons/chat_green.png')} style={styles.iconStyle}  resizeMode="contain" resizeMethod="resize"/><Text style={{marginLeft:8,marginRight:8}}>3</Text></View>
                                <View style={{flexDirection:'row',justifyContent:'space-around',paddingHorizontal:8}}><Image source={require('../assets/icons/location_red.png')} style={styles.iconStyle}  resizeMode="contain" resizeMethod="resize"/><Text style={{marginLeft:8,marginRight:8}}>3 mi.</Text></View>
                            </View>
                            <View style={{flex:1}}>
                                <Text>14 <Text style={{color:'rgb(74,74,74)'}}>Jobs done</Text></Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',marginTop:10}}>
                        <View style={{justifyContent:'center'}}><Text style={styles.tagStyle}>Plumber and 5 More</Text></View>
                        <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.iconButton}>
                                <TouchableOpacity>
                                    <Image source={require('../assets/icons/heart_white.png')} style={[styles.iconStyle,{width:18,height:18}]}  resizeMode="contain" resizeMethod="resize"/>
                                </TouchableOpacity>
                            </LinearGradient>
                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.iconButton}>
                                <TouchableOpacity>
                                    <Image source={require('../assets/icons/send_white.png')} style={[styles.iconStyle,{width:18,height:18}]}  resizeMode="contain" resizeMethod="resize"/>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',marginTop:10}}>
                        {
                            this.state.images.map((image,key)=>{
                                return  <TouchableWithoutFeedback  onPress={()=>{this.showImage(key)}} key={key}>
                                    <View style={styles.imgBox}>
                                        <ImageBackground style={styles.imgStyle} source={image.image}  resizeMode="contain" resizeMethod="resize">
                                            {(key == 2)? (
                                                <View style={styles.overlay}><Text style={{color:'white',fontSize:22,fontFamily:'Montserrat-Bold'}}>+5</Text></View>
                                            ):(null)
                                            }
                                            </ImageBackground>
                                    </View>
                                </TouchableWithoutFeedback>
                            })
                        }
                        </View>
                    <View style={{flex:1,flexDirection:'row',paddingTop:10,paddingBottom:10}}>
                        <View style={{flex:5,paddingVertical:3}}>
                            <Text style={{color:'#9B9B9B',fontFamily:'Montserrat-Medium',fontSize:13}} numberOfLines={2}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </View>
                        <View style={{flex:3}}>
                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                                <TouchableOpacity><Text style={styles.btnText}>HIRE NOW</Text></TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
            </Swipeout>
        );
    }
    showImage(index){
        console.log('imgIndex',index);
        let {images} = this.state;
        let imagesArray = images.map((image)=>{
            return {url:image}
        })
        this.props.showPhotoView({index,images:imagesArray,photoShow:true})
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
    fontSize: 16,
  },
  button:{
    width: '100%',
    borderRadius:30,
    paddingVertical:10
},
btnText: {
    textAlign:'center',
    color:'white',
    fontFamily: 'Montserrat-Bold',
    fontSize:15
},
imgBox: {
    flex:1,
    padding:1,

},
overlay: {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,.6)',
  opacity: 2,
      justifyContent:'center',
      alignItems:'center',
     width:'100%',
    height:100,
    borderRadius:10,
},
imgStyle:{
    width:'100%',
    height:115,
    borderRadius:10,
},
  servicesBox: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 25,
    paddingHorizontal:20,
    borderRadius:10,
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
  iconStyle: {
     width:15,
     height:15
  },
  tagStyle:{
     backgroundColor: 'rgb(239,186,47)',
     borderRadius:10,
     overflow:"hidden",
     paddingVertical:2,
     paddingLeft:10,
     paddingRight:30,
     color: 'white',
     fontFamily: 'Montserrat-Bold'
  },
  iconButton: {
    marginHorizontal:5,
    width: 45,
    height:45,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
  }
  })
export default connect(null, actions)(ServiceProvidersList);
