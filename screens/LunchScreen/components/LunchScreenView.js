import React from 'react';
import {
  Image,
  Platform,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import RestaurantCard from '../../../components/RestaurantCard';

import styles from './styles';

export default class LunchScreenView extends React.PureComponent {

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  _goToRestaurantScreen = (item) => {
    this.props.navigation.navigate('Restaurant', item)
  }

  _renderRestaurantCard = ({ item }) => (
    <RestaurantCard {...item} onPress={this._goToRestaurantScreen.bind(this, item)} />
  )

  render() {
    const { restaurants, isLoading } = this.props;
    return (
      <FlatList
        style={styles.container}
        data={restaurants}
        onRefresh={this.props.fetchRestaurants}
        refreshing={isLoading}
        keyExtractor={(item) => `${item.name}_${item.category}`}
        renderItem={this._renderRestaurantCard}
        contentContainerStyle={styles.contentContainer} />
    );
  }
}

LunchScreenView.navigationOptions = {
  title: 'Lunch Tyme'
};
