import React, { Component } from 'react';
import { View, Text,ScrollView,TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
export default class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    let BgColor = '#faeecd'
    return (
      <View style={{backgroundColor:BgColor,flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',width:345,height:65,backgroundColor:'#ffffff',borderRadius:20,marginBottom:10}}
      onPress={()=>{navigation.push('')}}
      >
      <Text style={{marginLeft:30,textAlign:'center',color:'black',fontWeight:'bold',fontSize:20,paddingTop:12}}>Charumathi</Text>
      <Text style={{marginRight:30,textAlign:'center',color:'black',fontWeight:'bold',fontSize:20,paddingTop:12,backgroundColor:'green',borderRadius:50,height:50,width:50}}>ASP</Text>
      </TouchableOpacity>
  </View>
    );
  }
}
