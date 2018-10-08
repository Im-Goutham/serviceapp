//  include react-native-swipeout
import Swipeout from 'react-native-swipeout';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableHighlight} from 'react-native';
import {Icon} from 'native-base';
import {scale} from '../global';


class SelectList extends Component {

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
              <Icon name='md-heart-outline' style={{color: 'white', fontSize: scale(27), textAlign: 'center'}}/>
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
              <Icon name='md-share' style={{color: 'white', fontSize: scale(27), textAlign: 'center'}}/>
            </View>,
            backgroundColor: '#007FFA',
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
        <TouchableWithoutFeedback onPress={() => console.log('press children')}>
          <View style={styles.li} >
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:2}}>
                    <Text style={{fontSize:scale(16),fontWeight:'bold'}}>Need Cook</Text>
                 </View>   
                 <View style={{flex:1}}>
                    <Text style={{fontSize:scale(16),color:'#008000'}}>$240</Text>
                 </View> 
                 <View style={{flex:1}}>
                        <Text style={styles.btnText} onPress={()=> this.props.navigation.goBack()}>SELECT</Text>
                 </View> 
            </View>    
            <View style={{flex:1,flexDirection:'row',marginTop:scale(10)}}>
                <View style={{flex:1}}>
                    <Image style={{width:scale(70),height:scale(55)}} source={require('../images/img_placeholder.png')} />
                 </View>   
                 <View style={{flex:3,flexDirection:'column'}}>
                    <View style={{flex:1}}>
                      <Text style={{fontSize:scale(12)}} numberOfLines={2}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:scale(5)}}>
                        <View style={{flex:2}}>
                              <Text style={{fontSize:scale(12),fontWeight:'bold'}}><Icon style={{color:'#007FFA',fontSize:scale(15)}} active name="ios-calendar-outline" /> <Text style={{paddingLeft:scale(5)}}>Before the 19 Sep 2018</Text></Text>
                        </View>
                        <View style={{flex:1}}>
                              <Text style={{fontSize:scale(12),fontWeight:'bold'}}><Icon style={{color:'#c33c4c',fontSize:scale(15)}} active name="md-pin" />  <Text style={{paddingLeft:scale(5)}}>3km </Text></Text>
                        </View>
                    </View>
                 </View> 
            </View>
       
          </View>
        </TouchableWithoutFeedback>
      </Swipeout>
    );
  }

  render() {
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
   li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    padding: scale(16),
    flex:1
  },
  liText: {
    color: '#333',
    fontSize: scale(16),
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
    color:'red',
    fontWeight:'bold',
    fontSize:scale(15)
},
  })

export default SelectList;