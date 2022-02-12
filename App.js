/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MealsNavigator from './navigation/MealsNavigator';

const App = () => {
  return (
    <MealsNavigator />
    // <View>
    //   <Text>The Meal App</Text>
    // </View>
  );
};

export default App;
