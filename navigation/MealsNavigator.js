import 'react-native-gesture-handler';
import React from 'react';
import {Platform, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

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

const FavNavigator = createNativeStackNavigator();

function MyFavNavigator() {
  return (
    <FavNavigator.Navigator initialRouteName="Favorites">
      <FavNavigator.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={({route}) => ({title: route.name})}
      />
      <FavNavigator.Screen name="MealDetail" component={MealDetailScreen} />
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
          <Button
            onPress={() => {
              navigation.toggleDrawer();
            }}
            title="Menu"
          />
        ),
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Meals') {
            iconName = Platform.OS === 'android' ? 'restaurant' : 'ios-add';
          } else if (route.name === 'Favorites') {
            iconName =
              Platform.OS === 'android' ? 'star' : 'ios-chevron-forward';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: Colors.accentColor,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Meals" component={CategoriesScreen} />
      <Tab.Screen
        name="Favorites"
        component={MyFavNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function StackNavigationFunction() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MyMealsFunction}
        options={{headerShown: false}}
      />
      <Stack.Screen name="MealScreen" component={CategoryMealScreen} />
      <Stack.Screen name="Details" component={MealDetailScreen} />
    </Stack.Navigator>
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
      <MainNavigator.Screen name="Filters" component={FiltersScreen} />
    </MainNavigator.Navigator>
  );
}

export default NavigatorFunction;
