import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, SHADOWS, SIZES} from '../constants';

export const Button = (): JSX.Element => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};

export const RectButton = (): JSX.Element => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};

export const CircleButton = ({
  imgUrl,
  handlePress,
  ...props
}: any): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{...styles.circleButton.touchableOpacity, ...props}}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={styles.circleButton.image}
      />
    </TouchableOpacity>
  );
};

const styles = {
  circleButton: {
    touchableOpacity: {
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: 'absolute',
      borderRadius: SIZES.extraLarge,
      alignItems: 'center',
      justifyContent: 'center',
      ...SHADOWS.light,
    },
    image: {
      width: 24,
      height: 24,
    },
  },
};
