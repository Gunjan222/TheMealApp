import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
// import {isSearchBarAvailableForCurrentPlatform} from 'react-native-screens';

import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  // console.log('catId: ', catId);
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text> The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go To Details"
        onPress={() => {
          props.navigation.navigate({routeName: 'MealDetail'});
        }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  // console.log('navigatio Data: ', navigationData);
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

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
