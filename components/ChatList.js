//  include react-native-swipeout
import Swipeout from 'react-native-swipeout';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableOpacity,ImageBackground} from 'react-native';
import {Icon} from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from '../global';


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
              marginVertical:scale(5),
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              alignContent: 'center',
              borderRadius:scale(10),
              height:scale(120)
            }}>
                <Image style={{width:scale(30),height:scale(30)}} source={require('../assets/icons/user_block.png')}   resizeMode="contain" resizeMethod="resize"/>
                <Text style={{color:'white', fontFamily:'Montserrat-Bold',paddingVertical:scale(5)}}>Block</Text>
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
        buttonWidth={scale(140)}
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
                                      <Image source={require('../images/svp1.png')} style={[styles.img_placeholder,{borderRadius:scale(35),width:scale(70),height:scale(70)}]}/>
                     </View>
                 </View>   
                 <View style={{flex:7,paddingHorizontal:scale(10),justifyContent:'space-around'}}>
                  
                         <View style={{flexDirection:'row'}}>
                           <View style={{flex:2}}>
                             <Text style={{fontSize:scale(17),fontFamily:'Montserrat-Regular',color:'#3E85EF',textAlign:'left'}}>Micheal Y.∂∂</Text>
                           </View>
                           <View style={{flex:1,alignItems:'flex-end'}}>
                              <Text style={{textAlign:'right',fontFamily:'Montserrat-Regular',fontSize:scale(13),color:'#3E85EF'}}>Yesterday</Text>
                           </View>
                          </View>
                         <View><Text style={{fontSize:scale(14),fontFamily:'Montserrat-Regular',color:'#9B9B9B',marginVertical:scale(10)}}>A eget vestibulum magnis non..</Text></View>
                         

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
    width:scale(100),
    height:scale(100),

},
  servicesBox: {
    flex: 1,
    marginVertical: scale(5),
    marginHorizontal: scale(10),
    paddingVertical: scale(25),
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
  tagStyle:{
     backgroundColor: 'rgb(239,186,47)',
     borderRadius:scale(10),
     overflow:"hidden",
     paddingVertical:scale(2),
     paddingLeft:scale(10),
     paddingRight:scale(30),
     color: 'white',
     fontSize: scale(14),
     fontFamily: 'Montserrat-Bold'
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

export default connect(null, actions)(ChatList);