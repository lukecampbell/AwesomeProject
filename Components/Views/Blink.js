import React, { Component } from 'react';
import { Text, View } from 'react-native';

/* global setInterval */

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    setInterval(() => {
      this.setState({showText: !this.state.showText});
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class BlinkView extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='more blink text' />
        <Blink text='harkness' />
        <Blink text='Captain Boomerang' />
      </View>
    );
  }
}

export { Blink, BlinkView };
