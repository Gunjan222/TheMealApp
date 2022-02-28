import React from 'react';
import {Platform} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealScreen from '../screen/CategoryMealScreen';
import MealDetailScreen from '../screen/MealDetailScreen';
import FavoritesScreen from '../screen/FavoritesScreen';
import Colors from '../constants/Colors';

// const MealsNavigator = createStackNavigator(
//   {
//     Categories: {
//       screen: CategoriesScreen,
//     },
//     CategoryMeals: {
//       screen: CategoryMealScreen,
//     },
//     MealDetail: MealDetailScreen,
//   },
//   {
//     // mode: 'modal',
//     // initialRouteName: 'MealDetail',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
//       },
//       headerTintColor:
//         Platform.OS === 'android' ? 'white' : Colors.primaryColor,
//       headerTitle: 'A Screen',
//     },
//   },
// );

const FavNavigator = createStackNavigator();

function MyFavNavigator() {
  return (
    <FavNavigator.Navigator>
      <FavNavigator.Screen name="MealDetail" component={MealDetailScreen} />
      <FavNavigator.Screen name="Favorites" component={FavoritesScreen} />
    </FavNavigator.Navigator>
  );
}

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

function MyMealsFunction() {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Meals') {
            iconName = 'restaurant';
          } else if (route.name === 'Favorites') {
            iconName = 'star';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: Colors.accentColor,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Meals" component={CategoriesScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

// const MyMealsFunction = () => {
//   return (
//     <NavigationContainer>
//       <MealsFavTabNavigator.Navigator>
//         <MealsFavTabNavigator.Screen name="Meals" component={MealsNavigator} />
//         <MealsFavTabNavigator.Screen
//           name="Favorites"
//           component={FavoritesScreen}
//         />
//       </MealsFavTabNavigator.Navigator>
//     </NavigationContainer>
//   );
// };

// const MealsFavTabNavigator = createBottomTabNavigator(
//   {
//     Meals: {
//       screen: MealsNavigator,
//       navigationOptions: {
//         tabBarIcon: tabInfo => {
//           return (
//             <Ionicons
//               name="ios-restaurant"
//               size={25}
//               color={tabInfo.tintColor}
//             />
//           );
//         },
//       },
//     },
//     Favorites: {
//       screen: FavoritesScreen,
//       navigationOptions: {
//         tabBarLabel: 'Favorites!',
//         tabBarIcon: tabInfo => {
//           return (
//             <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
//           );
//         },
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: Colors.accentColor,
//     },
//   },
// );

// export default createAppContainer(MealsFavTabNavigator);

export default MyMealsFunction;
