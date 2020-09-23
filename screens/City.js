import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const City = ({ navigation }) => {
  const [count, setCount] = useState(0);
  console.log('City render', count);
  useEffect(() => {
    console.log('City useEffect');
  }, []);
  return (
    <View>
      <Text>City count {count}</Text>
      <Button onPress={() => setCount(count + 1)} title='Count++'/>
      <Button onPress={() => navigation.navigate('Home')} title='Go to Home'/>
    </View>
  );
}

export default City;