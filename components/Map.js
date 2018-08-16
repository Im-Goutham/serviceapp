
import React, { Component } from 'react';
import {StyleSheet, View,TouchableHighlight,Image,Dimensions} from 'react-native';
import {Icon, Text } from 'native-base';
import MapView, { Callout, Marker, ProviderPropType } from 'react-native-maps';
const { width, height } = Dimensions.get('window')

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
     //   console.log('event is ',e.nativeEvent);
  }
  onRegionChange(region) {
  //  console.log('regiom is ',region);
  }

  render() {
    let {region,coordinate} = this.state;
    
    return (
      <MapView
        style={ styles.map }
        initialRegion={region}
        onRegionChange={this.onRegionChange}
        onPoiClick={this.onPoiClick}
      >
            <Marker
              coordinate={coordinate}
            >
              <Callout onPress={this.callOutClicked} tooltip={true} style={{backgroundColor:'red'}}>
              <View style={styles.li} >
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Need Cook</Text>
                    </View>   
                    <View style={{flex:1}}>
                        <Text style={{fontSize:16,color:'#008000'}}>$240</Text>
                    </View> 
                    <View style={{flex:1}}>
                            <TouchableHighlight style={styles.button} onPress={()=>{alert('clicked')}}><Text style={styles.btnText}>APPLY</Text></TouchableHighlight>
                    </View> 
                </View>   
              <View style={{flex:1,flexDirection:'row',marginTop:10}}>
                <Text style={{fontSize:12}} numberOfLines={2}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
              </View>   
                  <View style={{flex:1,flexDirection:'row',marginTop:10}}>
                            <View style={{flex:1,padding:1}}>
                            <Image style={styles.imgStyle} source={require('../images/img_placeholder.png')} />
                            </View>
                            <View style={{flex:1,padding:1}}>
                            <Image style={styles.imgStyle} source={require('../images/img_placeholder.png')} />
                            </View>
                            <View style={{flex:1,padding:1}}>
                            <Image style={styles.imgStyle} source={require('../images/img_placeholder.png')} />
                            </View>
                  </View>  
                  <View style={{flex:1,flexDirection:'row',marginTop:10}}>
                      <View style={{flex:3,flexDirection:'row',padding:2,justifyContent:'center'}}>
                         <Icon style={{color:'#007FFA',fontSize:18}} active name="ios-calendar-outline" /><Text style={{fontSize:12,fontWeight:'bold'}}>Before the 19 Sep 2018</Text>
                      </View>  
                      <View style={{flex:2,flexDirection:'row',padding:2,justifyContent:'center'}}>
                      <Icon style={{color:'#c33c4c',fontSize:18}} active name="md-pin" /><Text style={{fontSize:12,fontWeight:'bold'}}> 3km </Text>
                      </View>  
                      <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                        <Icon style={{color:'black',fontSize:18}} active name="md-heart-outline" />
                        <Icon style={{color:'black',fontSize:18}} active name="md-share" />
                      </View>  
                </View> 
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
  imgStyle: {width:'100%',height:80}
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
