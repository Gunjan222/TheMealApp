import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import NavigatorFunction from './navigation/MealsNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// import MyFavNavigator from './navigation/MyFavNavigator';
import FavoritesScreen from './screen/FavoritesScreen';
import MealDetailScreen from './screen/CategoryMealScreen';
import FiltersScreen from './screen/FiltersScreen';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

enableScreens();

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
    <NavigationContainer>
      <NavigatorFunction />
    </NavigationContainer>
  );

  // return <StackNavigationFunction />;
};

const styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'center', alignItem: 'center'},
});

export default App;
