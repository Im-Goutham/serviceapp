
import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

import MapView, {Marker} from 'react-native-maps';


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
        }
     }

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

  render() {
    let {region,coordinate} = this.state;
    var mapStyle=[
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "saturation": "-9"
            },
            {
                "lightness": "0"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "weight": "1.00"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "weight": "0.49"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "weight": "0.01"
            },
            {
                "lightness": "-7"
            },
            {
                "saturation": "-35"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
];
    return (
      <MapView
        style={ styles.map }
        initialRegion={region}
        customMapStyle={mapStyle}
      >
        <Marker
           coordinate={coordinate}
           title={'Goutham'}
           description={''}
         />
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
