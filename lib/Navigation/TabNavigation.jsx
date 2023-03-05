import React, { Component } from 'react';
import { View, Text,StyleSheet,ImageBackground,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from '../Pages/MapPage';
import TestPage from '../TestPage';
import ListShow from '../Pages/ListShow';
import Faculty from '../Pages/FacultyLis';
import APage from '../Blocks/BlockA';
import AddData from '../Pages/AddData';
import BPage from '../Blocks/BlockB';
import CPage from '../Blocks/BlockC';
import DPage from '../Blocks/BlockD';
import EPage from '../Blocks/BlockE';
import AppStack from './StackNavigation';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        
        <NavigationContainer independent={true}>
            <Tab.Navigator
             screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: '#ff00b3',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    elevation: 5,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: 15,
                    height: 85,
                    ...styles.shadow
                }
            }}
            >
                <Tab.Screen name="MainPage" component={MainPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                            <ImageBackground source={{uri:'https://static.vecteezy.com/system/resources/previews/010/157/862/original/house-and-home-icon-symbol-sign-free-png.png'}} style={{ width: 30, height: 30 }} imageStyle={{ tintColor: focused ? '#e32f45' : '#748c94' }} />
                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Home</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="List" component={ListShow}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <ImageBackground source={{uri:'https://static.vecteezy.com/system/resources/previews/010/157/862/original/house-and-home-icon-symbol-sign-free-png.png'}} style={{ width: 30, height: 30 }} imageStyle={{ tintColor: focused ? '#e32f45' : '#748c94' }} />
                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Places List</Text>
                        </View>
                    )
                }} />
           
            <Tab.Screen name="Faculty" component={Faculty}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <ImageBackground source={{uri:'https://static.vecteezy.com/system/resources/previews/010/157/862/original/house-and-home-icon-symbol-sign-free-png.png'}} style={{ width: 30, height: 30 }} imageStyle={{ tintColor: focused ? '#e32f45' : '#748c94' }}/>
                            <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Faculties</Text>
                        </View>
                    )
                }} />
                 <Tab.Screen name="AppStack" component={AppStack} />
        </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7f5df0',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:2,
        shadowRadius:3.5,
        elevation:5,
    }
});

export default TabNavigation;