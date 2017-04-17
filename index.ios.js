/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { GreetingView } from './Components/Views/Greeting';
import { BlinkView } from './Components/Views/Blink';

export default class AwesomeProject extends Component {
  render() {
    return (
      <BlinkView />
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
