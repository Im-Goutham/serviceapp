import React, {Component} from 'react';
import { View, StyleSheet,Image, ScrollView,Text,TouchableOpacity} from 'react-native';
import {scale} from '../global';


export default class Documents extends Component {

  render() {
    let {documents,placeholder} = this.props;  
    return (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
          {
              placeholder == true ? (
                <TouchableOpacity
                 style={{flexDirection:'column',width:scale(100)}}
                 onPress={()=> {this.props.addDocument()}}
                 >
                    <View>
                    <Image source={require('../images/documents/doc_placeholder.png')} style={styles.img_placeholder}/>
                    </View> 
               </TouchableOpacity> 
              ):(null)
          }
             
            {
                 documents ? (
                    documents.map((document,key)=>{
                          return  <View style={styles.documentBox} key={key}>
                                        <View style={styles.imageShadow}>
                                        <Image source={document.image} style={styles.img_placeholder}/>
                                        {
                                            placeholder == true ? ( 
                                              <Image source={require('../images/close_img.png')} style={styles.close_img}/>
                                             ): (null)
                                        }
                                      </View>
                                        <Text style={styles.textStyle}>{document.name}</Text>

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
        paddingLeft:scale(10),
        fontSize:scale(20),
        fontFamily: 'Montserrat-Bold',
    },
    img_placeholder: {
        width: scale(90),
        height: scale(90),
        borderRadius:scale(5),
        position: 'relative',
		top: 0,
		left: 0,

      },
      imageShadow: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
      },
      close_img: {
        width: scale(18),
        height: scale(18),
        borderRadius:scale(9),
        position: 'absolute',
		top: scale(10),
		right: scale(15)
      },
      documentBox: {
        flexDirection:'column',
        width:scale(100),
      },
      textStyle: {
        paddingTop:scale(5),
        paddingBottom:scale(5),
        fontFamily: 'Montserrat-Regular',
        fontSize:scale(14),
        color:'#4A4A4A'
      }
})

