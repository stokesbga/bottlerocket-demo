import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import BRText from '../BRText';
import styles from './styles';

export default class RestaurantCard extends React.PureComponent {
  render() {
    const { name, category, backgroundImageURL, onPress } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={styles.container}>
          <ImageBackground 
            source={{ uri: backgroundImageURL }}
            style={styles.bgImg}>
            <Image
              source={require('../../assets/images/gradient_bg.png')}
              resizeMode={`stretch`}
              style={styles.gradientImg} />
            <View style={styles.infoContainer}>
              <BRText h1 white>{name}</BRText>
              <BRText white>{category}</BRText>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
}
