import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import styles from './styles';

export default class BRText extends React.PureComponent {
  render() {
    const { h1, white, style, children } = this.props;
    const customStyle = [styles.default, (h1 && styles.h1), (white && styles.white), style];

    return (
      <Text {...this.props} style={customStyle}>{children}</Text>
    );
  }
}
