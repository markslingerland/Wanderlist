import React from 'react';
import { Image } from 'react-native';

export default class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../../assets/images/logoTitle.png')}
          style={{ width: 152, height: 64 }}
          resizeMode={'contain'}
        />
      );
    }
  }