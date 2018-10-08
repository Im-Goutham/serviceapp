import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
 import {  Icon } from 'native-base'
 import { connect } from 'react-redux';
import * as actions from '../actions';
import Advertisement from '../components/Advertisement';
import NotificationsList from '../components/NotificationsList';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import HeaderScreen from './HeaderScreen';

import {scale} from '../global';
let menu = require('../assets/icons/menu.png');
let back_arrow = require('../assets/icons/arrow_left.png');

class NotificationScreen extends Component {
  constructor(props){
      super(props);
      this.state={
        tabindex : 0
      }
  }


    render() {
        const {params} = this.props.navigation.state;
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
                   <HeaderScreen
                       header={
                           <Header
                               navigation={this.props.navigation}
                               left = {
                                <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>
                                {
                                    (backButton)?(
                                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('homePage')}  style={{width: "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                        <Image source={back_arrow} style={{ width: '50%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                        </TouchableOpacity>
                                    ):(null)
                                }
                                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{width: !backButton ? scale(54) : "50%", height:scale(54), backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center'}}>
                                <Image source={menu} style={{ width: !backButton? '100%': '50%', height: scale(20)}} resizeMode="contain" resizeMethod="resize"/>
                                </TouchableOpacity>
                             </View>
                               }
                               title={
                                <View style={{ justifyContent : 'center', alignItems: 'flex-start', height:scale(54)}}>
                                   <Text style={{ fontFamily: 'Montserrat-Bold', color:"#fff", fontSize: scale(20)}}>Notifications</Text>
                               </View>
                               }
                               right={
                                   <View style={{backgroundColor: 'transparent', justifyContent: "center", alignItems: 'center', flexDirection:"row"}}>

                                   </View>
                               }
                           />
                       }
                       content={
                           <View style={{backgroundColor :"transparent",justifyContent: "space-between", paddingVertical: scale(10)}}>
                       
                         </View>
                       }
                   />
                   <View style={{backgroundColor :"rgb(249,252, 255)", flex:1}}>
                        <TouchableOpacity>
                            <Text style={styles.read}>Mark all as read</Text>
                        </TouchableOpacity>
                        
                         <NotificationsList navigation={this.props.navigation}/>
                       </View>
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
    height: scale(230),
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: scale(300),
    width: scale(300)
  },
    button:{
    justifyContent:'center',
    alignItems:'center',
    width: scale(100),
    height: scale(40),
    borderRadius:scale(20),
    // borderWidth: 1,
    // borderColor: '#008000',
    paddingTop:scale(5),
    paddingBottom:scale(5),
},
read: {
    color: '#22262C',
    paddingRight:scale(10),
    paddingVertical:scale(10),
    fontSize:scale(15),
    textAlign: 'right',
    fontFamily:'Montserrat-Medium'
  },
})


const mapStateToProps = state=> ({ 
    backButton:state.user.backButton,
  })
  
export default connect(mapStateToProps, actions)(NotificationScreen);

