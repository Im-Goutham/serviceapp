import Swipeout from 'react-native-swipeout';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import Share, {ShareSheet, Button} from 'react-native-share';
import LinearGradient from 'react-native-linear-gradient';
import OptionsMenu from "react-native-options-menu";
import {scale} from '../global';

import CancelModal from  '../components/CancelModal';

let joblist = {
    data : [
        {
            jobtitle: 'Need Cook',
            icon: require('../assets/icons/crown.png'),
            image: require('../images/service1.png'),
            detail: "Eleifend suspendisse curae ur natoque leifend leifend suspendiss natoque ur n...",
        },
        {
            jobtitle: 'Need Carpenter',
            icon: require('../assets/icons/crown.png'),
            image: require('../images/service2.png'),
            detail: "Eleifend suspendisse curae ur natoque leifend leifend suspendiss natoque ur n...",
        },
        {
            jobtitle: 'Need Cook',
            icon: require('../assets/icons/crown.png'),
            image: require('../images/service3.png'),
            detail: "Eleifend suspendisse curae ur natoque leifend leifend suspendiss natoque ur n...",
        },
    ]
}
class JobsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            refreshing: false,
            visible:false,
            liked:true,
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        }
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(joblist.data),
        })
    }

    _renderRow(data, sectionID, rowID) {
        let shareOptions = {
            title: "React Native",
            message: "Hola mundo",
            url: "http://facebook.github.io/react-native/",
            subject: "Share Link" //  for email
        };
        var screen = this.props.navigation.state.routeName;
        const leftBtn = [
            {
                component:
                    <LinearGradient
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 0}}
                        colors={['#F42922', '#A50600']} 
                        style={{
                            borderTopRightRadius: scale(10),
                            borderBottomRightRadius:scale(10),
                            justifyContent: 'center',
                            alignItems: 'center',
                            height:scale(185),
                            marginRight:scale(10),
                            marginLeft:scale(-20)
                        }}>
                        <View>
                            {
                                screen == 'findJobs' ? (null) :(
                                    <View style={{alignItems:'center',paddingVertical:scale(10)}}>
                                        <Image
                                        source={require('../assets/icons/cross_white.png')}
                                        style={{width:scale(20),height:scale(20)}}
                                        resizeMode="contain" resizeMethod="resize"
                                        />
                                   </View>
                                        )
                            }      
                          <Text style={{fontFamily:'Montserrat-Bold',color:'white',fontSize:scale(16)}}>{screen == 'findJobs' ? 'Remove' : 'Reject'}</Text>
                        </View>
                    </LinearGradient>,
                backgroundColor: 'transparent',
            }
        ];
        const  rightBtn = [
            {
                component:
                    <LinearGradient
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 0}}
                        colors={['#01B151', '#00823B']} 
                        style={{
                            borderTopLeftRadius: scale(10),
                            borderBottomLeftRadius:scale(10),
                            justifyContent: 'center',
                            alignItems: 'center',
                            height:scale(185),
                            marginLeft:scale(10)
                        }}>
                        <View>
                            <View style={{alignItems:'center',paddingVertical:scale(10)}}>
                            <Image
                                source={require('../assets/icons/tick_white.png')}
                                style={{width:scale(20),height:scale(20)}}
                                resizeMode="contain" resizeMethod="resize"
                                />
                            </View>
                          <Text style={{fontFamily:'Montserrat-Bold',color:'white',fontSize:scale(16)}}>Accept</Text>
                        </View>
                    </LinearGradient>,
                backgroundColor: 'transparent',
            }
        ];
  

        const btnsTypes = [
            {
                component:
                    <LinearGradient
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 0}}
                        colors={['#3E85EF', '#3EBDEF']} 
                        style={{
                            flexDirection: 'row',
                            borderTopLeftRadius: scale(10),
                            borderBottomLeftRadius:scale(10),
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            height:scale(185),
                            marginLeft:scale(10)
                        }}>
                       {
                            screen == 'myJobs' ? (null) : (
                         <TouchableOpacity style={styles.iconButton} onPress={()=> this.setState({liked: !this.state.liked})}>
                            <Image 
                                source={this.state.liked ? require('../assets/icons/heart_red.png'): require('../assets/icons/heart_white.png')}
                                style={{width:scale(20),height:scale(20)}}
                                resizeMode="contain" resizeMethod="resize"
                                />
                        </TouchableOpacity>
                            )
                        }
                            <TouchableOpacity style={styles.iconButton} onPress={()=> this.shareJob()}>
                                <Image
                                source={require('../assets/icons/send.png')}
                                style={{width:scale(20),height:scale(20)}}
                                resizeMode="contain" resizeMethod="resize"
                                />
                            </TouchableOpacity>
                    </LinearGradient>,
                backgroundColor: 'transparent',
            }
        ];
        var screen = this.props.navigation.state.routeName;
        console.log('screen is ... ',screen);
        return (
            <Swipeout
                sensitivity={1}
                close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
                left={screen === 'myRequests' || screen ===  'findJobs' ? leftBtn : screen == 'trackNow' || screen == 'myJobs' || screen =='select' ? null : leftBtn }
                right={screen === 'myRequests' ? rightBtn :  screen == 'trackNow' || screen == 'select' ? null :  btnsTypes}
                rowID={rowID}
                sectionID={sectionID}
                autoClose={data.autoClose}
                buttonWidth={scale(140)}
                backgroundColor={"#fff"}
                onOpen={(sectionID, rowID) => {
                    this.setState({
                        sectionID,
                        rowID,
                    })
                }}
                onClose={() => console.log('===close')}
                scroll={event => console.log('scroll event')}
                >
                <TouchableWithoutFeedback onPress={() => {
                    this.props.navigation.navigate('jobDetail')
                }}>
                    <View style={styles.li}>
                        <View style={{
                            height: scale(54),
                            flexDirection: 'row',
                            backgroundColor: "transparent",
                            justifyContent: 'space-between'
                        }}>
                            <View style={{
                                width: "60%",
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: "transparent"
                            }}>
                                <Text style={{fontSize: scale(16), fontFamily: 'Montserrat-Medium', color: "#000"}}>{data.jobtitle}</Text>
                                <Image style={{
                                    width: scale(20),
                                    height: scale(20),
                                    paddingHorizontal: scale(15),
                                    backgroundColor: "transparent"
                                }} source={data.icon} resizeMode="contain" resizeMethod="resize"/>
                            </View>
                            <View style={{
                                width: "40%",
                                height: scale(54),
                                backgroundColor: "transparent",
                                alignItems: 'flex-end',
                                justifyContent: 'center'

                            }}>

                                 {
                                     (screen == 'trackNow' ||  screen ==  'findJobs' || screen == 'select')?(
                                           <TouchableOpacity style={styles.button} onPress={() =>
                                            screen == 'select' ? this.props.navigation.goBack()
                                            : this.props.navigation.navigate(screen=='trackNow' ? 'jobTrack' : 'jobDetail')
                                            }>
                                            <LinearGradient
                                                colors={['#3E85EF', '#3EBDEF']}
                                                start={{x: 0, y: 0}}
                                                end={{x: 1, y: 0}}
                                                style={styles.button}>
                                                <Text style={styles.btnText}>{screen=='trackNow' ? 'TRACK NOW' : screen == 'select' ? 'SELECT' : 'APPLY'}</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>

                                     ):(
                                         (screen == 'myRequests') ? (
                                            <View style={{flexDirection:'row',flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                                            <TouchableOpacity onPress={() => this.setState({liked: !this.state.liked})}>
                                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.iconButton}>
                                                    <Image 
                                                     source={this.state.liked ? require('../assets/icons/heart_red.png'): require('../assets/icons/heart_white.png')}
                                                     style={[styles.iconStyle,{width:scale(18),height:scale(18)}]}  resizeMode="contain" resizeMethod="resize"/>
                                            </LinearGradient>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.iconButton}>
                                                    <Image source={require('../assets/icons/send_white.png')} style={[styles.iconStyle,{width:scale(18),height:scale(18)}]}  resizeMode="contain" resizeMethod="resize"/>
                                            </LinearGradient>
                                            </TouchableOpacity>
                                          </View>
                                         ) :(
                                            <OptionsMenu
                                            button={ require('../assets/icons/eclipse.png')}
                                            buttonStyle={{ width: scale(15), height: scale(15), margin: scale(7.5), resizeMode: "contain" }}
                                            destructiveIndex={2}
                                            options={["Edit", "Cancel the Job", "Delete"]}
                                            actions={[()=>console.log('Edit'),() => { this.setState({visible:true})},()=>console.log('Delete')]}/>
                                         )
                                     

                                     )
                                 }
                                      {/* <TouchableOpacity  onPress={() => this.props.navigation.navigate(screen=='trackNow' ? 'jobTrack' : 'jobDetail')}>
                                             <Image style={{width: 15, height: 15}} source={require('../assets/icons/eclipse.png')} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableOpacity> */}
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{
                                flex: 4,
                                backgroundColor: "transparent",
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image style={{width: "100%", height: scale(110), borderRadius: scale(10)}} source={data.image}
                                       resizeMode="contain" resizeMethod="resize"/>
                            </View>
                            <View style={{
                                flex: 7,
                                flexDirection: 'column',
                                paddingHorizontal: scale(10),
                                justifyContent:'space-between'
                            }}>
                                <View><Text style={{fontSize: scale(15), color: "#9B9B9B", fontFamily: "Montserrat-Medium"}}
                                          numberOfLines={3}>{data.detail}</Text></View>
                                 <View style={{ flexDirection: 'row'}}>
                                    <Image style={{width: scale(15), height: scale(15)}} source={require('../assets/icons/calender.png')} resizeMode="contain" resizeMethod="resize"/>
                                        <Text style={{
                                            marginLeft: scale(10),
                                            fontFamily: "Montserrat-Regular",
                                            fontSize: scale(14),
                                            color: 'rgb(101,101,101)'
                                        }}>Before the 19 Sep 2018</Text>
                                </View>
                                 <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <View style={{flex: 1, flexDirection: 'row',}}>
                                            <Image style={{width: scale(15), height: scale(15)}} source={require('../assets/icons/location_red.png')} resizeMode="contain" resizeMethod="resize"/>
                                            <Text style={{paddingLeft: scale(5), fontSize: scale(14), fontFamily: "Montserrat-Light"}}>
                                                3 mi.
                                            </Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{
                                                fontSize: scale(14),
                                                color: 'rgb(74,74,74)',
                                                fontFamily: "Montserrat-Bold"
                                            }}>Budget: </Text><Text style={{
                                            fontSize: scale(14),
                                            color: 'rgb(80,174,87)',
                                            fontFamily: "Montserrat-Bold"
                                        }}>$240</Text>
                                        </View>
                                    </View>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Swipeout>
        );
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

    ListViewItemSeparator = () => {
        return (
            <View style={{height: scale(5), width: "100%", backgroundColor: "transparent"}}/>
        );
    }

    render() {
        console.log('this propd',this.props.navigation.state.routeName);
        let {visible} = this.state;
        return (
            <View style={{flex:1}}>
                <ListView
                    scrollEnabled
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    style={styles.listview}/>
               <CancelModal visible={visible} closeModal={() => { this.setState({visible:false})}}/>
            </View>
           
        );
    }
}
    var styles = StyleSheet.create({
      listview: {
        paddingHorizontal: scale(15),
        backgroundColor:"rgb(249, 252, 255)",
        flex: 1
      },
      li: {
        backgroundColor: 'white',
        borderRadius:scale(10),
        // borderWidth: 1,
        paddingHorizontal: scale(15),
        paddingVertical:scale(10),
        marginBottom:scale(20),
        shadowOffset: { width:  0, height:  2 },
        shadowOpacity: 0.2,
        shadowRadius:  2,
        elevation:  3,
        // flex:1
      },
      liText: {
        color: '#333',
        fontSize: scale(16),
      },
      button:{
        justifyContent:'center',
        alignItems:'center',
        height: scale(40),
        borderRadius:scale(20),
        // borderWidth: 1,
        // borderColor: '#008000',
        paddingTop:scale(5),
        paddingBottom:scale(5),
    },
    btnText: {
      fontFamily:"Montserrat-Bold",
        textAlign:'center',
        color:'white',
        paddingHorizontal:scale(20),
        fontSize:scale(14)
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

    export default JobsList;
