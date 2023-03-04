import React, { Component } from 'react';
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
