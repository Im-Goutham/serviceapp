//  include react-native-swipeout
import Swipeout from 'react-native-swipeout';
import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'native-base';
import Header from '../components/Header';


class ServiceScreen extends Component {

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
              <Icon name='md-heart-outline' style={{color: 'white', fontSize: 27, textAlign: 'center'}}/>
            </View>,
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
              <Icon name='md-share' style={{color: 'white', fontSize: 27, textAlign: 'center'}}/>
            </View>,
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
        <TouchableWithoutFeedback onPress={() => console.log('press children')}>
          <View style={styles.li} >
            <Text style={styles.liText}>{rowData.text}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Swipeout>
    );
  }

  render() {
    return (
        <View style={{flex:1}}>
        <Header navigation={this.props.navigation} title={'Services'}/>
        <View style={styles.container}>
        <ListView
          scrollEnabled
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          style={styles.listview}
        />
        </View>
      </View>
    );
  }

}


var styles = StyleSheet.create({
    container: {
        flex: 1
   },
   listview: {
    flex: 1,
  },
   li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  }
  })

export default ServiceScreen;