import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import City from '../screens/City';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='City' component={City} />
    </Stack.Navigator>
  );
}

export default Navigators;