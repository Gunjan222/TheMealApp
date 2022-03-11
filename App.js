import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import NavigatorFunction from './navigation/MealsNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// import MyFavNavigator from './navigation/MyFavNavigator';
import FavoritesScreen from './screen/FavoritesScreen';
import MealDetailScreen from './screen/CategoryMealScreen';
import FiltersScreen from './screen/FiltersScreen';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import mealsReducer from './store/reducers/meals';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const App = () => {
  // const MainNavigator = createDrawerNavigator();
  // function NavigatorFunction() {
  //   return (
  //     <MainNavigator.Navigator>
  //       <MainNavigator.Screen name="MealsFav" component={FavoritesScreen} />
  //       <MainNavigator.Screen name="Filters" component={FiltersScreen} />
  //     </MainNavigator.Navigator>
  //   );
  // }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigatorFunction />
      </NavigationContainer>
    </Provider>
  );

  // return <StackNavigationFunction />;
};

const styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'center', alignItem: 'center'},
});

export default App;
