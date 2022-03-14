import 'react-native-gesture-handler';
import React from 'react';
import {Platform, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

// import {NavigationContainer} from '@react-navigation/native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealScreen from '../screen/CategoryMealScreen';
import MealDetailScreen from '../screen/MealDetailScreen';
import FavoritesScreen from '../screen/FavoritesScreen';
import FiltersScreen from '../screen/FiltersScreen';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

function StackNavigationFunction() {
  // const mealId = route.params.mealId;
  // console.log('props inside stackNav ', route);
  // const toggleFavorite = props

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MyMealsFunction}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MealScreen"
        component={CategoryMealScreen}
        options={({route}) => ({
          title: route.params.categoryTitle,
        })}
      />
      <Stack.Screen
        name="Details"
        component={MealDetailScreen}
        options={({route, navigation}) => ({
          title: route.params.mealTitle,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Favorite"
                iconName={route.params.isFav ? 'ios-star' : 'ios-star-outline'}
                onPress={mealId => route.params.toggleFav(mealId)}

                // {isFavorite ? 'ios-star' : 'ios-star-outline'}
                // onPress={() =>
                //   console.log(
                //     'route',
                //     route.params,
                //     'navigation',
                //     navigation.dispatch(toggleFavorite(mealId)),
                //   )
                // }
                // getId={({route}) => route.toggleFavorite}
                // onPress={toggleFavorite(route.params.mealId)}
              />
            </HeaderButtons>
          ),
        })}
      />
      {/* {props => <MealDetailScreen {...props} />} */}
      {/* </Stack.Screen> */}
    </Stack.Navigator>
  );
}

const FavNavigator = createNativeStackNavigator();

function MyFavNavigator() {
  return (
    <FavNavigator.Navigator
      initialRouteName=" Your Favorites"
      screenOptions={({route, navigation}) => ({
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="menu"
              iconName="ios-menu"
              onPress={() => navigation.toggleDrawer()}
            />
          </HeaderButtons>
        ),
      })}>
      <FavNavigator.Screen
        name="Your Favorites"
        component={FavoritesScreen}
        // options={({route}) => ({title: route.name})}
      />
      <FavNavigator.Screen
        name="Meal Detail"
        component={MealDetailScreen}
        // options={({route}) => ({mealTitle: route.params.title}, {toggleFavorite: route.params.toggleFav})}
      />
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
      screenOptions={({route, navigation}) => ({
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="menu"
              iconName="ios-menu"
              onPress={() => navigation.toggleDrawer()}
            />
          </HeaderButtons>
        ),
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Meals') {
            iconName =
              Platform.OS === 'android' ? 'restaurant' : 'md-restaurant';
          } else if (route.name === 'Favorites') {
            iconName = Platform.OS === 'android' ? 'star' : 'ios-star';
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: Colors.accentColor,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Meals"
        component={CategoriesScreen}
        options={{headerShown: true}}
      />
      <Tab.Screen
        name="Favorites"
        component={MyFavNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const MainNavigator = createDrawerNavigator();
function NavigatorFunction() {
  return (
    <MainNavigator.Navigator
      screenOptions={{drawerActiveTintColor: Colors.accentColor}}>
      <MainNavigator.Screen
        name="MealsFav"
        component={StackNavigationFunction}
        options={{headerShown: false, drawerLabel: 'Meals'}}
      />
      <MainNavigator.Screen
        name="Filters"
        component={FiltersScreen}
        options={({route, navigation}) => ({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="save"
                iconName="ios-save"
                onPress={() => console.log('saved filters', route)}
                // onPress={navigation.getParam('save')}
              />
            </HeaderButtons>
          ),
        })}
      />
    </MainNavigator.Navigator>
  );
}

export default NavigatorFunction;
