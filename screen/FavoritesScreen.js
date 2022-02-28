import React from 'react';
import MealList from '../components/MealList';

const FavoritesScreen = props => {
  return <MealList />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites',
};

export default FavoritesScreen;
