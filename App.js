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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {enableScreens} from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';
// import FavoritesScreen from './screen/FavoritesScreen';
// import {Button} from 'react-native-vector-icons/Ionicons';
import FavoritesScreen from './screen/FavoritesScreen';
// import MealDetailScreen from './screen/MealDetailScreen';
// import CategoriesScreen from './screen/CategoriesScreen';
import MealsFavTabNavigator from './navigation/MealsNavigator';

enableScreens();

// const MealsFavTabNavigator = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <NavigationContainer>
//       <MealsFavTabNavigator.Navigator>
//         <MealsFavTabNavigator.Screen
//           name="Favorite"
//           component={FavoritesScreen}
//         />
//         <MealsFavTabNavigator.Screen name="Meal" component={MealsNavigator} />
//       </MealsFavTabNavigator.Navigator>
//     </NavigationContainer>
//   );
// }

const App = () => {
  return (
    <MealsNavigator />
    // <NavigationContainer>
    //   <MealsFavTabNavigator.Navigator>
    //     <MealsFavTabNavigator.Screen name="Favorite" component={Favorites} />
    //   </MealsFavTabNavigator.Navigator>
    // </NavigationContainer>
  );
};

export default App;
