import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions
} from 'react-native';
import {Icon} from 'native-base';
import MapView ,{ Marker } from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import {scale} from '../global';
 
export default class RnDirectionsApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: [
        { latitude: 17.704788, longitude: 83.297144 },
        { latitude: 17.700209, longitude: 83.296457 },
        { latitude: 17.695303, longitude: 83.292339 },
        { latitude: 17.686144, longitude: 83.286505},
        { latitude: 17.678948, longitude: 83.284446 },
        { latitude: 17.670443, longitude: 83.275867 },
        { latitude: 17.661283, longitude: 83.263170},
        { latitude: 17.646234, longitude: 83.244981 },
        { latitude: 17.632535, longitude: 83.227539 }
      ],
      markers: [
        { latitude: 17.704788, longitude: 83.297144 },
        { latitude: 17.632535, longitude: 83.227539 }
      ],
        showDirection:false
    }
  }

  componentDidMount() {
    // find your origin and destination point coordinates and pass it to our method.
    // I am using Bursa,TR -> Istanbul,TR for this example
   // this.getDirections("23.022505, 72.571365", "23.032469,72.491236")
  }

  async getDirections(startLoc, destinationLoc) {
      var apiKey = 'AIzaSyC01ARNbZ6MXcpk-XTaaEAPpbPwhn_ntMM';
        try {
            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }&key=${apiKey}`)
            let respJson = await resp.json();
            console.log('respJson is ',respJson);
            let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            let coords = points.map((point, index) => {
                return  {
                    latitude : point[0],
                    longitude : point[1]
                }
            })
            this.setState({coords: coords,showDirection:true})
            return coords
        } catch(error) {
            alert(error)
            return error
        }
    }

  render() {
      let {showDirection} = this.state;
    return (
      <View style={{flex:1}}>
              <MapView style={styles.map} initialRegion={{
                  latitude: 17.678948, longitude: 83.284446,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}>

                          <MapView.Polyline
                            coordinates={this.state.coords}
                            strokeWidth={4}
                            strokeColor="rgb(62,132,235)"/>
                  <Marker
                     coordinate={{latitude: 17.704788, longitude: 83.297144  }}
                     image={require('../assets/icons/map_location_red.png')}
                   >
                     <MapView.Callout tooltip >
                     <View style={{justifyContent:'center',flexDirection:'column'}}>
                        <Text style={styles.tooltipStyle}>YOU ARE HERE</Text>
                        <Icon name='md-arrow-dropdown' style={{color:'#F42922',marginTop:scale(-13),marginLeft:scale(55)}}/> 
                     </View>
                  </MapView.Callout>
                   </Marker>
                    <Marker
                     coordinate={{latitude: 17.678948, longitude: 83.284446 }}
                     image={require('../assets/icons/car.png')}
                     >
                   </Marker>
                   <Marker
                     coordinate={{latitude: 17.632535, longitude: 83.227539  }}
                     image={require('../assets/icons/map_location_blue.png')}
                     >
                   </Marker>

              </MapView>
              </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  tooltipStyle:{
    width: scale(125),
    backgroundColor: 'red',
    borderRadius:scale(5),
    overflow:"hidden",
    paddingVertical:scale(2),
    paddingLeft:scale(10),
    paddingRight:scale(10),
    color: 'white',
    fontSize: scale(13),
    fontFamily: 'Montserrat-Bold'
},
});


// {(this.state.showMap)?(
//   <MapView style={styles.map} initialRegion={{
//       latitude:23.022505,
//       longitude:72.571365,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421
//     }}>

//     {/*<MapView.Polyline*/}
//         {/*coordinates={this.state.coords}*/}
//         {/*strokeWidth={4}*/}
//         {/*strokeColor="#ff9933"/>*/}
//       {/*<Marker*/}
//          {/*coordinate={latitude: 23.022505, longitude: 72.571365}*/}
//          {/*image={require('../assets/icons/map_location_red.png')}*/}
//        {/*/>*/}
//        <Marker
//          coordinate={latitude: 23.022505, longitude: 72.571365}
//          image={require('../assets/icons/map_location_blue.png')}
//         />

//   </MapView>
// ):(
//    null
// )}