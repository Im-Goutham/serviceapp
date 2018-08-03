import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Icon } from 'native-base';
import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';
import SocketIOClient from 'socket.io-client';
import Header from '../components/Header';
import CustomActions from '../components/CustomActions';
import CustomView from '../components/CustomView';


class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          messages: [],
          loadEarlier: true,
          typingText: null,
          isLoadingEarlier: false,
        };
    
        this._isMounted = false;
        this.onSend = this.onSend.bind(this);
        this.onReceive = this.onReceive.bind(this);
        this.renderCustomActions = this.renderCustomActions.bind(this);
        this.renderBubble = this.renderBubble.bind(this);
        this.renderSystemMessage = this.renderSystemMessage.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.onLoadEarlier = this.onLoadEarlier.bind(this);
    
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
        this.socket.on('receiveMsg', function(msg){

            console.log("msg = ----> ", msg)
            // alert(msg)
            //roomId = msg.roomId
            // if("5b6149be84d1a004659916ae" == msg.messages.sender){
            //     $('#messages').append($('<li class="me">').text(msg.messages.content));
            // }else{
            //     $('#messages').append($('<li class="user">').text(msg.messages.content));
            // }

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
        console.log('messages are .. ',JSON.stringify(messages));  
        var roomId="5b62ee2776560d078e897e3d" ;
                var data = {
                    "userIds":["5b6149be84d1a004659916ae"],
                    "msg":messages[0].text,
                    "type":"text",
                    "sender":"5b61474144cd9d03ff07c4d5",
                    "originator":"5b61474144cd9d03ff07c4d5",
                    "group":"private",
                    "roomId":roomId
                }
        this.socket.emit('sendMsg',data);
        console.log('message sent .. ');  
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, messages),
          };
        });
    
        // for demo purpose
        this.answerDemo(messages);
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
                _id: 2,
                name: 'React Native',
                // avatar: 'https://facebook.github.io/react/img/logo_og.png',
              },
            }),
          };
        });
      }
    
      renderCustomActions(props) {
        if (Platform.OS === 'ios') {
          return (
            <CustomActions
              {...props}
            />
          );
        }
        const options = {
          'Action 1': (props) => {
            alert('option 1');
          },
          'Action 2': (props) => {
            alert('option 2');
          },
          'Cancel': () => {},
        };
        return (
          <Actions
            {...props}
            options={options}
          />
        );
      }
    
      renderBubble(props) {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: '#f0f0f0',
              }
            }}
          />
        );
      }
    
      renderSystemMessage(props) {
        return (
          <SystemMessage
            {...props}
            containerStyle={{
              marginBottom: 15,
            }}
            textStyle={{
              fontSize: 14,
            }}
          />
        );
      }
    
      renderCustomView(props) {
        return (
          <CustomView
            {...props}
          />
        );
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

    render() {
       return (
           <View style={{flex:1}}>
            <Header navigation={this.props.navigation}  title={'Chat'}/>
             <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                loadEarlier={this.state.loadEarlier}
                onLoadEarlier={this.onLoadEarlier}
                isLoadingEarlier={this.state.isLoadingEarlier}

                user={{
                _id: 1, // sent messages should have same user._id
                }}

                renderActions={this.renderCustomActions}
                renderBubble={this.renderBubble}
                renderSystemMessage={this.renderSystemMessage}
                renderCustomView={this.renderCustomView}
                renderFooter={this.renderFooter}
            />
           </View>
       )
    }
}

const styles = StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    },
    footerContainer: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
      },
      footerText: {
        fontSize: 14,
        color: '#aaa',
      },
})

export default ChatScreen;