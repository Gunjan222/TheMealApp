import React from 'react';
import CATEGORIES from '../data/dummy-data';
import MealList from '../components/MealList';
import MealItem from '../components/MealItem';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

const CategoryMealScreen = ({route, navigation}) => {
  console.log('route', route, 'navigation', navigation);
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const catId = route.params.categoryId;
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );
  // console.log('meal screen', displayedMeals.id);

  if (displayedMeals.length === 0) {
    return (
      <View style={StyleSheet.content}>
        <Text>No meals found, maybe check your filter?</Text>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

// CategoryMealScreen.navigationOptions = navigationData => {
//   const catId = navigationData.navigation.getParam('categoryId');

//   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

//   return {
//     headerTitle: selectedCategory.title,
//   };
// };

const styles = StyleSheet.create({
  content: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default CategoryMealScreen;
