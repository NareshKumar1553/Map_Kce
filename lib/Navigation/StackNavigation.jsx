import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../MapPage';
import { NavigationContainer } from '@react-navigation/native';
import ListShow from '../ListShow';
import APage from '../Blocks/BlockA';
import AddData from '../Pages/AddData';
import BPage from '../Blocks/BlockB';
import CPage from '../Blocks/BlockC';
import DPage from '../Blocks/BlockD';
import EPage from '../Blocks/BlockE';
const Stack = createNativeStackNavigator();
const AppStack = () => {
    // useEffect(() => {
    //   SplashScreen.hide();
    // }, []);
      return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
      headerShown: false,
      animation:'slide_from_bottom',
      animationDuration: 4000,
    }}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="List" component={ListShow} />
        <Stack.Screen name="APage" component={APage} />
        <Stack.Screen name="BPage" component={BPage} />
        <Stack.Screen name="CPage" component={CPage} />
        <Stack.Screen name="DPage" component={DPage} />
        <Stack.Screen name="EPage" component={EPage} />
        <Stack.Screen name="Add" component={AddData} />
      </Stack.Navigator>
      </NavigationContainer>
      );
    }


export default AppStack;