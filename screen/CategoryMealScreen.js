import React from 'react';
import CATEGORIES from '../data/dummy-data';
import MealList from '../components/MealList';
import MealItem from '../components/MealItem';
import {useSelector} from 'react-redux';
// import {View, Text, FlatList, StyleSheet} from 'react-native';

const CategoryMealScreen = ({route, navigation}) => {
  console.log('route', route, 'navigation', navigation);

  const catId = route.params.categoryId;

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;
