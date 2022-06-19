import React from 'react';
import {useIsFocused} from '@react-navigation/native';
import {StatusBar} from 'react-native';

export default function FocusedStatusBar(props: any): JSX.Element | null {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
}
