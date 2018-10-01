//  include react-native-swipeout
import Swipeout from 'react-native-swipeout';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableOpacity,ImageBackground} from 'react-native';
import {Icon} from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LinearGradient from 'react-native-linear-gradient';

class ChatList extends Component {

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
    const btnsTypes = [
        {
            component:  <LinearGradient
            colors={['#F42922', '#A50600']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              width:'100%',
              marginVertical:5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              alignContent: 'center',
              borderRadius:10,
              height:120
            }}>
                <Image style={{width:30,height:30}} source={require('../assets/icons/user_block.png')}   resizeMode="contain" resizeMethod="resize"/>
                <Text style={{color:'white', fontFamily:'Montserrat-Bold',paddingVertical:5}}>Block</Text>
              </LinearGradient>,
             backgroundColor: 'transparent',
            onPress:()=>{console.log(rowData.text)}
        }
      ];

    return (
      <Swipeout
        sensitivity={1}
        close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
        left={null}
        right={btnsTypes}
        rowID={rowID}
        sectionID={sectionID}
        buttonWidth={140}
        autoClose={rowData.autoClose}
        backgroundColor={'rgb(249,252,255)'}
        onOpen={(sectionID, rowID) => {
          this.setState({
            sectionID,
            rowID,
          })
        }}
        onClose={() => console.log('===close') }
        scroll={event => console.log('scroll event') }
      >
       <TouchableWithoutFeedback   onPress={() => {this.props.navigation.navigate('message')}}>
          <View style={styles.servicesBox} >
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:2}}>
                    <View style={styles.imageShadow}>
                                      <Image source={require('../images/svp1.png')} style={[styles.img_placeholder,{borderRadius:35,width:70,height:70}]}/>
                     </View>
                 </View>   
                 <View style={{flex:7,paddingHorizontal:20,justifyContent:'space-around'}}>
                  
                         <View style={{flexDirection:'row'}}>
                           <View style={{flex:2}}>
                             <Text style={{fontSize:17,color:'rgb(62,136,235)',textAlign:'left'}}>Micheal Y.∂∂</Text>
                           </View>
                           <View style={{flex:1,alignItems:'flex-end'}}>
                              <Text style={{textAlign:'right',fontSize:12,color:'rgb(155,155,155)'}}>Yesterday</Text>
                           </View>
                          </View>
                         <View><Text style={{fontSize:14,color:'rgb(155,155,155)',marginVertical:10}}>A eget vestibulum magnis non..</Text></View>
                         

                 </View> 
            </View>    
          </View>
          </TouchableWithoutFeedback>
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
      <View style={{flex:1,backgroundColor:"rgb(249,252,255)"}}>
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
overlay: {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius:5,
  backgroundColor: 'rgba(0,0,0,.6)',
  opacity: 2,
  justifyContent:'center',
  alignItems:'center'
},
imgStyle:{
    width:100,
    height:100,

},
  servicesBox: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 25,
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
  tagStyle:{
     backgroundColor: 'rgb(239,186,47)',
     borderRadius:10,
     overflow:"hidden",
     paddingVertical:2,
     paddingLeft:10,
     paddingRight:30,
     color: 'white',
     fontFamily: 'Montserrat-Bold'
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

export default connect(null, actions)(ChatList);