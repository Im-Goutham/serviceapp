import React, { Component } from 'react';
import {
  View,
  TextInput,
  Animated,
  Image
} from 'react-native';

export default class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(0);
    console.log('value is ',this.props.value);
   
  }

  componentDidMount(){
      if(this.props.value){
        this.setState({isFocused: true},()=>{
            Animated.timing(this._animatedIsFocused, {
              toValue: this.state.isFocused ? 1 : 0,
              duration: 200,
            }).start();
        });
    }
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {

   if(!this.props.value){
    Animated.timing(this._animatedIsFocused, {
        toValue: this.state.isFocused ? 1 : 0,
        duration: 200,
      }).start();
   }

  }

  render() {
    const { label, ...props } = this.props;
    var {isFocused} = this.state;
    const labelStyle = {
      fontFamily:'Montserrat-Medium',
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#aaa'],
      }),
    };
    return (
      <View style={{ paddingTop: 18, flexDirection: 'row', borderBottomWidth: isFocused ? 2 : 1, borderBottomColor: isFocused ? '#3E85EF' :  '#D1D8E0' 
      }}>
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={{ flex:1,fontFamily:'Montserrat-Medium',height: this.props.multiline && this.props.value  ? 180 : 45 , fontSize: 16, color: '#4A4A4A'}}
          onFocus={this.handleFocus}
          autoCorrect={false}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
        {
           (this.props.secureTextEntry)?(
                <Image source={require('../assets/icons/eye.png')} style={{justifyContent:'flex-end', width: 18, height: 18}} resizeMode="contain" resizeMethod="resize"/>   
           ):(
                null
           )
        }
            
      </View>
    );
  }
}

