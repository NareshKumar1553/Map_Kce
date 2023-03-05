import React from 'react';
import { Text, View } from 'react-native';

const TestPage = ({navigation,route}) => {
  const { location } = route.params.user;
  //const { loc } = route.params.Longitude;
  const lon = toArray(location);
  const Langi ={lon}.lon[1];
  console.log("Location "+Langi);
  return (
    <View style={{backgroundColor:'black'}}>
        <Text>componentName</Text>
    </View>
);
}

export default TestPage;
function toArray(obj) {
  const result = [];
  for (const prop in obj) {
      const value = obj[prop];
      if (typeof value === 'object') {
          result.push(toArray(value)); // <- recursive call
      }
      else {
          result.push(value);
      }
  }
  return result;
}