import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import {onChange} from 'react-native-reanimated';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{true: Colors.primaryColor}}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = ({navigation}) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({save: saveFilters});
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Available Filters / Restrictions </Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />

      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />

      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />

      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
    margin: 20,
  },
});

export default FiltersScreen;
