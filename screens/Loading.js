import React, { Component } from 'react';
import { View, Animated, Image } from 'react-native';
export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading_time: 0,
            loadingtime: new Animated.Value(20)
        }
    }
    componentDidMount() {
        // setInterval(() => {
        //     if (this.state.loadingtime < 200) {
        //         this.setState({ loadingtime: this.state.loadingtime + 10 })
        //     }
        // }, 1000)

        Animated.timing(                  // Animate over time
            this.state.loadingtime,            // The animated value to drive
            {
              toValue: 200,                   // Animate to opacity: 1 (opaque)
              duration: 4000,              // Make it take a while
            }
          ).start();   

        // setInterval(() {
        //     if(my_stack.size() > 0) {
        //       view_stack();
        //     }
        //   }, 1000/60);
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={require('../images/splash.png')}
                    onLoad={this.props.imageLoaded()}
                    style={{
                        flex: 1,
                        width: null,
                        height: null,
                        resizeMode: 'cover'
                    }} />
                <View style={{
                    borderRadius: 2,
                    position: 'absolute',
                    bottom: 75,
                    width: 200,
                    backgroundColor: "rgb(100, 185, 242)",
                    height: 4,
                    alignSelf: "center",
                }}>
                 <Animated.View style={{
                        width: this.state.loadingtime,
                        backgroundColor: "#fff",
                        height: 4,
                        borderRadius: 2,
                    }} />
                </View>
            </View>
        )
    }
}