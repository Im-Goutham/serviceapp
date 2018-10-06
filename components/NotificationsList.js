import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableOpacity,ImageBackground} from 'react-native';
import {Icon} from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NotificationsList extends Component {

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
      images:[{
          image: require('../images/service1.png')
        },
        {
          image: require('../images/service2.png')
         },
        {
          image: require('../images/service3.png')
         },
      ],
      imgIndex: 0,
      photoShow:false
    };
  }

  _renderRow(rowData, sectionID, rowID) {
    return (
       <TouchableOpacity onPress={()=>this.props.navigation.navigate('message')}>
          <View style={styles.servicesBox} >
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:2}}>
                    <View style={styles.imageShadow}>
                                      <Image source={require('../images/svp1.png')} style={[styles.img_placeholder,{borderRadius:35,width:70,height:70}]}/>
                                      <Image source={require('../images/check.png')} style={styles.check}/>
                     </View>
                 </View>   
                 <View style={{flex:7,paddingHorizontal:20}}>
                    <View style={{flex:1}}>
                         <Text style={{fontSize:16,color:'#3E85EF',fontFamily:'Montserrat-Medium'}}>You have a new message from <Text style={{fontFamily:'Montserrat-Bold'}}>Warren Pratt</Text></Text>
                         <Text style={{fontSize:13,color:'#9B9B9B',marginVertical:10}}>On <Text style={{fontFamily:'Montserrat-Bold'}}>06/18/2018</Text> at <Text style={{fontFamily:'Montserrat-Bold'}}>08:00 PM</Text></Text>
                    </View>
                   
                
                 </View> 
            </View>    
          </View>
         </TouchableOpacity> 
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
    console.log('came here too notifications')
    return ( 
        <ListView
          scrollEnabled
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          style={styles.listview}
        />  
    );
  }

}


var styles = StyleSheet.create({
   listview: {
    flex: 1,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  button:{
    width: '100%',
    borderRadius:30,
    paddingVertical:10
},
btnText: { 
    textAlign:'center',
    color:'white',
    fontFamily: 'Montserrat-Bold',
    fontSize:15
},
imgBox: {
    flex:1,
    padding:1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,

},
imgStyle:{
    width:100,
    height:100,

},
  servicesBox: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 15,
    paddingHorizontal:20,
    borderRadius:10,
    backgroundColor:'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  imageShadow: {
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  img_placeholder: {
    width: 80,
    height: 80,
    borderRadius:5,
    position: 'relative',
    top: 0,
    left: 0
  },
  check: {
    width: 18,
    height: 18,
    borderRadius:9,
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  iconStyle: {
     width:15,
     height:15
  },
  iconButton: {
    marginHorizontal:5,
    width: 45,
    height:45,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
  }
  })

export default NotificationsList;