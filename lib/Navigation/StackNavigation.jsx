import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../Pages/MapPage';
import { NavigationContainer } from '@react-navigation/native';
import ListShow from '../Pages/ListShow';
import APage from '../Blocks/BlockA';
import AddData from '../Pages/AddData';
import BPage from '../Blocks/BlockB';
import CPage from '../Blocks/BlockC';
import DPage from '../Blocks/BlockD';
import EPage from '../Blocks/BlockE';
import TestPage from '../TestPage';
import TabNavigation from './TabNavigation';
import Faculty from '../Pages/FacultyLis';
import FacultyDetail from '../Pages/FacultyDetail';
import BlockDetails from '../Pages/BlockDetails';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AddStaffData from '../Pages/AddStaffData';
const Stack = createNativeStackNavigator();
const AppStack = () => {
    useEffect(() => {
      SplashScreen.hide();
    }, []);
      return(
        console.log("Stack Navigation"),
        <NavigationContainer independent={true}>
        <Stack.Navigator 
        initialRouteName='MainPage'
        screenOptions={{
      headerShown: false,
      animation:'slide_from_bottom',
      animationDuration: 4000,
      
    }}
    >
        {/* <Stack.Screen name="Tabs" component={TabNavigation} />   */}
        <Stack.Screen name="MainPage" component={MainPage} /> 
        <Stack.Screen name="Add" component={AddData} />
        <Stack.Screen name="List" component={ListShow} />
        <Stack.Screen name="APage" component={APage} />
        <Stack.Screen name="BPage" component={BPage} />
        <Stack.Screen name="CPage" component={CPage} />
        <Stack.Screen name="DPage" component={DPage} />
        <Stack.Screen name="EPage" component={EPage} />
        <Stack.Screen name="TestPage" component={TestPage} />
        <Stack.Screen name="Faculty" component={Faculty} />
        <Stack.Screen name="FDetails" component={FacultyDetail} />
        <Stack.Screen name="BDetails" component={BlockDetails} />
        <Stack.Screen name="StaffAdd" component={AddStaffData} />
      </Stack.Navigator>
      </NavigationContainer>
      );
    }

export default AppStack;