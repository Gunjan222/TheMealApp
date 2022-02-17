import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
// import { FlatList } from 'react-navigation';
import CATEGORIES from '../data/dummy-data';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    console.log(itemData);
    console.log('here', props);
    return (
      // <Text>okk</Text>
      // <ToucableOpacity
      //   onPress={() => {
      //     props.navigation.push('CategoryMeals');
      //   }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            param: {
              categoryId: itemData.item.id,
            },
          });
        }}>
        <View style={styles.gridItem}>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      {/* {console.log('cat', CATEGORIES)} */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColums={2}
      />
    </>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
