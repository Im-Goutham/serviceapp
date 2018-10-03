import React, {Component} from 'react';
import { View, StyleSheet,Image, ScrollView,Text,TouchableOpacity} from 'react-native';
import { Icon} from 'native-base';


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
                 style={{flexDirection:'column',width:100}}
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
		left: 0,

      },
      imageShadow: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
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

      },
      textStyle: {
        paddingTop:5,
        paddingBottom:5,
        fontFamily: 'Montserrat-Regular',
        fontSize:14,
        color:'#4A4A4A'
      }
})

