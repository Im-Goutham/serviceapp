import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Animated,
} from 'react-native';

export default class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(0);
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

  componentWillReceiveProps(props){
    
  }

  render() {
    const { label, ...props } = this.props;
    console.log('props are ',props)
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#000'],
      }),
    };
    return (
      <View style={{ paddingTop: 18 }}>
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={{ height: 45, fontSize: 20, color: '#000', borderBottomWidth: 1, borderBottomColor: 'rgb(217,213,220)' }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}

