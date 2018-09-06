import React, {Component} from 'react';
import { View, StyleSheet,Image, ScrollView,Text} from 'react-native';
import { Icon} from 'native-base';


export default class Documents extends Component {

  render() {
    let {documents} = this.props;  
    return (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
            <View style={{flexDirection:'column',width:100}}>
                <View style={styles.imgsView}>
                <Image source={require('../images/documents/doc_placeholder.png')} style={styles.img_placeholder}/>
                <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                </View> 
            </View>   
            {
                 documents ? (
                    documents.map((document,key)=>{
                          return  <View style={styles.documentBox} key={key}>
                                        <View style={styles.imgsView}>
                                        <Image source={document.image} style={styles.img_placeholder}/>
                                        <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                                        <Text style={{paddingTop:5,paddingBottom:5}}>{document.name}</Text>
                                        </View> 
                                </View> 
                    })
                 ) : null
            }
          </ScrollView>   
    );
  }
}



const styles = StyleSheet.create({
    plus: {
        color:'#3399ff',
        paddingLeft:10,
        fontSize:20,
        fontWeight: 'bold'
    },
    img_placeholder: {
        width: 90,
        height: 90,
        borderRadius:5,
        position: 'relative',
		top: 0,
		left: 0
      },
      close_img: {
        width: 18,
        height: 18,
        borderRadius:9,
        position: 'absolute',
		top: 10,
		right: 15
      },
      documentBox: {
        flexDirection:'column',
        width:100,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
      }
})

