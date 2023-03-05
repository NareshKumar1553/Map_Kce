import React, { Component } from 'react';
import AppStack from './lib/Navigation/StackNavigation';
import TabNavigation from './lib/Navigation/TabNavigation';
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
