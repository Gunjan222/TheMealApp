import React from 'react';
import {Text, Button, FlatList, StyleSheet, View} from 'react-native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';

import CATEGORIES from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({navigation}) => {
  const renderGridItem = itemData => {
    console.log('items', itemData);
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate('MealScreen', {categoryId: itemData.item.id});
        }}
      />
    );
  };
  console.log('Categories', CATEGORIES);
  return (
    <>
      <FlatList
        keyExtractor={item => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </>
  );
};

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: () => (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#00cc00"
        />
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
