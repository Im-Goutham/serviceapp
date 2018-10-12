
import React, { Component } from 'react';
import {StyleSheet, View,TouchableHighlight,Image,Dimensions,ImageBackground} from 'react-native';
import {Icon, Text } from 'native-base';
import MapView, { Callout, Marker, ProviderPropType } from 'react-native-maps';
const { width, height } = Dimensions.get('window')
import {scale} from '../global';

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
      <View style={{flex:1}}>
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
              image={require('../assets/icons/map_location_blue.png')}
            >
              {/* <ImageBackground 
                source={require('../assets/icons/map_location_blue.png')} 
                style={{ width: scale(30), height: scale(30) }}
                resizeMode="contain" 
                resizeMethod="resize" 
                onLoad={() => this.forceUpdate()}
                /> */}
            </Marker>
          })
          }  
          <Marker
              coordinate={coordinate}
              image={require('../assets/icons/map_location_red.png')}
            >
                {/* <ImageBackground 
                    source={require('../assets/icons/map_location_red.png')} 
                    style={{ width: scale(30), height: scale(30) }} 
                    resizeMode="contain" 
                    resizeMethod="resize"
                    onLoad={() => this.forceUpdate()}
                    /> */}
                <MapView.Callout tooltip >
                  <View style={{justifyContent:'center',flexDirection:'column'}}>
                            <Text style={styles.tooltipStyle}>YOU ARE HERE</Text>
                            <Icon name='md-arrow-dropdown' style={{color:'#F42922',marginTop:scale(-13),marginLeft:scale(55)}}/> 
                  </View>
              </MapView.Callout>
            </Marker> 
          </MapView>
      </View>
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
    width:width-scale(40),
    padding:scale(10)
  },
    button:{
      backgroundColor:'#008000',
      width: '100%',
      borderRadius:scale(20),
      borderWidth: scale(1),
      borderColor: '#008000',
      paddingTop:scale(5),
      paddingBottom:scale(5),
  },
  btnText: { 
      textAlign:'center',
      color:'white',
      fontFamily: 'Montserrat-Bold',
      fontSize:scale(12)
  },
  tooltipStyle:{
    width: scale(125),
    backgroundColor: '#F42922',
    borderRadius:scale(5),
    overflow:"hidden",
    paddingVertical:scale(2),
    paddingLeft:scale(10),
    paddingRight:scale(10),
    color: 'white',
    fontSize: scale(13),
    fontFamily: 'Montserrat-Bold'
},
  imgStyle: {width:'100%',height:scale(80)}
});