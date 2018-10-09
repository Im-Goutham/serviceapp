import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View,Image,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LinearGradient from 'react-native-linear-gradient';

class AllServiceList extends Component {
    constructor() {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => true});
        this.state = {
            dataSource: ds.cloneWithRows([
                {text: 'list 1'},
                {text: 'list 2'},
                {text: 'list 3'},
                {text: 'list 4'},
                {text: 'list 5'}
                ]),
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

        return (
                <View style={styles.servicesBox} >
                    <View style={{backgroundColor:"transparent", paddingTop: 15,  }}>
                        <View style={{flex:1,flexDirection:'row', paddingHorizontal:15}}>
                            <View style={{flex:2,justifyContent:'flex-start',alignItems:'flex-start'}}>
                                <View style={styles.imageShadow}>
                                    <Image source={require('../images/svp1.png')} style={[styles.img_placeholder,{borderRadius:35,width:70,height:70}]}/>
                                    <Image source={require('../images/check.png')} style={styles.check}/>
                                </View>
                            </View>
                            <View style={{flex:7,paddingHorizontal:20,paddingBottom:10,justifyContent:'space-between'}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:17,color:'#4A4A4A'}}>Clayton L.</Text>
                                     <View style={{flexDirection:'row',paddingVertical:5}}>
                                       <Image source={require('../assets/icons/star_gold.png')} style={{width:15,height:15}} resizeMode="contain" resizeMethod="resize" />
                                       <Text style={{color:'#4A4A4A',fontFamily: 'Montserrat-Bold',paddingLeft:6}}>5</Text>
                                     </View>
                                     <View style={{flexDirection:'row',paddingVertical:5}}>
                                       <Image source={require('../assets/icons/calender.png')} style={{width:15,height:15}} resizeMode="contain" resizeMethod="resize" />
                                       <Text style={{color:'#4A4A4A',fontFamily: 'Montserrat-Regular',paddingLeft:10}}>Appt. On 08 Nov 2018</Text>
                                     </View>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#9B9B9B'}}>Plumber & 5 More</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                            <TouchableOpacity style={{ width : "30%", backgroundColor:"#CCCCCC", height : 40, borderBottomLeftRadius:10,justifyContent:"center", alignItems:"center"}}>
                                <LinearGradient
                                        colors={['#F2F2F2', '#CCCCCC']}
                                        start={{x: 0, y: 0}}
                                        end={{x: 1, y: 0}}
                                        style={{height : 40, backgroundColor:"transparent", width : "100%", borderBottomRightRadius:10,  justifyContent:"center", alignItems:"center"}}>
                                        <Text style={{color:"black", fontFamily:"Montserrat-Regular", fontSize:15}}>REJECT</Text>
                                    </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width : "70%"}}>
                                <LinearGradient
                                    colors={['#3E85EF', '#3EBDEF']}
                                    start={{x: 0, y: 0}}
                                    end={{x: 1, y: 0}}
                                    style={{height : 40, backgroundColor:"transparent", width : "100%", borderBottomRightRadius:10,  justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{color:"#fff", fontFamily:"Montserrat-Bold", fontSize:15}}>ACCEPT</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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
            <View style={{flex:1,backgroundColor:"rgb(249,252,255)"}} testID="servicesBox">
                <ListView
                    testID='indianic'
                    scrollEnabled
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    style={styles.listview}
                />
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
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius:5,
        backgroundColor: 'rgba(0,0,0,.6)',
        opacity: 2,
        justifyContent:'center',
        alignItems:'center'
    },
    imgStyle:{
        width:100,
        height:100,
    },
    servicesBox: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 10,
        // paddingVertical: 25,
        // paddingHorizontal:20,
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
    }
});
export default connect(null, actions)(AllServiceList);
