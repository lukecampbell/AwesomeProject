import React, { Component } from 'react';
import { Image } from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}

export { Bananas };
