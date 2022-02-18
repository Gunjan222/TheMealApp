import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {ScreenContainer} from 'react-native-screens';

const CategoryGridTitle = props => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View
        style={{...styles.ScreenContainer, ...{bacgroundColor: props.color}}}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoryGridTitle;
