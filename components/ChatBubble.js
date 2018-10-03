/* eslint-disable no-underscore-dangle, no-use-before-define */

import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  Clipboard,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewPropTypes,
  Platform,
  Image
} from 'react-native';

import { MessageText, MessageImage, Time, utils } from 'react-native-gifted-chat';
import LinearGradient from 'react-native-linear-gradient';

const { isSameUser, isSameDay } = utils;

export default class Bubble extends React.Component {

  constructor(props) {
    super(props);
    this.onLongPress = this.onLongPress.bind(this);
  }

  onLongPress() {
    if (this.props.onLongPress) {
      this.props.onLongPress(this.context);
    } else if (this.props.currentMessage.text) {
      const options = [
        'Copy Text',
        'Cancel',
      ];
      const cancelButtonIndex = options.length - 1;
      this.context.actionSheet().showActionSheetWithOptions(
        { options, cancelButtonIndex },
        (buttonIndex) => {
          if (buttonIndex === 0) {
            Clipboard.setString(this.props.currentMessage.text);
          }
        });
    }
  }

  renderMessageText() {
    if (this.props.currentMessage.text) {
      const { containerStyle, wrapperStyle, messageTextStyle, ...messageTextProps } = this.props;
      if (this.props.renderMessageText) {
        return this.props.renderMessageText(messageTextProps);
      }
      return (
        <MessageText
        {...messageTextProps}
        textStyle={{
          left: [styles.standardFont, styles.slackMessageText, messageTextProps.textStyle, messageTextStyle],
        }}
      />
      );
    }
    return null;
  }

  renderMessageImage() {
    if (this.props.currentMessage.image) {
      const { containerStyle, wrapperStyle, ...messageImageProps } = this.props;
      if (this.props.renderMessageImage) {
        return this.props.renderMessageImage(messageImageProps);
      }
      return <MessageImage {...messageImageProps} imageStyle={[styles.slackImage, messageImageProps.imageStyle]} />;
    }
    return null;
  }

  renderTicks() {
    const { currentMessage } = this.props;
    if (this.props.renderTicks) {
      return this.props.renderTicks(currentMessage);
    }
    if (currentMessage.user._id !== this.props.user._id) {
      return null;
    }
    if (currentMessage.sent || currentMessage.received) {
      return (
        <View style={[styles.headerItem, styles.tickView]}>
          {currentMessage.sent && <Text style={[styles.standardFont, styles.tick, this.props.tickStyle]}>✓</Text>}
          {currentMessage.received && <Text style={[styles.standardFont, styles.tick, this.props.tickStyle]}>✓</Text>}
        </View>
      );
    }
    return null;
  }

  renderUsername() {
    const username = this.props.currentMessage.user.name;
    if (username) {
      const { containerStyle, wrapperStyle, ...usernameProps } = this.props;
      if (this.props.renderUsername) {
        return this.props.renderUsername(usernameProps);
      }
      return (
        <Text style={[styles.standardFont, styles.headerItem, styles.username, this.props.usernameStyle]}>
          {username}
        </Text>
      );
    }
    return null;
  }

  renderTime() {
    if (this.props.currentMessage.createdAt) {
      const { containerStyle, wrapperStyle, ...timeProps } = this.props;
      if (this.props.renderTime) {
        return this.props.renderTime(timeProps);
      }
      return (
        <Time
          {...timeProps}
          containerStyle={{ left: [styles.timeContainer] }}
          textStyle={{ left: [styles.standardFont, styles.headerItem, styles.time, timeProps.textStyle] }}
        />
      );
    }
    return null;
  }

  renderCustomView() {
    if (this.props.renderCustomView) {
      return this.props.renderCustomView(this.props);
    }
    return null;
  }

