import React, { useEffect } from 'react';
import AppStack from './lib/Navigation/StackNavigation';
import SplashScreen from 'react-native-splash-screen';
const App=()=> {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
    return (
      <AppStack/>
    );
  }
export default App;