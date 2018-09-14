import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView,
    Platform,
    Dimensions,
    TouchableWithoutFeedback, ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import {  Item, Input, Toast, Switch, List, ListItem, Left, Body, Right, Thumbnail, Text, Icon, Textarea,Label } from 'native-base';
import ImagePicker  from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import Documents from '../components/Documents';
import Header from '../components/Header';
const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';
let menu = require('../assets/icons/menu.png');
import * as actions from '../actions';
import Swipeout from "react-native-swipeout";
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
    ]

}
class RatingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            error: null,
            loading: false,
            avatarSource: null,
            videoSource: null,
            certificates: [
                {
                    name: 'certificate1.jpg',
                    image: require('../images/documents/cert1.png')
                },
                {
                    name: 'certificate2.jpg',
                    image: require('../images/documents/cert2.png')
                }],
            works: [
                {
                    name: 'work1.jpg',
                    image: require('../images/documents/work1.png')
                },
                {
                    name: 'work2.jpg',
                    image: require('../images/documents/work2.png')
                }],
            ids: [
                {
                    name: 'id1.jpg',
                    image: require('../images/documents/id1.png')
                }
                ],
            videos: [
                {
                    name: 'video1.jpg',
                    image: require('../images/documents/video1.png')
                },
                {
                    name: 'video2.jpg',
                    image: require('../images/documents/video2.png')
                }],
            websites: [
                {
                    name: 'video1.jpg',
                    image: require('../images/documents/website1.png')
                }],
            profiles: [
                {
                    name: 'profile1.jpg',
                    image: require('../images/documents/profile1.png')
                }],
        };
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
    }
    componentDidMount(){
        console.log('login screen is called ...');
    }
    focusNextField(id) {
        this.inputs[id]._root.focus();
    }
    handleSubmit = async () => {
        this.props.navigation.navigate('home');
    }
    handleError(error){
        Toast.show({
            text: error,
            buttonText: "Okay",
            type: "danger"
        })
    }
    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                this.setState({
                    avatarSource: source
                });
            }
        });
    }
    selectVideoTapped() {
        const options = {
            title: 'Video Picker',
            takePhotoButtonTitle: 'Take Video...',
            mediaType: 'video',
            videoQuality: 'medium'
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled video picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({
                    videoSource: response.uri
                });
            }
        });
    }
    commmentsList(){
        return comments.data.map((data, index)=>{
            return(
                <View style={styles.servicesBox} key={index} >
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:3}}>
                            <View style={styles.imageShadow}>
                                <Image source={data.image} style={[styles.img_placeholder,{borderRadius:35,width:100,height:100}]}/>
                                <Image source={require('../images/check.png')} style={styles.check}/>
                            </View>
                        </View>
                        <View style={{flex:7,paddingHorizontal:20, justifyContent:"space-between", backgroundColor:"transparent", height: 100}}>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:18}}>{data.name}</Text>
                                <Image source={require('../assets/icons/crown.png')} style={{width:20, height:20, marginLeft: 10}} resizeMode="contain" resizeMethod="resize"/>
                            </View>
                            <View style={{flexDirection: "row", paddingRight: 10}}>
                                <Image source={require('../assets/icons/star_gold.png')} style={{width:20, height:20, marginHorizontal:5}} resizeMode="contain" resizeMethod="resize"/>
                                <Image source={require('../assets/icons/star_gold.png')} style={{width:20, height:20, marginHorizontal:5}} resizeMode="contain" resizeMethod="resize"/>
                                <Image source={require('../assets/icons/star_gold.png')} style={{width:20, height:20, marginHorizontal:5}} resizeMode="contain" resizeMethod="resize"/>
                                <Image source={require('../assets/icons/star_gold.png')} style={{width:20, height:20, marginHorizontal:5}} resizeMode="contain" resizeMethod="resize"/>
                                <Image source={require('../assets/icons/star_gold.png')} style={{width:20, height:20, marginHorizontal:5}} resizeMode="contain" resizeMethod="resize"/>
                            </View>
                            <View style={{justifyContent:'center'}}>
                                <Text style={styles.tagStyle}>Plumber and 5 More</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',paddingTop:10,paddingBottom:10}}>
                        <View style={{flex:5,paddingVertical:3}}>
                            <Text style={{color:'#9B9B9B',fontFamily:'Montserrat-Medium',fontSize:13}} >{data.comment}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{color:'#9B9B9B',fontFamily:'Montserrat-Medium',fontSize:13}} >{data.date}</Text>
                    </View>
                </View>
            )
        })
    }
    render() {
        let {avatarSource,certificates,works,ids,videos,websites,profiles} = this.state;
        return (
            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={{flex:1}}>
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
                        <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:54}}>
                            <Text style={{ fontFamily: 'Montserrat-Medium', color:"#fff", fontSize: 18}}>Your rating and review</Text>
                        </View>
                    }
                    right={
                        <View></View>
                    }/>
                <ScrollView>
                    <View style={[styles.container,{ marginTop:isAndroid? 0: 50}]}>
                        <View style={{backgroundColor:'rgb(249, 252, 255)',paddingHorizontal:10, paddingVertical:30,justifyContent:'space-between'}}>
                            <View style={styles.logoContainer}>
                                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                                    <View style={styles.imgsView}>
                                        {(avatarSource)?(
                                            <View style={[styles.user_placeholder,{backgroundColor:'rgb(249, 252, 255)'}]}>
                                                <Image source={avatarSource} style={{width:'100%',height:'100%'}}   resizeMode="contain" resizeMethod="resize"/>
                                            </View>):(
                                                <View  style={[styles.user_placeholder,{backgroundColor:'rgb(229, 239, 252)'}]}>
                                                    <Image source={require('../images/svp1.png')} style={{width:'100%',height:'100%'}}   resizeMode="contain" resizeMethod="resize"/>
                                                </View>
                                        )}
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:"transparent", justifyContent:"center", alignItems:'center'}}>
                                <Text style={{ fontFamily:"Montserrat-Medium"}}>John Doe</Text>
                            </View>
                            <View style={{backgroundColor:"transparent", justifyContent:"center", alignItems:'center', flexDirection:"row", }}>
                                <View style={{flexDirection: "row", paddingRight: 10, borderRightWidth: 2}}>
                                    <Image source={require('../assets/icons/star_gold.png')} style={{width:20, height:20, marginHorizontal:5}} resizeMode="contain" resizeMethod="resize"/>
                                    <Image source={require('../assets/icons/star_gold.png')} style={{width:20, height:20, marginHorizontal:5}} resizeMode="contain" resizeMethod="resize"/>
                                    <Image source={require('../assets/icons/star_gold.png')} style={{width:20, height:20, marginHorizontal:5}} resizeMode="contain" resizeMethod="resize"/>
                                    <Image source={require('../assets/icons/star_gold.png')} style={{width:20, height:20, marginHorizontal:5}} resizeMode="contain" resizeMethod="resize"/>
                                    <Image source={require('../assets/icons/star_gold.png')} style={{width:20, height:20, marginHorizontal:5}} resizeMode="contain" resizeMethod="resize"/>
                                </View>
                                <Text style={{ fontFamily:"Montserrat-Medium", fontSize:15, color:"rgb(62, 133,240)", paddingLeft: 10}}>3 Reviews</Text>
                            </View>
                            {
                                this.commmentsList()
                            }
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        );
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
        elevation: 1,
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
    check: {
        width: 18,
        height: 18,
        borderRadius:9,
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    inputLabel: {
        textAlign:'left',
        fontSize: 16,
        fontFamily:'Montserrat-Light'
    },
    inputField: {
        marginVertical: 10
    },
    borderImg: {
        width:width,
        height:40,
        bottom:-10,
        position:'absolute'
    },
    text: {
        marginBottom: 15,
        marginTop: 15,
        fontSize: 15,
        textAlign: 'center',
    },
    button:{
        backgroundColor:'#4A4A4A',
        width: '100%',
        borderRadius:30,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop:10,
        paddingTop:16,
        paddingBottom:16,
    },
    btnText: {
        textAlign:'center',
        color:'black',
        fontSize: 16,
        fontWeight:'bold'
    },
    socialBox:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:20,
        elevation: 3,
    },
    logoContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgsView: {
        flex: 1,
        padding:10,
        position: 'relative',
        top: 0,
        left: 0
    },
    user_placeholder: {
        width: 140,
        height: 140,
        borderRadius:70,
        justifyContent:'center',
        alignItems:'center',
    },
    camera_icon: {
        width: 40,
        height: 40,
        borderRadius:20,
        position: 'absolute',
        bottom: 10,
        right: 10,
        justifyContent:'center',
        alignItems:'center',
    },
    servicesBox: {
        flex: 1,
        marginVertical: 20,
        paddingVertical: 25,
        paddingHorizontal:20,
        borderRadius:10,
        backgroundColor:'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
    textStyle: {
        fontFamily:"Montserrat-Bold",
        fontWeight:'bold'
    }
})
export default connect(null, actions)(RatingScreen);
