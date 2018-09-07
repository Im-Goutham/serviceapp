//  include react-native-swipeout
import Swipeout from 'react-native-swipeout';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback,Image,TouchableHighlight} from 'react-native';
import {Icon} from 'native-base';
import Share, {ShareSheet, Button} from 'react-native-share';

let joblist = {
  data : [
    {
      jobtitle: 'Need Cook',
      icon: require('../assets/icons/crown.png'),
      image: require('../images/tutorial.png'),
      detail: "Lorem Ipsum has been the industrys standard dummy text ever",
    },
    {
      jobtitle: 'Need Carpenter',
      icon: require('../assets/icons/crown.png'),
      image: require('../images/tutorial.png'),
      detail: "Lorem Ipsum has been the industrys standard dummy text ever",
    },
    {
      jobtitle: 'Need Cook',
      icon: require('../assets/icons/crown.png'),
      image: require('../images/tutorial.png'),
      detail: "Lorem Ipsum has been the industrys standard dummy text ever",
    },
  ]
}
class JobsList extends Component {
  constructor(props){
      super(props);
      this.state={
          loaded:false,
          refreshing: false,
          dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      }
  }
  componentDidMount(){
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(joblist.data),
      })
  }
  _renderRow(data, sectionID, rowID) {
    let shareOptions = {
      title: "React Native",
      message: "Hola mundo",
      url: "http://facebook.github.io/react-native/",
      subject: "Share Link" //  for email
    };
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
              <Icon name='md-heart-outline' style={{color: 'white', fontSize: 27, textAlign: 'center'}}/>
            </View>,
            backgroundColor: '#007FFA',
            onPress:()=>{console.log(data.text)}
        },
        {
            component: <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                alignContent: 'center'
              }}
              >
              <Icon name='md-share' style={{color: 'white', fontSize: 27, textAlign: 'center'}} />
            </View>,
            backgroundColor: '#007FFA',
            onPress:()=>{ Share.open(shareOptions)}
        }
      ];
    return (
      <Swipeout
        close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
        left={null}
        right={btnsTypes}
        rowID={rowID}
        sectionID={sectionID}
        autoClose={data.autoClose}
        backgroundColor={data.backgroundColor}
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
                <View style={{flex:2, flexDirection: 'row'}}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>{data.jobtitle}</Text>
                    <Image style={{width:"100%",height:20}} source={data.icon}
                      resizeMode="contain" resizeMethod="resize"/>
                 </View>
                 <View style={{flex:2}}>
                    <Text style={{fontSize:16,color:'#008000'}}>$240</Text>
                 </View>
                 <View style={{flex:1}}>
                         <TouchableHighlight style={styles.button}><Text style={styles.btnText}>APPLY</Text></TouchableHighlight>
                 </View>
            </View>
            <View style={{flex:1,flexDirection:'row',marginTop:10}}>
                <View style={{flex:1}}>
                    <Image style={{width:70,height:55}} source={require('../images/img_placeholder.png')} />
                 </View>
                 <View style={{flex:3,flexDirection:'column'}}>
                    <View style={{flex:1}}>
                      <Text style={{fontSize:12}} numberOfLines={2}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <View style={{flex:2}}>
                              <Text style={{fontSize:12,fontWeight:'bold'}}><Icon style={{color:'#007FFA',fontSize:15}} active name="ios-calendar-outline" /> <Text style={{paddingLeft:5}}>Before the 19 Sep 2018</Text></Text>
                        </View>
                        <View style={{flex:1}}>
                              <Text style={{fontSize:12,fontWeight:'bold'}}><Icon style={{color:'#c33c4c',fontSize:15}} active name="md-pin" />  <Text style={{paddingLeft:5}}>3km </Text></Text>
                        </View>
                    </View>
                 </View>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </Swipeout>
    );
  }


  shareJob(){
    console.log('share icon clicked')
    let shareOptions = {
      title: "React Native",
      message: "Hola mundo",
      url: "http://facebook.github.io/react-native/",
      subject: "Share Link" //  for email
    };
    Share.open(shareOptions);
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
    padding: 16,
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
  })

export default JobsList;
