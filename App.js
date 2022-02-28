/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {enableScreens} from 'react-native-screens';
import MyMealsFunction from './navigation/MealsNavigator';

import MealsNavigator from './navigation/MealsNavigator';
// import FavoritesScreen from './screen/FavoritesScreen';
// import {Button} from 'react-native-vector-icons/Ionicons';
import FavoritesScreen from './screen/FavoritesScreen';
// import MealDetailScreen from './screen/MealDetailScreen';
import CategoriesScreen from './screen/CategoriesScreen';
import CategoryMealScreen from './screen/CategoryMealScreen';
import MealDetailScreen from './screen/MealDetailScreen';
import Colors from './constants/Colors';
// import MealsFavTabNavigator from './navigation/MealsNavigator';
// import MyMealsFunction from './navigation/MealsNavigator';

enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MyMealsFunction} />
        <Stack.Screen name="MealScreen" component={CategoryMealScreen} />
        <Stack.Screen name="Details" component={MealDetailScreen} />
      </Stack.Navigator>
      {/* <MyMealsFunction /> */}
    </NavigationContainer>
    // <NavigationContainer>
    //   <MealsFavTabNavigator.Navigator>
    //     <MealsFavTabNavigator.Screen name="Favorite" component={Favorites} />
    //   </MealsFavTabNavigator.Navigator>
    // </NavigationContainer>
  );
};

export default App;
