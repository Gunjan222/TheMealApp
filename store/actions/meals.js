export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = id => {
  console.log('inside action');
  return {type: TOGGLE_FAVORITE, mealId: id};
};
