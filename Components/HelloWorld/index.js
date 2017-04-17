/**
 * The basic Hello World component
 * Components/HelloWorld/index.js
 */

import React, { Component } from 'react';

import { Text } from 'react-native';

class HelloWorldComponent extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}
 
export { HelloWorldComponent };

//AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
