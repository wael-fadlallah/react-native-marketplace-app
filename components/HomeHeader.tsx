/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {assets, COLORS, FONTS, SIZES} from '../constants';
export default function HomeHeader({onSearch = () => {}}): JSX.Element {
  return (
    <View style={{backgroundColor: COLORS.primary, padding: SIZES.font}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{width: 90, height: 25}}
        />
        <View style={{width: 45, height: 45}}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: 'absolute',
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{marginVertical: SIZES.font}}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}>
          Hello, Wael👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}>
          Let's find a masterpiece
        </Text>
      </View>
      <View style={{margin: SIZES.font}}>
        <View
          style={{
            width: '100%',
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 8,
          }}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{width: 20, height: 20, marginRight: SIZES.base}}
          />
          <TextInput
            placeholder="Search NFT's"
            style={{flex: 1}}
            onChange={onSearch}
          />
        </View>
      </View>
    </View>
  );
}
