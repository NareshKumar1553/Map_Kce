import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../Pages/MapPage';
import { NavigationContainer } from '@react-navigation/native';
import ListShow from '../Blocks/BlockList';
import AddData from '../Pages/AddData';
import TestPage from '../TestPage';
import FacultyDetail from '../Faculty/FacultyDetail';
import BlockDetails from '../Blocks/BlockDetails';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AddStaffData from '../Pages/AddStaffData';
import Success from '../AnimationLib/Success';
import AdminPage from '../Pages/AdminPage';
import BlockLabList from '../Blocks/BlockLabList';

import DepartmentWiseFaculty from '../Faculty/FacultPage';
import FacultyList from '../Faculty/FacultyLis';
import TestPage2 from '../TestPage2';
import MainTest from '../Testing/MainTesting';
import SearchPage from '../Testing/SearchPage';

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
        <Stack.Screen name="Admin" component={AdminPage} />
        <Stack.Screen name="FacultyList" component={FacultyList} />
        <Stack.Screen name="FDetails" component={FacultyDetail} />
        <Stack.Screen name="BDetails" component={BlockDetails} />
        <Stack.Screen name="StaffAdd" component={AddStaffData} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="DepFac" component={DepartmentWiseFaculty} />
        <Stack.Screen name="BlockLab" component={BlockLabList} />
        <Stack.Screen name="TestPage" component={TestPage} />
        <Stack.Screen name="TestPage2" component={TestPage2} />
        <Stack.Screen name="MainTest" component={MainTest} />
        <Stack.Screen name="Search" component={SearchPage} />
      </Stack.Navigator>
      </NavigationContainer>
      );
    }

export default AppStack;