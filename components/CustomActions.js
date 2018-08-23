import PropTypes from 'prop-types';
import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewPropTypes,
  Text,
  Platform,
  PermissionsAndroid
} from 'react-native';
import {  Icon } from 'native-base';

// import CameraRollPicker from 'react-native-camera-roll-picker';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import { AudioRecorder, AudioUtils } from "react-native-audio";


export default class CustomActions extends React.Component {
  constructor(props) {
    super(props);
    this._images = [];
    this.state = {
      modalVisible: false,
      startAudio: false,
      hasPermission: false,
      audioPath: `${
          AudioUtils.DocumentDirectoryPath
          }/${this.messageIdGenerator()}test.aac`,
      playAudio: false,
      audioSettings: {
        SampleRate: 22050,
        Channels: 1,
        AudioQuality: "Low",
        AudioEncoding: "aac",
        MeteringEnabled: true,
        IncludeBase64: true,
        AudioEncodingBitRate: 32000
    }
    };
    this.onActionsPress = this.onActionsPress.bind(this);
    this.selectImages = this.selectImages.bind(this);
  }

  componentDidMount(){

      this.checkPermission().then(async hasPermission => {
        this.setState({ hasPermission });
        if (!hasPermission) return;
        await AudioRecorder.prepareRecordingAtPath(
            this.state.audioPath,
            this.state.audioSettings
        );
        AudioRecorder.onProgress = data => {
            console.log(data, "onProgress data");
        };
        AudioRecorder.onFinished = data => {
            console.log(data, "on finish");
        };
    });
  }

  checkPermission() {
    if (Platform.OS !== "android") {
        return Promise.resolve(true);
    }
    const rationale = {
        title: "Microphone Permission",
        message:
            "AudioExample needs access to your microphone so you can record audio."
    };
    return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        rationale
    ).then(result => {
        console.log("Permission result:", result);
        return result === true || result === PermissionsAndroid.RESULTS.GRANTED;
    });
}


messageIdGenerator() {
  // generates uuid.
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      let r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
  });
}


  setImages(images) {
    this._images = images;
  }

  getImages() {
    return this._images;
  }

  setModalVisible(visible = false) {
    this.setState({modalVisible: visible});
  }

  onActionsPress() {
    console.log('clicked..')
    const options = ['Choose From Library', 'Send Location','Send Audio', 'Cancel'];
    const cancelButtonIndex = options.length - 1;
    this.context.actionSheet().showActionSheetWithOptions({
      options,
      cancelButtonIndex,
    },
    (buttonIndex) => {
      console.log('buttonIndex is ',buttonIndex);
      switch (buttonIndex) {
        case 0:
          this.setModalVisible(true);
          break;
        case 1:
          navigator.geolocation.getCurrentPosition(
            (position) => {
              this.props.onSend({
                location: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                },
              });
            },
            (error) => alert(error.message)
          );
          break;
        case 2:
          this.handleAudio();
          break;
        default:
      }
    });
  }

  selectImages(images) {
    this.setImages(images);
  }

  renderNavBar() {
    return (
      <NavBar style={{
        statusBar: {
          backgroundColor: '#FFF',
        },
        navBar: {
          backgroundColor: '#FFF',
        },
      }}>
        <NavButton onPress={() => {
          this.setModalVisible(false);
        }}>
          <NavButtonText style={{
            color: '#000',
          }}>
            {'Cancel'}
          </NavButtonText>
        </NavButton>
        <NavTitle style={{
          color: '#000',
        }}>
          {'Camera Roll'}
        </NavTitle>
        <NavButton onPress={() => {
          this.setModalVisible(false);

          const images = this.getImages().map((image) => {
            return {
              image: image.uri,
            };
          });
          this.props.onSend(images);
          this.setImages([]);
        }}>
          <NavButtonText style={{
            color: '#000',
          }}>
            {'Send'}
          </NavButtonText>
        </NavButton>
      </NavBar>
    );
  }

  renderIcon() {
    if (this.props.icon) {
      return this.props.icon();
    }
    return (
      <View
        style={[styles.wrapper, this.props.wrapperStyle]}
      >
            <Icon active name="ios-mic-outline" />
      </View>
    );
  }



  renderAndroidMicrophone() {
    if (Platform.OS === "android") {
        return (
            <Icon
                name="ios-mic"
                size={35}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                color={this.state.startAudio ? "red" : "black"}
                style={{
                    bottom: 50,
                    right: Dimensions.get("window").width / 2,
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
}


handleAudio = async () => {
  console.log('audio clicked');
  const { user } = this.props;
  if (!this.state.startAudio) {
      this.setState({
          startAudio: true
      });
      await AudioRecorder.startRecording();
  } else {
      this.setState({ startAudio: false });
      await AudioRecorder.stopRecording();
      const { audioPath } = this.state;
      const fileName = `${this.messageIdGenerator()}.aac`;
      const file = {
          uri: Platform.OS === "ios" ? audioPath : `file://${audioPath}`,
          name: fileName,
          type: `audio/aac`
      };
      console.log('audio stopped ..');
      this.props.onSend({
      createdAt : Date.now(),
      text : "",
      audio : audioPath,
      messageType : "audio"
      });
      
     
      // const options = {
      //     keyPrefix: AwsConfig.keyPrefix,
      //     bucket: AwsConfig.bucket,
      //     region: AwsConfig.region,
      //     accessKey: AwsConfig.accessKey,
      //     secretKey: AwsConfig.secretKey,
      // };
      // RNS3.put(file, options)
      //     .progress(event => {
      //         console.log(`percent: ${event.percent}`);
      //     })
      //     .then(response => {
      //         console.log(response, "response from rns3 audio");
      //         if (response.status !== 201) {
      //             alert("Something went wrong, and the audio was not uploaded.");
      //             console.error(response.body);
      //             return;
      //         }
      //         const message = {};
      //         message._id = this.messageIdGenerator();
      //         message.createdAt = Date.now();
      //         message.user = {
      //             _id: user._id,
      //             name: `${user.firstName} ${user.lastName}`,
      //             avatar: user.avatar
      //         };
      //         message.text = "";
      //         message.audio = response.headers.Location;
      //         message.messageType = "audio";

      //         this.chatsFromFB.update({
      //             messages: [message, ...this.state.messages]
      //         });
      //     })
      //     .catch(err => {
      //         console.log(err, "err from audio upload");
      //     });
  }
};


  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.containerStyle]}
        onPress={this.onActionsPress}
      >
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          {this.renderNavBar()}
          {/*
                <CameraRollPicker
                    maximum={10}
                    imagesPerRow={4}
                    callback={this.selectImages}
                    selected={[]}
                />
          */}
          <Text>Camera selection</Text>
        </Modal>
        {this.renderIcon()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 15,
    marginBottom: 15,
  },
  wrapper: {
    flex: 1,
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});

CustomActions.contextTypes = {
  actionSheet: PropTypes.func,
};

CustomActions.defaultProps = {
  onSend: () => {},
  options: {},
  icon: null,
  containerStyle: {},
  wrapperStyle: {},
  iconTextStyle: {},
};

CustomActions.propTypes = {
  onSend: PropTypes.func,
  options: PropTypes.object,
  icon: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  iconTextStyle: Text.propTypes.style,
};