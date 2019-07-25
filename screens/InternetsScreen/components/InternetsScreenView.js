import React from 'react';
import { ActivityIndicator, StyleSheet, WebView, View, Text } from 'react-native';

import styles from './styles';

export default class InternetsScreenView extends React.PureComponent {
  render() {
    return (
      <WebView 
        style={{flex: 1}} 
        source={{ uri: `https://www.bottlerocketstudios.com/contact` }}
        startInLoadingState
        renderLoading={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator />
            <Text style={styles.loadingLabel}>Loading...</Text>
          </View>
        )} />
    );
  }
}

InternetsScreenView.navigationOptions = {
  title: 'Internets',
};