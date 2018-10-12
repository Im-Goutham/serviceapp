import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
export default class Loading extends Component{
    constructor(props){
        super(props);
        this.state={
            loading_time: 0,
            loadingtime : 20
        }
    }
    componentDidMount(){
        setInterval(() => { 
            if(this.state.loadingtime < 200){
                this.setState({ loadingtime: this.state.loadingtime + 10 })
            } 
        }, 1000)

        // setInterval(() {
        //     if(my_stack.size() > 0) {
        //       view_stack();
        //     }
        //   }, 1000/60);
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Image source={require('../images/splash.png')} style={{ 
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: 'cover'
                    }}/>
                <View style={{
                    borderRadius: 2, 
                    position: 'absolute', 
                    bottom:75, 
                    width:200, 
                    backgroundColor: "rgb(100, 185, 242)", 
                    height:4,
                    alignSelf:"center",
                    }}>
                    <View style={{
                    width: this.state.loadingtime, 
                    backgroundColor: "#fff", 
                    height:4,
                    borderRadius: 2, 
                    }}/>
                    </View>
            </View>
        )
    }
}