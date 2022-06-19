import React from 'react';
import {FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeHeader, FocusedStatusBar, NFTCard} from '../../components/index';
import {COLORS, NFTData} from '../../constants';
import {Item} from '../../models/NftItemModel';

export default function Home(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={NFTData}
            renderItem={({item}: {item: Item}) => <NFTCard data={item} />}
            keyExtractor={(item: Item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={HomeHeader}
          />
        </View>

        <View style={styles.background}>
          <View style={styles.backgroundTop} />
          <View style={styles.backgroundBottom} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  safeAreaView: {flex: 1},
  container: {flex: 1},
  listContainer: {zIndex: 0},
  background: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  backgroundTop: {height: 300, backgroundColor: COLORS.primary},
  backgroundBottom: {flex: 1, backgroundColor: COLORS.white},
};
