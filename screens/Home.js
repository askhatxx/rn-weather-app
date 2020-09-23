import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  const [count, setCount] = useState(0);
  console.log('Home render', count);
  useEffect(() => {
    console.log('Home useEffect');
  }, []);
  return (
    <View>
      <Text>Home count {count}</Text>
      <Button onPress={() => setCount(count + 1)} title='Count++'/>
      <Button onPress={() => navigation.navigate('City')} title='Go to City'/>
    </View>
  );
}

export default Home;