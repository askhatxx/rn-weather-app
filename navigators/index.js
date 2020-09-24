import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import City from '../screens/City';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{ headerStyle: { backgroundColor: 'blue' }, headerTintColor: '#ffffff' }}/>
      <Stack.Screen name='City' component={City} options={{ headerStyle: { backgroundColor: 'blue' }, headerTintColor: '#ffffff' }}/>
    </Stack.Navigator>
  );
}

export default Navigators;