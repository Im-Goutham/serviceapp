
import React, { Component } from 'react';
import {StyleSheet, View,TouchableNativeFeedback} from 'react-native';
import {Button, Text } from 'native-base';
import MapView, { Callout, Marker, ProviderPropType } from 'react-native-maps';


export default class Map extends Component {

  constructor() {
    super();
     this.state = {
        region: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        coordinate: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
        poi: null
     }
     this.onPoiClick = this.onPoiClick.bind(this);
  }

  componentDidMount(){
      let {location} = this.props;
      console.log('user data in map is '+JSON.stringify(location));
      let coordinate = {};
      if(location){
           coordinate.latitude = location.lat;
           coordinate.longitude = location.long;;
           let region = this.regionFrom(location.lat,location.long,200);
           console.log('region in map is '+JSON.stringify(region));
           this.setState({region,coordinate})
      }

  }

  regionFrom(lat, lon, distance) {
      distance = distance/2
      const circumference = 40075
      const oneDegreeOfLatitudeInMeters = 111.32 * 1000
      const angularDistance = distance/circumference

      const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
      const longitudeDelta = Math.abs(Math.atan2(
              Math.sin(angularDistance)*Math.cos(lat),
              Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))

      return result = {
          latitude: lat,
          longitude: lon,
          latitudeDelta,
          longitudeDelta,
      }
  }



  onPoiClick(e) {
    const poi = e.nativeEvent;

    this.setState({
      poi,
    });
  }

  callOutClicked(e){
        console.log('event is ',e.nativeEvent);
  }

  render() {
    let {region,coordinate} = this.state;
    
    return (
      <MapView
        style={ styles.map }
        initialRegion={region}
        onPoiClick={this.onPoiClick}
      >
            <Marker
              coordinate={coordinate}
            >
              <Callout onPress={this.callOutClicked}>
                <View>
                  <Text>Place Id: Testing ...........</Text>
                  <Text>Name: Goutham</Text>
                  <Button onPress={()=>{console.log('marker clicked')}}><Text> Apply </Text></Button>
                </View>
              </Callout>
            </Marker>
      </MapView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});


// <MapView
//   style={ styles.map }
//   initialRegion={region}
// >
//   <Marker
//      coordinate={coordinate}
//      title={'Goutham'}
//      description={''}
//    />
// </MapView>
