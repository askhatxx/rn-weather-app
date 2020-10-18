import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{ headerStyle: { backgroundColor: '#750081' }, headerTintColor: '#ffffff' }}/>
      <Stack.Screen name='About' component={About} options={{ headerStyle: { backgroundColor: '#750081' }, headerTintColor: '#ffffff' }}/>
    </Stack.Navigator>
  );
}

export default Navigators;