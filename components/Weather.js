import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Info from '../components/Info';

const Weather = ({ data }) => {
  if (data.cod !== 200) {
    return (
      <Info text='City not found'/>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapName}>
        <Text style={styles.textName}>{ data.name }</Text>
      </View>
      <Text style={styles.textTemp}>{ data.main.temp }°</Text>
      <Text style={styles.textDesc}>{ data.weather[0].description }</Text>
    </View>
  );
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapName: {
    backgroundColor: '#F1D8AA',
    marginBottom: 10,
    paddingTop: 8,
    paddingBottom: 10,
    borderRadius: 2
  },
  textName: {
    textAlign: 'center',
    fontSize: 28
  },
  textTemp: {
    textAlign: 'center',
    fontSize: 50,
    color: '#C83D00',
    marginVertical: 20
  },
  textDesc: {
    textAlign: 'center',
    fontSize: 20
  }
});