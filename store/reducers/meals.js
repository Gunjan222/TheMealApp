import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE} from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMEALS: [],
};

const mealsReducer = (state = initialState, action) => {
  // console.log('state', state, action);
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMEALS.findIndex(
        meal => meal.id === action.mealId,
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = {...state.favoriteMEALS};
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favoriteMEALS: updatedFavMeals};
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return {...state, favoriteMEALS: state.favoriteMEALS.concat(meal)};
      }
    default:
      return state;
  }
};

export default mealsReducer;
