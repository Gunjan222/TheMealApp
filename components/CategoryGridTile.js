import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
// import {ScreenContainer} from 'react-native-screens';

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text style={styles.title} numberofLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 8,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowOpacity: 0.26,
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 2},

    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'right',
  },
});

export default CategoryGridTile;
