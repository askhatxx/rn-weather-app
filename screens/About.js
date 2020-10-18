import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather App</Text>
      <Text style={styles.text}>Powered by React Native</Text>
    </View>
  );
}

export default About;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#C83D00',
    paddingTop: 30
  }
});