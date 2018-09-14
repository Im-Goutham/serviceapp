import Swipeout from 'react-native-swipeout';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableHighlight} from 'react-native';
import {Icon} from 'native-base';
import Share, {ShareSheet, Button} from 'react-native-share';
import LinearGradient from 'react-native-linear-gradient';
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
        const btnsTypes = [
            {
                component:
                    <LinearGradient
                        colors={['#3E85EF', '#3E85EF']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={{
                            flex: 1,
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius:10,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Image source={require('../assets/icons/favourite.png')}
                               onPress={() => console.warn(data.text)}/>
                    </LinearGradient>,
                backgroundColor: 'transparent',
            },
            {
                component: <LinearGradient
                    colors={['#3EBDEF', '#3EBDEF']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Icon name='md-share' style={{color: 'white', fontSize: 27, textAlign: 'center'}}/>
                </LinearGradient>,
                backgroundColor: 'transparent',
                onPress: () => {
                    Share.open(shareOptions)
                }
            },
        ];
        let i = 0
        return (
            <Swipeout
                close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
                left={null}
                right={btnsTypes}
                rowID={rowID}
                sectionID={sectionID}
                autoClose={data.autoClose}
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
                                <Text style={{fontSize: 16, fontWeight: 'bold', color: "#000"}}>{data.jobtitle}</Text>
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
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {
                                    i===1 ?
                                <TouchableHighlight style={styles.button} onPress={() => console.warn("nejkhknz")}>
                                    <LinearGradient
                                        colors={['#3E85EF', '#3EBDEF']}
                                        start={{x: 0, y: 0}}
                                        end={{x: 1, y: 0}}
                                        style={styles.button}>
                                        <Text style={styles.btnText}>APPLY</Text>
                                    </LinearGradient>
                                </TouchableHighlight>
                                    :
                                        <Icon name='options-vertical' type ={"SimpleLineIcons"}style={{color: 'white', fontSize: 27, textAlign: 'center'}}/>
                                }
                            </View>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 0,}}>
                            <View style={{
                                flex: 2,
                                backgroundColor: "transparent",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image style={{width: "100%", height: 100, borderRadius: 10,}} source={data.image}
                                       resizeMode="contain" resizeMethod="resize"/>
                            </View>
                            <View style={{
                                flex: 3,
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10
                            }}>
                                <View>
                                    <Text style={{fontSize: 15, color: "#9B9B9B", fontFamily: "Montserrat-Medium"}}
                                          numberOfLines={2}>{data.detail}</Text>
                                </View>
                                <View style={{flexDirection: 'column'}}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Image style={{width: 15, height: 15}} source={require('../assets/icons/calender.png')} resizeMode="contain" resizeMethod="resize"/>
                                        <Text style={{fontSize: 12}}>
                                            <Text style={{
                                                paddingLeft: 5,
                                                fontFamily: "Montserrat-Regular",
                                                fontSize: 14,
                                                color: 'rgb(101,101,101)'
                                            }}>Before the 19 Sep 2018</Text></Text>
                                    </View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <View style={{flex: 1, flexDirection: 'row',}}>
                                            <Image style={{width: 15, height: 15}} source={require('../assets/icons/location_red.png')} resizeMode="contain" resizeMethod="resize"/>
                                            <Text style={{paddingLeft: 5, fontSize: 14, fontFamily: "Montserrat-Light"}}>
                                                3 km
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
        return (
            <ListView
                scrollEnabled
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                style={styles.listview}/>
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
        borderBottomColor: '#eee',
        borderColor: '#9B9B9B',
        // borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical:20,
        marginBottom:5,
        shadowOffset: { width:  0, height:  2 },
        shadowOpacity: 0.2,
        shadowRadius:  2,
        elevation:  1,
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
      })

    export default JobsList;
