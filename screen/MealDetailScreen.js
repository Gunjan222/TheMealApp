import React, {useEffect, useCallback} from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';
// import Icon from 'react-native-vector-icons/Ionicons';
// import {MEALS} from '../data/dummy-data';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../store/actions/meals';

const ListItems = props => {
  return (
    <View style={styles.listitems}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = ({route, navigation}) => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = route.params.mealId;
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMEALS.some(function (meal) {
      return meal.id === mealId;
    }),
  );
  console.log('currentMealIsFavorite');

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    console.log('callback');
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({toggleFav: toggleFavoriteHandler});
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({isFav: currentMealIsFavorite});
  }, [currentMealIsFavorite]);

  // const toggleFavorite = route.params.toggleFav;
  // console.log('toggleFavorite   ', toggleFavorite);

  // useEffect(() => {
  //   navigation.setParams({isFav: currentMealIsFavorite});
  // }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.detail}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItems key={ingredient}>{ingredient}</ListItems>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItems key={step}>{step}</ListItems>
      ))}
    </ScrollView>
  );
};

// MealDetailScreen.navigationOptions = navigationData => {
//   console.log('navigationData          ', navigationData);
//   const {mealId} = navigationData.params.mealId;
//   // const mealId = navigationData.navigation.getParam('mealId');
//   // const mealTitle: navigationData.navigation.getParam('mealTitle');
//   // const  toggleFavorite: navigationData.navigation.getParam('toggleFav');
//   const {mealTitle} = navigationData.params.mealTitle;
//   const {toggleFavorite} = navigationData.params.toggleFav;
//   console.log('mealTitle:-', mealTitle, 'toggleFav:-', toggleFavorite);

//   // const selectedMeal = MEALS.find(meal => meal.id === mealId);
//   return {
//     headerTitle: mealTitle.title,
//     headerRight: () => (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//           paddingRight: 20,
//           backgroundColor: 'White',
//         }}>
//         <TouchableOpacity
//           onPress={() => {
//             console.log('Mark as Favorite!');
//           }}>
//           <Image
//             style={{height: 25, width: 25}}
//             source={{
//               uri: '/Users/apple/dev/learning/TheMealApp/images/star.png',
//             }}
//           />
//         </TouchableOpacity>
//         {/* <TouchableOpacity>
//           <Image
//             style={{height: 25, width: 25}}
//             source={{
//               uri: '/Users/apple/dev/learning/TheMealApp/images/star-outline.png',
//             }}
//           />
//         </TouchableOpacity> */}
//       </View>
//       // <HeaderButtons HeaderButtonComponent={HeaderButton}>
//       //   {/* <Icon name="rocket" size={30} color="#900" /> */}
//       //   {/* <Icon.Button
//       //     name="star"
//       //     backgroundColor="#3b5998"
//       //     onPress={() => alert('Login with Facebook')}>
//       //     Facebook
//       //   </Icon.Button> */}

//       //   <Item
//       //     title="Favorite"
//       //     iconName="star"
//       //     onPress={() => {
//       //       console.log('Mark as Favorite!');
//       //     }}
//       //   />
//       // </HeaderButtons>
//     ),
//   };
// };

const styles = StyleSheet.create({
  screen: {
    marginBottom: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: '100%', height: 200},
  detail: {flexDirection: 'row', justifyContent: 'space-around', padding: 20},
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listitems: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 2,
    padding: 10,
  },
});

export default MealDetailScreen;
