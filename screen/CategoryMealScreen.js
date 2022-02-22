import React from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
// import {isSearchBarAvailableForCurrentPlatform} from 'react-native-screens';

import CATEGORIES, {MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';
// import Colors from '../constants/Colors';
// import {MEALS} from '../data/dummy-data';
// import { FlatList } from 'react-navigation';
// import MEALS from '../data/dummy-data';

const CategoryMealScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam('categoryId');
  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
        style={{width: '100%'}}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  // console.log('catId ', cat.id);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
