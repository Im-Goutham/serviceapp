
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, Button } from 'react-native';
import Header from '../components/Header';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [{
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    // You can pass props to <Image />.
    props: {
        // headers: ...
    }
}, {
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    // You can pass props to <Image />.
    props: {
        // headers: ...
    }
}]

class AccountScreen extends Component {
    state = {
         showModal : false
    };
    render() {
        let {showModal} = this.state;
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Account'}/>
               <View style={styles.container}>
               <Button
                title={'Show Images'}
                onPress={() =>this.setState({showModal: !showModal})}/>
               <Modal visible={showModal} transparent={true}>
                <ImageViewer imageUrls={images} enableSwipeDown={true} onSwipeDown={()=>this.setState({showModal: !showModal})}/>
               </Modal>
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

export default AccountScreen;