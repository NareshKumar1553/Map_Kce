import React from 'react';
import MainPage from '../Pages/MapPage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListShow from '../Blocks/BlockList';
import { NavigationContainer } from '@react-navigation/native';
import { View,Text } from 'react-native';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    
    <Drawer.Navigator>
      <Drawer.Screen name="Hello" component={Hello} />
      <Drawer.Screen name="List" component={ListShow} />
    </Drawer.Navigator>


  );
}
export default MyDrawer;

const Hello = () =>{
  return(
    <View style={{flex:1,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
      <Text>Hello</Text>
    </View>
  );
}
