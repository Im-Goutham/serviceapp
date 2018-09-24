import Swipeout from 'react-native-swipeout';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import Share, {ShareSheet, Button} from 'react-native-share';
import LinearGradient from 'react-native-linear-gradient';
import OptionsMenu from "react-native-options-menu";

import CancelModal from  '../components/CancelModal';

let joblist = {
    data : [
        {
            jobtitle: 'Need Cook',
            icon: require('../assets/icons/crown.png'),
            image: require('../images/service1.png'),
            detail: "Lorem Ipsum has been the industrys standard dummy text ever",
        },
        {
            jobtitle: 'Need Carpenter',
            icon: require('../assets/icons/crown.png'),
            image: require('../images/service2.png'),
            detail: "Lorem Ipsum has been the industrys standard dummy text ever",
        },
        {
            jobtitle: 'Need Cook',
            icon: require('../assets/icons/crown.png'),
            image: require('../images/service3.png'),
            detail: "Lorem Ipsum has been the industrys standard dummy text ever",
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

        const leftBtn = [
            {
                component:
                    <LinearGradient
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 0}}
                        colors={['#F42922', '#A50600']} 
                        style={{
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius:10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height:205,
                            marginRight:10
                        }}>
                        <View>
                            <View style={{alignItems:'center',paddingVertical:10}}>
                            <Image
                                source={require('../assets/icons/tick_white.png')}
                                style={{width:20,height:20}}
                                resizeMode="contain" resizeMethod="resize"
                                />
                            </View>
                          <Text style={{fontFamily:'Montserrat-Bold',color:'white',fontSize:16}}>Reject</Text>
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
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius:10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height:205,
                            marginLeft:10
                        }}>
                        <View>
                            <View style={{alignItems:'center',paddingVertical:10}}>
                            <Image
                                source={require('../assets/icons/tick_white.png')}
                                style={{width:20,height:20}}
                                resizeMode="contain" resizeMethod="resize"
                                />
                            </View>
                          <Text style={{fontFamily:'Montserrat-Bold',color:'white',fontSize:16}}>Accept</Text>
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
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius:10,
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            height:205,
                            marginLeft:10
                        }}>
                         <View style={styles.iconButton}>
                            <Image 
                                source={require('../assets/icons/heart_red.png')}
                                style={{width:20,height:20}}
                                resizeMode="contain" resizeMethod="resize"
                                />
                        </View>
                        <View style={styles.iconButton}>
                            <Image
                            source={require('../assets/icons/send.png')}
                            style={{width:20,height:20}}
                            resizeMode="contain" resizeMethod="resize"
                            />
                        </View>
                    </LinearGradient>,
                backgroundColor: 'transparent',
            }
        ];
        var screen = this.props.navigation.state.routeName;
        return (
            <Swipeout
                close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
                left={screen === 'myRequests' ? leftBtn : null}
                right={screen === 'myRequests' ? rightBtn : btnsTypes}
                rowID={rowID}
                sectionID={sectionID}
                autoClose={data.autoClose}
                buttonWidth={140}
                backgroundColor={"#fff"}
                onOpen={(sectionID, rowID) => {
                    this.setState({
                        sectionID,
                        rowID,
                    })
                }}
                onClose={() => console.log('===close')}
                scroll={event => console.log('scroll event')}>
                <TouchableWithoutFeedback onPress={() => {
                    this.props.navigation.navigate('jobDetail')
                }}>
                    <View style={styles.li}>
                        <View style={{
                            height: 54,
                            flexDirection: 'row',
                            backgroundColor: "transparent",
                            justifyContent: 'space-between'
                        }}>
                            <View style={{
                                width: "50%",
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: "transparent"
                            }}>
                                <Text style={{fontSize: 16, fontFamily: 'Montserrat-Medium', color: "#000"}}>{data.jobtitle}</Text>
                                <Image style={{
                                    width: 20,
                                    height: 20,
                                    paddingHorizontal: 15,
                                    backgroundColor: "transparent"
                                }} source={data.icon} resizeMode="contain" resizeMethod="resize"/>
                            </View>
                            <View style={{
                                width: "30%",
                                height: 54,
                                backgroundColor: "transparent",
                                alignItems: 'flex-end',
                                justifyContent: 'center'

                            }}>

                                 {
                                     (screen == 'trackNow' || screen == 'findJobs')?(
                                           <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate(screen=='trackNow' ? 'jobTrack' : 'jobDetail')}>
                                            <LinearGradient
                                                colors={['#3E85EF', '#3EBDEF']}
                                                start={{x: 0, y: 0}}
                                                end={{x: 1, y: 0}}
                                                style={styles.button}>
                                                <Text style={styles.btnText}>{screen=='trackNow' ? 'TRACK NOW' : 'APPLY'}</Text>
                                            </LinearGradient>
                                        </TouchableOpacity>

                                     ):(
                                         (screen == 'myRequests') ? (
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
                                         ) :(
                                            <OptionsMenu
                                            button={ require('../assets/icons/eclipse.png')}
                                            buttonStyle={{ width: 15, height: 15, margin: 7.5, resizeMode: "contain" }}
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
                                <Image style={{width: "100%", height: 110, borderRadius: 10,}} source={data.image}
                                       resizeMode="contain" resizeMethod="resize"/>
                            </View>
                            <View style={{
                                flex: 7,
                                flexDirection: 'column',
                                paddingHorizontal: 10,
                                justifyContent:'space-between'
                            }}>
                                <View><Text style={{fontSize: 15, color: "#9B9B9B", fontFamily: "Montserrat-Medium"}}
                                          numberOfLines={3}>{data.detail}</Text></View>
                                 <View style={{ flexDirection: 'row'}}>
                                    <Image style={{width: 15, height: 15}} source={require('../assets/icons/calender.png')} resizeMode="contain" resizeMethod="resize"/>
                                        <Text style={{
                                            marginLeft: 10,
                                            fontFamily: "Montserrat-Regular",
                                            fontSize: 14,
                                            color: 'rgb(101,101,101)'
                                        }}>Before the 19 Sep 2018</Text>
                                </View>
                                 <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <View style={{flex: 1, flexDirection: 'row',}}>
                                            <Image style={{width: 15, height: 15}} source={require('../assets/icons/location_red.png')} resizeMode="contain" resizeMethod="resize"/>
                                            <Text style={{paddingLeft: 5, fontSize: 14, fontFamily: "Montserrat-Light"}}>
                                                3 mi
                                            </Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <Text style={{
                                                fontSize: 14,
                                                color: 'rgb(74,74,74)',
                                                fontFamily: "Montserrat-Bold"
                                            }}>Budget : </Text><Text style={{
                                            fontSize: 14,
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
            title: "React Native",
            message: "Hola mundo",
            url: "http://facebook.github.io/react-native/",
            subject: "Share Link"
        };
        Share.open(shareOptions);
    }

    ListViewItemSeparator = () => {
        return (
            <View style={{height: 5, width: "100%", backgroundColor: "transparent"}}/>
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
        paddingHorizontal: 15,
        backgroundColor:"rgb(249, 252, 255)",
        flex: 1
      },
      li: {
        backgroundColor: 'white',
        borderRadius:10,
        // borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical:20,
        marginBottom:20,
        shadowOffset: { width:  0, height:  2 },
        shadowOpacity: 0.2,
        shadowRadius:  2,
        elevation:  3,
        // flex:1
      },
      liText: {
        color: '#333',
        fontSize: 16,
      },
      button:{
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height: 40,
        borderRadius:20,
        // borderWidth: 1,
        // borderColor: '#008000',
        paddingTop:5,
        paddingBottom:5,
    },
    btnText: {
      fontFamily:"Montserrat-Bold",
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:12
    },
    iconButton: {
        marginHorizontal:5,
        width: 45,
        height:45,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(255,255,255, 0.1)'
      }
      })

    export default JobsList;