  render() {
    const isSameThread = isSameUser(this.props.currentMessage, this.props.previousMessage)
      && isSameDay(this.props.currentMessage, this.props.previousMessage);

    const messageHeader = isSameThread ? null : (
      <View style={styles.headerView}>
        {this.renderUsername()}
        {this.renderTime()}
        {this.renderTicks()}
      </View>
    );
   console.log("this.props.currentMessage are" ,this.props.currentMessage);
   var gradiant = ['#3EBDEF','#3E85EF'];
   if(this.props.currentMessage.sent){
      gradiant = ['#EAF8FF','#C6E1FF'];
   }
   let {text, sent } = this.props.currentMessage;
   if(!sent){
      return (
        <View style={{flex:1,flexDirection:'row',paddingHorizontal:10}}>
             <View style={styles.imgBox}>
             <Image source={require('../images/svp1.png')} style={{borderRadius:25,width:50,height:50}}/>
            </View>
            <View style={styles.textBox}>
            <LinearGradient
              colors={gradiant}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={[styles.gradiantStyle,{borderBottomLeftRadius:0}]}>
              <Text style={[styles.textStyle]}>{text}</Text>
              <Text style={[styles.dateTextStyle]}>2.23 PM</Text>
          </LinearGradient>
            </View>
        </View>

      );
   }
   else {
    return (
     <View style={{flex:1,flexDirection:'row',paddingLeft:10,paddingRight:10}}>
          <View style={{flex:8}}>
            <LinearGradient
              colors={gradiant}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={[styles.gradiantStyle,{borderBottomRightRadius:0}]}>
              <Text style={[styles.textStyle,{color:'black'}]}>{text}</Text>
              <Text style={[styles.dateTextStyle,{color:'#rgb(155,155,155)'}]}>2.23 PM</Text>
          </LinearGradient>
          </View>
          <View style={styles.imgBox}>
           <Image source={require('../images/svp2.png')} style={{borderRadius:25,width:50,height:50}}/>
          </View>
      </View>

    );
   }
 
  }

}

// Note: Everything is forced to be "left" positioned with this component.
// The "right" position is only used in the default Bubble.
const styles = StyleSheet.create({
  standardFont: {
    fontSize: 15,
  },
  imgBox: {
    flex:2,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  textBox: {
    flex:8,
    borderRadius:10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
},
gradiantStyle: {
  padding :20,
  borderRadius:10
},
textStyle:{
  textAlign:'left',
  fontSize:16,
  fontFamily:'Montserrat-Regular',
  color:'white'
},
dateTextStyle:{
  fontFamily:'Montserrat-Bold',
  textAlign:'right',
  color:'white',
  paddingTop:8
},
  slackMessageText: {
    marginLeft: 0,
    marginRight: 0,
  },
  container: {
    flex: 1,
    backgroundColor:'red',
    alignItems: 'flex-start',
  },
  wrapper: {
    marginRight: 60,
    minHeight: 20,
    justifyContent: 'flex-end',
  },
  username: {
    fontWeight: 'bold',
  },
  time: {
    textAlign: 'left',
    fontSize: 12,
  },
  timeContainer: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  headerItem: {
    marginRight: 10,
  },
  headerView: {
    // Try to align it better with the avatar on Android.
    marginTop: Platform.OS === 'android' ? -2 : 0,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  /* eslint-disable react-native/no-color-literals */
  tick: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  /* eslint-enable react-native/no-color-literals */
  tickView: {
    flexDirection: 'row',
  },
  slackImage: {
    borderRadius: 3,
    marginLeft: 0,
    marginRight: 0,
  },
});

Bubble.contextTypes = {
  actionSheet: PropTypes.func,
};

Bubble.defaultProps = {
  touchableProps: {},
  onLongPress: null,
  renderMessageImage: null,
  renderMessageText: null,
  renderCustomView: null,
  renderTime: null,
  currentMessage: {
    text: null,
    createdAt: null,
    image: null,
  },
  nextMessage: {},
  previousMessage: {},
  containerStyle: {},
  wrapperStyle: {},
  tickStyle: {},
  containerToNextStyle: {},
  containerToPreviousStyle: {},
};

Bubble.propTypes = {
  touchableProps: PropTypes.object,
  onLongPress: PropTypes.func,
  renderMessageImage: PropTypes.func,
  renderMessageText: PropTypes.func,
  renderCustomView: PropTypes.func,
  renderUsername: PropTypes.func,
  renderTime: PropTypes.func,
  renderTicks: PropTypes.func,
  currentMessage: PropTypes.object,
  nextMessage: PropTypes.object,
  previousMessage: PropTypes.object,
  user: PropTypes.object,
  containerStyle: PropTypes.shape({
    left: ViewPropTypes.style,
    right: ViewPropTypes.style,
  }),
  wrapperStyle: PropTypes.shape({
    left: ViewPropTypes.style,
    right: ViewPropTypes.style,
  }),
  messageTextStyle: Text.propTypes.style,
  usernameStyle: Text.propTypes.style,
  tickStyle: Text.propTypes.style,
  containerToNextStyle: PropTypes.shape({
    left: ViewPropTypes.style,
    right: ViewPropTypes.style,
  }),
  containerToPreviousStyle: PropTypes.shape({
    left: ViewPropTypes.style,
    right: ViewPropTypes.style,
  }),
};