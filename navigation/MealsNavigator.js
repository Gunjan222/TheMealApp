import React from 'react';
import {Platform} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from 'react-navigation-stack';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealScreen from '../screen/CategoryMealScreen';
import MealDetailScreen from '../screen/MealDetailScreen';
import FavoritesScreen from '../screen/FavoritesScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    // mode: 'modal',
    // initialRouteName: 'MealDetail',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitle: 'A Screen',
    },
  },
);

// const MealsFavTabNavigator = createBottomTabNavigator({
//   Meals: MealsNavigator,
//   Favorites: FavoritesScreen,
// });

export default createAppContainer(MealsNavigator);
