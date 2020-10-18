import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigators from './navigators';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style='light'/>
      <NavigationContainer>
        <Navigators/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D0067',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});