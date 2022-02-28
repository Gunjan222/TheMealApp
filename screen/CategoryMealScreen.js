import React from 'react';
// import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
// import {isSearchBarAvailableForCurrentPlatform} from 'react-native-screens';

import CATEGORIES, {MEALS} from '../data/dummy-data';
// import MealItem from '../components/MealItem';
import MealList from '../components/MealList';
// import Colors from '../constants/Colors';
// import {MEALS} from '../data/dummy-data';
// import { FlatList } from 'react-navigation';

const CategoryMealScreen = ({route, navigation}) => {
  console.log('route', route, 'navigation', navigation);

  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  // console.log('catId ', cat.id);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;
