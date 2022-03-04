import React from 'react';
import {Image, Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
// import {Ionicons} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}>
      <Image
        source={(uri = '/Users/apple/dev/learning/TheMealApp/images/star.png')}
      />
    </HeaderButton>
  );
};

export default CustomHeaderButton;
