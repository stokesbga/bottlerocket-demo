import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import configureStore from "./store";

import AppNavigator from './navigation/AppNavigator';
const RootApp = configureStore(AppNavigator);

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } 
  return <RootApp />
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/gradient_bg.png'),
      require('./assets/images/ic_close.png'),
      require('./assets/images/ic_webBack.png'),
      require('./assets/images/ic_webForward.png'),
      require('./assets/images/ic_webRefresh.png'),
      require('./assets/images/icon_map.png'),
      require('./assets/images/icon.png'),
      require('./assets/images/splash.png'),
      require('./assets/images/tab_internets.png'),
      require('./assets/images/tab_lunch.png'),
    ]),
    Font.loadAsync({
      'Avenir': require('./assets/fonts/Avenir.ttf'),
    }),
  ]);
}

function handleLoadingError(error: Error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
