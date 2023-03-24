import React, { Component } from 'react';
import { View, Text } from 'react-native';
const dataList = [];
export default class TestPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    dataList.push({
        name:'name',
        age:'18'
    })
    dataList.push({
        name:'naresh',
        age:'20'
    })
    console.log(dataList);
    return (
      <View>
        <Text>TestPage 2</Text>
      </View>
    );
  }
}
