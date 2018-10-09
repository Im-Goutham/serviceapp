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
    KeyboardAvoidingView
} from 'react-native';
import {  Icon, CheckBox,Item, Input } from 'native-base'
import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';
import SocketIOClient from 'socket.io-client';
import LinearGradient from 'react-native-linear-gradient';
import emojiUtils from 'emoji-utils';
import Advertisement from '../components/Advertisement';
import Header from '../components/Header';
import CustomActions from '../components/CustomActions';
import ChatMessage from '../components/ChatMessage';

import HeaderScreen from './HeaderScreen';

import {scale} from '../global';

let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/arrow_left.png');


class MessageScreen extends Component {
  constructor(props){
      super(props);
      this.state={
            messages: [],
            message: '',
            loadEarlier: true,
            typingText: null,
            isLoadingEarlier: false
      };
          
      this._isMounted = false;
      this.onSend = this.onSend.bind(this);
      this.onReceive = this.onReceive.bind(this);
      this.renderCustomActions = this.renderCustomActions.bind(this);
      this.renderFooter = this.renderFooter.bind(this);
      this.onLoadEarlier = this.onLoadEarlier.bind(this);
      this.renderInputToolbar = this.renderInputToolbar.bind(this);
  
      this._isAlright = null;

      this.socket = SocketIOClient('http://10.2.4.206:3000');
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require('../data/messages.js'),
      };
    });
  }




  componentDidMount(){
    var self = this;
    this.socket.on('receiveMsg', function(msg){

        console.log("msg = ----> ", msg)
        roomId = msg.roomId
        if("5b6149be84d1a004659916ae" == msg.messages.sender){
            console.log('came here 1 ')
            self.onReceive(msg.messages.content);
          //  $('#messages').append($('<li class="me">').text(msg.messages.content));
        }else{
            console.log('came here 2 ')
            
            //$('#messages').append($('<li class="user">').text(msg.messages.content));
        }

    });
  }


  componentWillUnmount() {
    this._isMounted = false;
  }

  onLoadEarlier() {
    this.setState((previousState) => {
      return {
        isLoadingEarlier: true,
      };
    });

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.prepend(previousState.messages, require('../data/old_messages.js')),
            loadEarlier: false,
            isLoadingEarlier: false,
          };
        });
      }
    }, 1000); // simulating network
  }

  onSend(messages = []) {
    
   // console.log('messages are .. ',JSON.stringify(messages));  
    var roomId="5b62ee2776560d078e897e3d" ;
            var data = {
                "userIds":["5b6149be84d1a004659916ae"],
                //"msg":messages[0].text,
                "msg":this.state.message,
                "type":"text",
                "sender":"5b61474144cd9d03ff07c4d5",
                "originator":"5b61474144cd9d03ff07c4d5",
                "group":"private",
                "roomId":roomId
            }
    this.socket.emit('sendMsg',data);
    console.log('message sent .. ',JSON.stringify(this.state.messages));  
    var message = {"_id":1753,"text":this.state.message,"createdAt": Date.now(),"user":{"_id":1,"name":"Developer"},"sent":true,"received":true}
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, message),
        message:''
      };
    });

    // for demo purpose
  //  this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'React Native is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive('Nice picture!');
          } else if (messages[0].location) {
            this.onReceive('My favorite place');
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Alright');
            }
          }
        }
      }

      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: '5b6149be84d1a004659916ae',
            name: 'React Native',
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        }),
      };
    });
  }

  renderCustomActions(props) {
 //   if (Platform.OS === 'ios') {
      return (
        <CustomActions
          {...props}
        />
      );
  //  }
    // const options = {
    //   'Action 1': (props) => {
    //     alert('option 1');
    //   },
    //   'Action 2': (props) => {
    //     alert('option 2');
    //   },
    //   'Cancel': () => {},
    // };
    // return (
    //   <Actions
    //     {...props}
    //     options={options}
    //   />
    // );
  }


  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  renderInputToolbar(props) {
   
    return (
      <View style={{flexDirection:'row'}}>
        <View style={{flex:9,paddingLeft:scale(20)}}>
             <Input 
                 style={styles.inputLabel}
                 placeholder='Type here...'
                 value={this.state.message}
                 onChangeText={message => this.setState({ message })}
                 onSubmitEditing={this.onSend}
                 />
        </View>
        <View style={{flex:1,paddingRight:scale(20)}}>
           <Image source={require('../assets/icons/mic.png')} style={{ width: '100%', height: scale(22)}} resizeMode="contain" resizeMethod="resize"/>
         </View>
        
        </View>
    );

  
}



  renderMessage(props) {
    const { currentMessage: { text: currText } } = props;

    let messageTextStyle;

    // Make "pure emoji" messages much bigger than plain text.
    if (currText && emojiUtils.isPureEmojiString(currText)) {
      messageTextStyle = {
        fontSize: scale(28),
        // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
        lineHeight: Platform.OS === 'android' ? scale(34) : scale(30),
      };
    }

    return (
      <ChatMessage {...props} messageTextStyle={messageTextStyle} />
    );
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
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(20)}}>Micheal Y.</Text>
                               </View>
                               }
                               right={
                                <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{width: "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                <Image source={require('../assets/icons/user_block.png')} style={{ width: '100%', height: scale(54)}} resizeMode="contain" resizeMethod="resize"/>
                                </TouchableOpacity>
                            </View>
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingVertical: scale(10)}}>
                       
                   </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                            <GiftedChat
                            messages={this.state.messages}
                            onSend={this.onSend}
                            loadEarlier={this.state.loadEarlier}
                            onLoadEarlier={this.onLoadEarlier}
                            isLoadingEarlier={this.state.isLoadingEarlier}
                            renderActions={() => {
                            if (Platform.OS === "ios") {
                                return (
                                    <Icon
                                        name="ios-mic"
                                        size={scale(35)}
                                        hitSlop={{ top: scale(20), bottom: scale(20), left: scale(50), right: scale(50) }}
                                        color={this.state.startAudio ? "red" : "black"}
                                        style={{
                                            bottom: scale(10),
                                            right: scale(5),
                                            position: "absolute",
                                            shadowColor: "#000",
                                            shadowOffset: { width: 0, height: 0 },
                                            shadowOpacity: 0.5,
                                            zIndex: 2,
                                            backgroundColor: "transparent"
                                        }}
                                        onPress={this.handleAudio}
                                    />
                                );
                            }
                        }}
                            // renderActions={this.renderCustomActions}
                            renderInputToolbar={this.renderInputToolbar}
                            renderMessage={this.renderMessage}
                            renderFooter={this.renderFooter}
                        />
                        <KeyboardAvoidingView />
                       </View>
               </LinearGradient>
              
           </View>
       )
  }
}



const styles = StyleSheet.create({
  container: {
    flex:1
  },
     modal: {
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  modal2: {
    height: scale(230),
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: scale(300),
    width: scale(300)
  },
    button:{
    justifyContent:'center',
    alignItems:'center',
    width: scale(100),
    height: scale(40),
    borderRadius:scale(20),
    // borderWidth: 1,
    // borderColor: '#008000',
    paddingTop:scale(5),
    paddingBottom:scale(5),
},
inputBox: {
  flex:1,
  backgroundColor:'white',
  borderRadius:scale(10),
  paddingHorizontal:scale(15),
},
inputLabel: {
  textAlign:'left',
  fontSize: scale(16),
  fontFamily:'Montserrat-Light',
},
inputField: {
fontFamily: 'Montserrat-Medium',
marginHorizontal:scale(10),
}
})

export default MessageScreen;
