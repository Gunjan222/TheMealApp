import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {CustomHeaderButton as HeaderButton} from '../components/HeaderButton';
import Icon from 'react-native-vector-icons/Ionicons';

import {MEALS} from '../data/dummy-data';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MealDetailScreen = ({route, navigation}) => {
  const renderDetailItem = itemData => {
    console.log('itemData', itemData);
    return (
      <View>
        <Text>This is MealDetails Item</Text>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  const {mealId} = route.params;
  //  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text> {selectedMeal.title} </Text>
      <Button
        title="Go Back To Categories"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const {mealId} = route.params;
  // const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: 20,
          backgroundColor: 'White',
        }}>
        <TouchableOpacity
          onPress={() => {
            console.log('Mark as Favorite!');
          }}>
          <Image
            style={{height: 25, width: 25}}
            source={{
              uri: '/Users/apple/dev/learning/TheMealApp/images/star.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height: 25, width: 25}}
            source={{
              uri: '/Users/apple/dev/learning/TheMealApp/images/star-outline.png',
            }}
          />
        </TouchableOpacity>
      </View>
      // <HeaderButtons HeaderButtonComponent={HeaderButton}>
      //   {/* <Icon name="rocket" size={30} color="#900" /> */}
      //   {/* <Icon.Button
      //     name="star"
      //     backgroundColor="#3b5998"
      //     onPress={() => alert('Login with Facebook')}>
      //     Facebook
      //   </Icon.Button> */}

      //   <Item
      //     title="Favorite"
      //     iconName="star"
      //     onPress={() => {
      //       console.log('Mark as Favorite!');
      //     }}
      //   />
      // </HeaderButtons>
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

export default MealDetailScreen;
