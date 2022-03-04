import React from 'react';
import {ScrollView, View, Text, Button, Image, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {CustomHeaderButton as HeaderButton} from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
// import Icon from 'react-native-vector-icons/Ionicons';

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
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.detail}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredients => {
        <Text key={ingredients}>{ingredients}</Text>;
      })}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => {
        <Text key={step}>{step}</Text>;
      })}
      {/* <View style={styles.screen}>
        <Text> {selectedMeal.title} </Text>
        <Button
          title="Back to Top"
          onPress={() => {
            navigation.popToTop();
          }}
        />
      </View> */}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  console.log('navigationData', navigationData);
  const {mealId} = navigationData.params.mealId;
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
        {/* <TouchableOpacity>
          <Image
            style={{height: 25, width: 25}}
            source={{
              uri: '/Users/apple/dev/learning/TheMealApp/images/star-outline.png',
            }}
          />
        </TouchableOpacity> */}
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
  image: {width: '100%', height: 100},
  detail: {flexDirection: 'row', justifyContent: 'space-around'},
  title: {
    fontWeight: 'bold',
  },
});

export default MealDetailScreen;
