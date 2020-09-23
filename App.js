import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigators from './navigators';

const App = () => {
  return (
    <NavigationContainer>
      <Navigators/>
    </NavigationContainer>
  );
}

export default App;