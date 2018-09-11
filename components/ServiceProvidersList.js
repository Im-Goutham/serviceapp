//  include react-native-swipeout
import Swipeout from 'react-native-swipeout';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LinearGradient from 'react-native-linear-gradient';

class ServiceProvidersList extends Component {

  constructor() {
    super();

    //  datasource rerendered when change is made (used to set swipeout to active)
    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => true});

    this.state = {
      dataSource: ds.cloneWithRows([
           {
                text: 'list 1'
           },
           {
                 text: 'list 2'
           },
           {
                  text: 'list 3'
           },
           {
                  text: 'list 4'
           },
          {
                  text: 'list 5'
           }
      ]),
      sectionID: null,
      rowID: null,
      images:['https://www.drupal.org/files/issues/sample_7.png',
              'https://www.sample-videos.com/img/Sample-png-image-500kb.png',
              'https://images.template.net/wp-content/uploads/2016/02/05070714/Landscape-Nature-Sunset-Trees-HD-Free-Background.jpg'
      ],
      imgIndex: 0,
      photoShow:false
    };
  }

  _renderRow(rowData, sectionID, rowID) {
    const btnsTypes = [
        {
            component: <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                alignContent: 'center'
              }}>
              <Icon name='md-heart-outline' style={{color: 'white', fontSize: 27}}/>
            </View>,
            backgroundColor: '#007FFA',
            onPress:()=>{console.log(rowData.text)}
        },
        {
            component: <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                alignContent: 'center'
              }}>
              <Icon name='md-share' style={{color: 'white', fontSize: 27}}/>
            </View>,
            backgroundColor: '#007FFA',
            onPress:()=>{console.log(rowData.text)}
        }
      ];

    return (
      <Swipeout
        close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
        left={null}
        right={btnsTypes}
        rowID={rowID}
        sectionID={sectionID}
        autoClose={rowData.autoClose}
        backgroundColor={rowData.backgroundColor}
        onOpen={(sectionID, rowID) => {
          this.setState({
            sectionID,
            rowID,
          })
        }}
        onClose={() => console.log('===close') }
        scroll={event => console.log('scroll event') }
      >
       
          <View style={styles.li} >
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:2}}>
                      <Image style={{width:50,height:50,borderRadius:25}} source={require('../images/user_placeholder.png')} />
                 </View>   
                 <View style={{flex:5}}>
                    <View style={{flex:1}}>
                         <Text style={{fontSize:18}}>Wesley R.</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',paddingTop:10,paddingBottom:10}}>
                       <View style={{flexDirection:'row',justifyContent:'space-around'}}><Icon style={{color:'#da8f25',fontSize:15}} active name="ios-star" /><Text style={{marginLeft:8,marginRight:8}}>3km</Text></View>
                       <View style={{flexDirection:'row',justifyContent:'space-around'}}><Icon style={{color:'#718e57',fontSize:15}} active name="ios-chatbubbles" /><Text style={{marginLeft:8,marginRight:8}}>3km</Text></View>
                       <View style={{flexDirection:'row',justifyContent:'space-around'}}><Icon style={{color:'red',fontSize:15}} active name="md-pin" /><Text style={{marginLeft:8,marginRight:8}}>3km</Text></View>
                    </View>
                    <View style={{flex:1}}>
                          <Text>14 Jobs Done</Text>
                    </View>
                 </View> 
                 <View style={{flex:2,marginTop:3,marginBottom:3}}>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                           <View><Icon style={{color:'red',fontSize:15}} active name="md-heart" /></View><View><Icon style={{fontSize:15}} active name="md-share" /></View>
                        </View>     
                 </View> 
            </View>    
            <View style={{flex:1,flexDirection:'row',marginTop:10}}>
                {
                    this.state.images.map((image,key)=>{
                         return  <TouchableWithoutFeedback  onPress={()=>{this.showImage(key)}} key={key}>
                                    <View style={{flex:1,padding:1}} >
                                      <Image style={styles.imgStyle} source={{uri:image}}/>
                                  </View>  
                                 </TouchableWithoutFeedback>
                    })
                }
            </View>
            <View style={{flex:1,paddingTop:10,paddingBottom:10}}>
                 <View style={{flex:2}}>
                    <Text style={{fontSize:12}} numberOfLines={2}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                 </View>
                 <View style={{flex:1}}>
                     <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                       <TouchableOpacity><Text style={styles.btnText}>HIRE NOW</Text></TouchableOpacity>
                     </LinearGradient>
                 </View>
            </View>
          </View>

      </Swipeout>
    );
  }

  showImage(index){
    console.log('imgIndex',index);
    let {images} = this.state;
    let imagesArray = images.map((image)=>{
        return {url:image}
    })
    this.props.showPhotoView({index,images:imagesArray,photoShow:true})
    
  }

  render() {
    let {images,imgIndex,photoShow} = this.state;
    return ( 
      <View style={{flex:1}}>
        <ListView
          scrollEnabled
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          style={styles.listview}
        />
      </View>   
    );
  }

}


var styles = StyleSheet.create({
   listview: {
    flex: 1,
  },
   li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingVertical: 16,
    flex:1
  },
  liText: {
    color: '#333',
    fontSize: 16,
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
imgStyle:{
    width:'100%',
    height:75
}
  })

export default connect(null, actions)(ServiceProvidersList);