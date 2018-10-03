
import React, { Component } from 'react';
import {StyleSheet, View,TouchableHighlight,Image,Dimensions} from 'react-native';
import {Icon, Text } from 'native-base';
import MapView, { Callout, Marker, ProviderPropType } from 'react-native-maps';
const { width, height } = Dimensions.get('window')

export default class Map extends Component {

  constructor() {
    super();
     this.state = {
       markers: [
          {latitude: 17.696503, longitude: 83.195415},
          {latitude: 17.698105, longitude: 83.247698},
        ],
        region: {
          latitude: 17.722621,
          longitude: 83.226069,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        coordinate: {latitude: 17.722621, longitude: 83.226069},
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
     //   console.log('event is ',e.nativeEvent);
  }
  onRegionChange(region) {
  //  console.log('regiom is ',region);
  }

  render() {
    let {region,coordinate} = this.state;
    console.log('coordinate is - ',coordinate);
    return (
      <MapView
      style={ styles.map }
      initialRegion={region}
      onRegionChange={this.onRegionChange}
      onPoiClick={this.onPoiClick}
      >
      {
       this.state.markers.map((coordinate,key)=>{
           return   <Marker
           coordinate={coordinate}
           key={key}
           onPress={()=>this.props.pinPress()}
         >
          <Image source={require('../assets/icons/map_location_blue.png')} style={{ width: 30, height: 30 }} resizeMode="contain" resizeMethod="resize"/>
         </Marker>
       })
      }  
      <Marker
           coordinate={coordinate}
         >
            <Image source={require('../assets/icons/map_location_red.png')} style={{ width: 30, height: 30 }} resizeMode="contain" resizeMethod="resize"/>
            <MapView.Callout tooltip >
               <View style={{justifyContent:'center'}}>
                        <Text style={styles.tooltipStyle}>YOU ARE HERE</Text>
              </View>
           </MapView.Callout>
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
  li: {
    backgroundColor: '#fff',
    flex:1,
    width:width-40,
    padding:10
  },
    button:{
      backgroundColor:'#008000',
      width: '100%',
      borderRadius:20,
      borderWidth: 1,
      borderColor: '#008000',
      paddingTop:5,
      paddingBottom:5,
  },
  btnText: { 
      textAlign:'center',
      color:'white',
      fontWeight:'bold',
      fontSize:12
  },
  tooltipStyle:{
    width: 125,
    backgroundColor: 'red',
    borderRadius:5,
    overflow:"hidden",
    paddingVertical:2,
    paddingLeft:10,
    paddingRight:10,
    color: 'white',
    fontSize: 13,
    fontFamily: 'Montserrat-Bold'
},
  imgStyle: {width:'100%',height:80}
});