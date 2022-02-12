import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> The Category Meal Screen!</Text>
      <Button
        title="Meal Details"
        onPress={() => {
          props.navigation.push('MealDetail');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
