/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {assets, COLORS, FONTS, SHADOWS, SIZES} from '../constants';

export const NFTTitle = (): JSX.Element => {
  return (
    <View>
      <Text>NFTTitle</Text>
    </View>
  );
};

export const EthPrice = (): JSX.Element => {
  return (
    <View>
      <Text>EthPrice</Text>
    </View>
  );
};

export const ImageCmp = ({
  imgUrl,
  index,
}: {
  imgUrl: ImageSourcePropType;
  index: number;
}): JSX.Element => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{width: 48, height: 48, marginLeft: index === 0 ? 0 : -SIZES.font}}
    />
  );
};

export const EndDate = (): JSX.Element => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',
      }}>
      <Text>EndDate</Text>
    </View>
  );
};

export const People = (): JSX.Element => {
  return (
    <View style={{flexDirection: 'row'}}>
      {[assets.person01, assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-@${index}`} />
        ),
      )}
    </View>
  );
};

export const SubInfo = (): JSX.Element => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <People />
      <EndDate />
    </View>
  );
};
