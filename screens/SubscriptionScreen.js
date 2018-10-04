import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
    Text, TouchableHighlight
} from 'react-native';

import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import * as actions from '../actions';

import HeaderScreen from './HeaderScreen';

var {height, width} = Dimensions.get('window');

let logo = require('../images/logo.png');
let back_arrow = require('../assets/icons/arrow_left.png');
let menu = require('../assets/icons/menu.png');
let border_img = require('../images/border_img.png');

let maplocations = {
    data : [
         {
      jobtitle: 'Need Cook',
      icon: require('../assets/icons/crown.png'),
      image: require('../images/cook.png'),
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
    }
        ]
}



class SubscriptionScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        tabindex : 0
      }
  }

  contentrender(){

      return (
         <View >
            <View style={styles.servicesBox}>
                <View style={{marginHorizontal:20}}><Text style={{color:'rgb(62,136,235)',fontFamily:'Montserrat-Bold',fontSize:13}}>Most Popular</Text></View>
                <View style={[styles.mainBox,{borderBottomWidth:1,borderBottomColor:'rgb(237,237,237)',paddingVertical:10}]}>
                        <View style={{flex:1,alignItems:'flex-start'}}>
                            <Text style={styles.textStyle}>Yearly</Text>
                            <Text style={styles.subTextStyle}>Subscription</Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text style={styles.textStyle}>80 pts.</Text>
                            <Text style={styles.subTextStyle}>/year</Text>
                    </View>
                  </View>
                  <View style={{padding:10}}>
                       <View style={{flexDirection:'row',justifyContent:'center'}}><Image source={require('../assets/icons/tick_green.png')} style={[styles.tick]}/><Text style={[styles.subTextStyle,{textAlign:'center'}]} resizeMode="contain" resizeMethod="resize">Ligula pharetra velit</Text></View> 
                       <View style={{flexDirection:'row',justifyContent:'center'}}><Image source={require('../assets/icons/tick_green.png')} style={styles.tick}/><Text style={[styles.subTextStyle,{textAlign:'center'}]} resizeMode="contain" resizeMethod="resize">Pharetra velit at sociosqu</Text></View>
                       <View style={{flexDirection:'row',justifyContent:'center'}}><Image source={require('../assets/icons/tick_green.png')} style={styles.tick}/><Text style={[styles.subTextStyle,{textAlign:'center'}]} resizeMode="contain" resizeMethod="resize"> Velit at sociosqu</Text></View>
                      <View>
                        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                          <TouchableOpacity onPress={() => {this.props.navigation.navigate('home')}}><Text style={styles.btnText}>SELECT</Text></TouchableOpacity>
                        </LinearGradient>
                      </View>
                   
                  </View>
            </View>
            <View style={styles.servicesBox}>
                <View style={styles.mainBox}>
                    <View style={{flex:1,alignItems:'flex-start'}}>
                        <Text style={styles.textStyle}>Monthly</Text>
                        <Text style={styles.subTextStyle}>Subscription</Text>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <Text style={styles.textStyle}>10 pts.</Text>
                        <Text style={styles.subTextStyle}>/month</Text>
                   </View>
                </View>
            </View>
        </View> 
    )

  }


    render() {
        let { backButton } = this.props;
       return (
           <View style={{flex:1}}>
               <LinearGradient
                   colors={['#3E85EF', '#3EBDEF']}
                   start={{x: 0, y: 0}}
                   end={{x: 1, y: 0}}
                   style={{
                       flex: 1
                   }}>
                     <Header
                               navigation={this.props.navigation}
                               left = {
                                <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                {
                                    (backButton)?(
                                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('homePage')}  style={{width: "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                        <Image source={back_arrow} style={{ width: '50%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableOpacity>
                                    ):(null)
                                }
                                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{width: !backButton ? 54 : "50%", height:54, backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                <Image source={menu} style={{ width: !backButton? '100%': '50%', height: 20}} resizeMode="contain" resizeMethod="resize"/>
                                </TouchableOpacity>
                             </View>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:54}}>
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: 20}}>Subscriptions</Text>
                               </View>
                               }

                           />
                  <ScrollView contentContainerStyle={{flexGrow:1}}>
                    <View style={{backgroundColor :"transparent",paddingVertical:30}}>
                             {this.contentrender()}

                      </View>
  <View style={{width:'100%'}}>
                              <Image source={border_img} style={{ width: '100%', height: Platform.OS==='ios'? 31 : 30}}/>
                                 <View style={{height:20, backgroundColor:"#F9FCFF"}}/>
                              </View>
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1,paddingHorizontal:20}}>
                        <View>
                            <Text style={[styles.textStyle,{textAlign:'center'}]}>0</Text>
                            <Text style={[styles.subTextStyle,{color:'rgb(34,38,34)',textAlign:'center',fontSize:15}]}>Points</Text>
                        </View>
                        <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3E85EF', '#3EBDEF']} style={styles.button}>
                          <TouchableOpacity onPress={() => {this.props.navigation.navigate('home')}}><Text style={styles.btnText}>ADD CREDIT</Text></TouchableOpacity>
                        </LinearGradient>
                
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                              <Image source={require('../images/card.png')} resizeMode="contain" resizeMethod="resize" style={{marginHorizontal:5,width:20,height:20,marginTop:15}}/>
                              <Image source={require('../images/paypal.png')} resizeMode="contain" resizeMethod="resize" style={{marginHorizontal:5,width:20,height:20,marginTop:15}}/>
                               <Text style={{textAlign:'center',paddingVertical:15}}>Accept PayPal & All Credit & Debit cards</Text> 
                               </View> 
                           
                        </View>
                </ScrollView>
               </LinearGradient>
              
           </View>
       )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
     modal: {
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },
    button:{
    justifyContent:'center',
    alignItems:'center',
    width: 100,
    height: 40,
    borderRadius:20,
    // borderWidth: 1,
    // borderColor: '#008000',
    paddingTop:5,
    paddingBottom:5,
},
servicesBox: {
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 15,
    borderRadius:10,
    backgroundColor:'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  mainBox: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20,
},
textStyle:{
    fontSize:22,
    color:'rgb(34,38,44)',
    fontFamily:'Montserrat-Bold'
},
subTextStyle: {
    fontSize:13,
    marginVertical:5,
    fontFamily:'Montserrat-Medium',
    color:'rgb(186,187,189)'
},
button:{
    backgroundColor:'#4A4A4A',
    width: '100%',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop:10,
    paddingTop:16,
    paddingBottom:16,
},
btnText: { 
    textAlign:'center',
    color:'white',
    fontSize: 16,
    fontWeight:'bold'
},
tick:{
     height:15,
     width: 15,
     marginHorizontal:10,
     marginTop:5
}
})



const mapStateToProps = state=> ({ 
    backButton:state.user.backButton,
  })
  
 export default connect(mapStateToProps, actions)(SubscriptionScreen);

