import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FacultyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: this.props.route.params.user.name,
        deg : this.props.route.params.user.deg,
        dep : this.props.route.params.user.dep,
        email : this.props.route.params.user.email,
    };
  }
  render() {
    const {name} = this.state;
    const {deg} = this.state;
    const {dep} = this.state;
    const {email} = this.state;
    return (
      <View style={{backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
        <Text>Name : {name} </Text>
        <Text>Designation : {deg} </Text>
        <Text>Department : {dep} </Text>
        <Text>Email : {email} </Text>
      </View>
    );
  }
}
