import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import MealItem from './MealItem';
import {useSelector} from 'react-redux';

const MealList = props => {
  const favMeals = useSelector(state => state.meals.favoriteMEALS);
  const renderMealItem = itemData => {
    const isFavorite = favMeals.some(meal => meal.id === itemData.item.id);
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate('Details', {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFav: isFavorite,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      {/* <Text>Your MealList Screen</Text> */}
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealList;
