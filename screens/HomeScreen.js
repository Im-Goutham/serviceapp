
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView,Image } from 'react-native';
import { Text, Icon } from 'native-base';
import Header from '../components/Header';
import Advertisement from '../components/Advertisement';


class HomeScreen extends Component {

     
    render() {
       return (
           <View style={{flex:1}}>
               <Header navigation={this.props.navigation} title={'Home'}/>
               <ScrollView>
               <Advertisement/>
               <View style={styles.container}>
             {/* Categories start here */}
               <View style={styles.categoryContainer}>
                    <View style={styles.categoryBox}></View>  
                    <View style={styles.categoryBox}></View>  
                    <View style={styles.categoryBox}></View>  
                    <View style={styles.categoryBox}></View>  
                    <View style={styles.categoryBox}></View>  
                    <View style={styles.categoryBox}></View>  
                    <View style={styles.categoryBox}></View>  
                    <View style={styles.categoryBox}></View> 
                    <View style={styles.categoryBox}></View>  
                    <View style={styles.categoryBox}></View>  
                    <View style={styles.categoryBox}></View>  
                    <View style={styles.categoryBox}></View>  
                </View>  
           {/* Categories end here */}
            <View style={{marginTop:10,marginBottom:10,padding:5}}>
            <View style={styles.categoryHeading}>
                <View><Text style={{fontWeight:'bold',fontSize:18}}>Home Interior</Text></View>
                <View><Text style={{textAlign:'right'}}>VIEW ALL</Text></View>
            </View>  
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                        <Icon style={styles.heart_icon} active name="md-heart-outline" />
                        <Icon style={styles.share_icon} active name="md-share" />
                        <Text style={{paddingTop:5,paddingBottom:5}}>Repair</Text>
                        </View> 
                    </View>   
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                        <Icon style={styles.heart_icon} active name="md-heart-outline" />
                        <Icon style={styles.share_icon} active name="md-share" />
                        <Text style={{paddingTop:5,paddingBottom:5}}>Wallpaper</Text>
                        </View> 
                    </View> 
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                        <Icon style={styles.heart_icon} active name="md-heart-outline" />
                        <Icon style={styles.share_icon} active name="md-share" />
                        <Text style={{paddingTop:5,paddingBottom:5}}>Flooring</Text>
                        </View> 
                    </View> 
                    <View style={{flexDirection:'column',width:100}}>
                        <View style={styles.imgsView}>
                        <Image source={require('../images/img_placeholder.png')} style={styles.img_placeholder}/>
                        <Icon style={styles.heart_icon} active name="md-heart-outline" />
                        <Icon style={styles.share_icon} active name="md-share" />
                        <Text style={{paddingTop:5,paddingBottom:5}}>Wall Ceiling</Text>
                        </View> 
                    </View> 
                </ScrollView>   
                </View> 
             </View>  
               </View>
               </ScrollView>
           </View>
       )
    }
}

const styles = StyleSheet.create({
      container: {
          padding:5,
          paddingBottom:40
    },
    categoryBox: {
        minWidth: 100,
        height: 100,
        borderColor: 'grey',
        borderWidth:0.5,
        margin:10
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        marginTop:20,
        marginBottom:20
    },
    imgsView: {
        flex: 1,
        padding:10,
        position: 'relative',
        top: 0,
        left: 0
    },
    img_placeholder: {
        width: 90,
        height: 90,
        position: 'relative',
		top: 0,
		left: 0
      },
      heart_icon: {
        color:'white',
        fontSize:14,
        fontWeight:'bold',
        position: 'absolute',
		top: 14,
		right: 4
      },
      share_icon: {
        color:'white',
        fontSize:14,
        position: 'absolute',
		top: 80,
		right: 4
      },
      categoryHeading: {
          flexDirection: 'row',
          justifyContent:'space-between',
          marginTop:10,
          marginBottom:10
    }
})

export default HomeScreen;