import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ViewPropTypes,
  Alert
} from 'react-native';
import { Icon } from 'native-base';
import MapView from 'react-native-maps';
import Sound from "react-native-sound";
import {scale} from '../global';

export default class CustomView extends React.Component {

  constructor(){
      super();
      this.state = {
           playAudio: false,
      };
  }

  render() {
    console.log('message is ',this.props.currentMessage);
    if (this.props.currentMessage.location) {
      return (
        <TouchableOpacity style={[styles.container, this.props.containerStyle]} onPress={() => {
          const url = Platform.select({
            ios: `http://maps.apple.com/?ll=${this.props.currentMessage.location.latitude},${this.props.currentMessage.location.longitude}`,
            android: `http://maps.google.com/?q=${this.props.currentMessage.location.latitude},${this.props.currentMessage.location.longitude}`
          });
          Linking.canOpenURL(url).then(supported => {
            if (supported) {
              return Linking.openURL(url);
            }
          }).catch(err => {
            console.error('An error occurred', err);
          });
        }}>
          <MapView
            style={[styles.mapView, this.props.mapViewStyle]}
            region={{
              latitude: this.props.currentMessage.location.latitude,
              longitude: this.props.currentMessage.location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            scrollEnabled={false}
            zoomEnabled={false}
          />
        </TouchableOpacity>
      );
    }
    else if(this.props.currentMessage.audio){
      return (
        <TouchableOpacity style={[styles.audioContainer, this.props.containerStyle]}>
             <Icon  
                name="md-play"
                style={[styles.play,{color:this.state.playAudio ? "red" : "blue"}]}
                onPress={() => {
                        console.log('play clicked')
                        this.setState({
                            playAudio: true
                        });
                        const sound = new Sound(this.props.currentMessage.audio, "", error => {
                            if (error) {
                                console.log("failed to load the sound", error);
                            }
                            this.setState({ playAudio: false });
                            sound.play(success => {
                                console.log(success, "success play");
                                if (!success) {
                                    Alert.alert("There was an error playing this audio");
                                }
                            });
                        });
                    }}/>
        </TouchableOpacity>
      );
    }
    else {return null};
  }
}

const styles = StyleSheet.create({
  container: {
  },
  mapView: {
    width: scale(150),
    height: scale(100),
    borderRadius: scale(13),
    margin: scale(3),
  },
  audioContainer: {
      height:scale(24),
      justifyContent: 'center',
      alignItems: 'center'
  },
  play: {
     fontSize: scale(18)
  }
});

CustomView.defaultProps = {
  currentMessage: {},
  containerStyle: {},
  mapViewStyle: {},
};

CustomView.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
  mapViewStyle: ViewPropTypes.style,
};