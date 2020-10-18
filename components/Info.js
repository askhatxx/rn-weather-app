import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Info = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ text }</Text>
    </View>
  );
}

export default Info;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1D8AA',
    marginBottom: 20,
    paddingVertical: 8,
    borderRadius: 2
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#C83D00'
  }
});