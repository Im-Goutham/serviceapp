import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  RefreshControl
} from 'react-native';
import {Icon} from 'native-base';
import SubHeader from '../components/SubHeader';


class ChatScreen extends Component {

  constructor(props) {
     super(props);
     this.state = {
       data: [
         {id:'1', date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
         {id:'2', date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
         {id:'3', date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
         {id:'4', date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
         {id:'1', date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
         {id:'2', date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
         {id:'3', date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
         {id:'4', date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
         {id:'1', date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
         {id:'2', date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
         {id:'3', date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
         {id:'4', date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
       ],
        refreshing: false
     };
   }

  renderDate = (date) => {
      return(
        <Text style={styles.time}>
          {date}
        </Text>
      );
    }


    _onRefresh() {
      console.log('_onRefresh called...')
  //    this.setState({refreshing: true});
      let data = [
        {id:'1', date:"9:50 am", type:'in',  message: "hi 1"},
        {id:'2', date:"9:50 am", type:'out', message: "hi 2"} ,
        {id:'3', date:"9:50 am", type:'in',  message: "hi 3"},
        {id:'4', date:"9:50 am", type:'in',  message: "hi 4"}
      ];
      this.state.data.map((val,key)=>{
          data.push(val);
      })
      this.setState({data:data,refreshing: false})
      // fetchData().then(() => {
      //
      // });
    }

    render() {
      console.log('came here 111')
       return (
         <View style={styles.container}>
         <FlatList style={styles.list}
           onEndReached={() => {
                    console.log('came here -- ');
             }}
           onScrollEndDrag={() => console.log("end")}
           onScrollBeginDrag={() => console.log("start")}
           onEndThreshold={0}
           data={this.state.data}
           keyExtractor= {(item) => {
             return item.id;
           }}
           renderItem={(message) => {
             console.log(item);
             const item = message.item;
             let inMessage = item.type === 'in';
             let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
             return (
               <View style={[styles.item, itemStyle]}>
                 {/*!inMessage && this.renderDate(item.date)*/}
                 <View style={[styles.balloon]}>
                   <Text style={{color:'white'}}>{item.message}</Text>
                 </View>
                 {/*inMessage && this.renderDate(item.date)*/}
               </View>
             )
           }}
           />
         <View style={styles.footer}>
           <View style={styles.inputContainer}>
             <TextInput style={styles.inputs}
                 placeholder="Write a message..."
                 underlineColorAndroid='transparent'
                 onChangeText={(name_address) => this.setState({name_address})}/>
           </View>

             <TouchableOpacity style={styles.btnSend}>
               <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
             </TouchableOpacity>
         </View>
       </View>
       )
    }
}


const styles = StyleSheet.create({
        container:{
          flex:1
        },
        list:{
          paddingHorizontal: 17,
        },
        footer:{
          flexDirection: 'row',
          height:60,
          backgroundColor: '#eeeeee',
          paddingHorizontal:10,
          padding:5,
        },
        btnSend:{
          backgroundColor:"#00BFFF",
          width:40,
          height:40,
          borderRadius:360,
          alignItems:'center',
          justifyContent:'center',
        },
        iconSend:{
          width:30,
          height:30,
          alignSelf:'center',
        },
        inputContainer: {
          borderBottomColor: '#F5FCFF',
          backgroundColor: '#FFFFFF',
          borderRadius:30,
          borderBottomWidth: 1,
          height:40,
          flexDirection: 'row',
          alignItems:'center',
          flex:1,
          marginRight:10,
        },
        inputs:{
          height:40,
          marginLeft:16,
          borderBottomColor: '#FFFFFF',
          flex:1,
        },
        balloon: {
          maxWidth: 250,
          padding: 15,
          borderRadius: 20,
        },
        itemIn: {
          alignSelf: 'flex-start',
          backgroundColor: '#454F62'
        },
        itemOut: {
          alignSelf: 'flex-end',
          backgroundColor: '#333F54'
        },
        time: {
          alignSelf: 'flex-end',
          margin: 15,
          fontSize:12,
          color:"#808080",
        },
        item: {
          marginVertical: 14,
          flex: 1,
          flexDirection: 'row',
          backgroundColor:"#eeeeee",
          borderRadius:10,
          padding:5,
        },
  });

export default ChatScreen;