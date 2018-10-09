import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableOpacity,ImageBackground} from 'react-native';
import {scale} from '../global';

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
                 <View style={{flex:7,paddingHorizontal:scale(20)}}>
                    <View style={{flex:1}}>
                         <Text style={{fontSize:scale(16),color:'#3E85EF',fontFamily:'Montserrat-Medium'}}>You have a new message from <Text style={{fontFamily:'Montserrat-Bold'}}>Warren Pratt</Text></Text>
                         <Text style={{fontSize:scale(13),color:'#9B9B9B',marginVertical:scale(10)}}>On <Text style={{fontFamily:'Montserrat-Bold'}}>06/18/2018</Text> at <Text style={{fontFamily:'Montserrat-Bold'}}>08:00 PM</Text></Text>
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
    fontSize: scale(16),
  },
  button:{
    width: '100%',
    borderRadius:scale(30),
    paddingVertical:scale(10)
},
btnText: { 
    textAlign:'center',
    color:'white',
    fontFamily: 'Montserrat-Bold',
    fontSize:scale(15)
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
    width:scale(100),
    height:scale(100),

},
  servicesBox: {
    flex: 1,
    marginVertical: scale(10),
    marginHorizontal: scale(10),
    paddingVertical: scale(15),
    paddingHorizontal:scale(20),
    borderRadius:scale(10),
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
    width: scale(80),
    height: scale(80),
    borderRadius:scale(5),
    position: 'relative',
    top: 0,
    left: 0
  },
  check: {
    width: scale(18),
    height: scale(18),
    borderRadius:scale(9),
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  iconStyle: {
     width:scale(15),
     height:scale(15)
  },
  iconButton: {
    marginHorizontal:scale(5),
    width: scale(45),
    height:scale(45),
    borderRadius:scale(30),
    justifyContent:'center',
    alignItems:'center'
  }
  })

export default NotificationsList;