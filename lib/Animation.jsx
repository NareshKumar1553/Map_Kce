import LottieView from "lottie-react-native";
import React from "react";
import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
const ScrWidth = Dimensions.get('window').width;
const SrcHeigth = Dimensions.get('window').height;
export default function Anim() {

    return(
        <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'white'}}>
          <LottieView
              source={require('./Asserts/GlassBall.json')}
              style={sty.animation}
              autoPlay
              />
        </View>
    );
}
const sty = StyleSheet.create({
  animation:{
    width:200,
    height:150
  }
})