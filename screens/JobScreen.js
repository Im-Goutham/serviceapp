import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Map from '../components/Map';

class JobScreen extends Component {


    render() {
       return (
           <View style={{flex:1}}>
            <Header navigation={this.props.navigation}  title={'Jobs'}/>
            <View style={styles.container}>
               <Map/>
            </View>
           </View>
       )
    }
}

const styles = StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    }
})

export default JobScreen;