import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import Header from '../components/Header';

class CreateScreen extends Component {


    render() {
       return (
           <View style={{flex:1}}>
            <Header navigation={this.props.navigation}  title={'Create'}/>
            <View style={styles.container}>
               <Text>CreateScreen</Text>
               <Text>CreateScreen</Text>
               <Text>CreateScreen</Text>
               <Text>CreateScreen</Text>
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

export default CreateScreen;