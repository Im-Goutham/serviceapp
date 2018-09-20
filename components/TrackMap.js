import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

// import MapView ,{ Marker } from 'react-native-maps';
import Polyline from '@mapbox/polyline';

export default class RnDirectionsApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: [],
      markers: [
        {latitude: 23.022505, longitude: 72.571365},
        {latitude: 23.032469, longitude: 72.491236}
      ],
        showMap:false
    }
  }

  componentDidMount() {
    // find your origin and destination point coordinates and pass it to our method.
    // I am using Bursa,TR -> Istanbul,TR for this example
    this.getDirections("23.022505, 72.571365", "23.032469,72.491236")
  }

  async getDirections(startLoc, destinationLoc) {
        try {
            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
            let respJson = await resp.json();
            let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            let coords = points.map((point, index) => {
                return  {
                    latitude : point[0],
                    longitude : point[1]
                }
            })
            this.setState({coords: coords,showMap:true})
            return coords
        } catch(error) {
            alert(error)
            return error
        }
    }

  render() {
    return (
      <View>
         

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