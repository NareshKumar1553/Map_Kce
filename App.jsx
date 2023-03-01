import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainPage from './lib/MapPage';
import AppStack from './lib/Navigation/StackNavigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppStack/>
    );
  }
}
