import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TextInput, Button } from 'react-native';
import { REACT_APP_API_KEY } from '@env';
import Weather from '../components/Weather';
import Info from '../components/Info';

const Home = ({ navigation }) => {
  const [city, setCity] = useState('London');
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    setWeatherLoading(true);
    setWeather(null);
    setFetchError(false);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`)
      .then(response => response.json())
      .then(result => setWeather(result))
      .catch(() => setFetchError(true))
      .finally(() => setWeatherLoading(false));
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder='Enter city'
            placeholderTextColor='#E3BE7C'
            value={city}
            onChangeText={text => setCity(text)}
            onSubmitEditing={() => getWeather()}
          />
          <View style={styles.button}>
            <Button
              color='#C87F00'
              onPress={getWeather}
              title='Search'
            />
          </View>
          <View style={styles.button}>
            <Button
              color='#C87F00'
              onPress={() => navigation.navigate('About')}
              title='About'
            />
          </View>
        </View>
        { fetchError && <Info text='Connection error'/> }
        { weatherLoading && <Info text='Loading...'/> }
        { weather && <Weather data={weather}/> }
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  wrap: {
    padding: 10
  },
  inputArea: {
    flexDirection: 'row',
    marginHorizontal: -5,
    marginBottom: 30
  },
  input: {
    flex: 1,
    backgroundColor: '#C87F00',
    color: '#ffffff',
    borderRadius: 2,
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  button: {
    marginHorizontal: 5
  },
});