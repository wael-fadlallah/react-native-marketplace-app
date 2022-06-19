import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image} from 'react-native';
import {CircleButton} from '.';
import {assets, COLORS, SHADOWS, SIZES} from '../constants';
import {SubInfo} from './SubInfo';

export default function NFTCard({data}: any): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={data.image} resizeMode="cover" style={styles.image} />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
        <SubInfo />
      </View>
    </View>
  );
}

const styles = {
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  card: {
    width: '100%',
    height: 250,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
};
