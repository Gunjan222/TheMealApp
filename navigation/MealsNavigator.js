import {Platform} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../constants/Colors';
import {Ionicons} from 'react-native-vector-icons';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealScreen from '../screen/CategoryMealScreen';
import MealDetailScreen from '../screen/MealDetailScreen';
import FavoriteScreen from '../screen/FavoriteScreen';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      // navigationOptions: {
      //   headerTitle: 'Meal Categories!!',
      // },
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    // mode: 'modal',
    // initialRouteName: 'MealDetail',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitle: 'A Screen',
    },
  },
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarOptions: tabInfo => {
          return (
            <Ionicons
              name="ios - restraunt"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: FavoriteScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  },
);

// const MealsFavTabNavigator = createBottomTabNavigator(
//   {
//     Meals: {
//       screen: MealsNavigator,
//       navigationOptions: {
//         tabBarOptions: tabInfo => {
//           return (
//             <Ionicons
//               name="ios - restraunt"
//               size={25}
//               color={tabInfo.tintColor}
//             />
//           );
//         },
//       },
//     },
//     Favorites: FavoriteScreen,
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: Colors.accentColor,
//     },
//   },
// );

export default createAppContainer(MealsFavTabNavigator);
// export default createAppContainer(MealsNavigator);
