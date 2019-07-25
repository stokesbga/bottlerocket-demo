import React from 'react';
import {
  Image,
  Platform,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import BRText from '../../../components/BRText';

import styles from './styles';

export default class RestaurantScreenView extends React.PureComponent {
  render() {
    const { name,
      category, 
      contact, 
      location: { 
        address,
        lat,
        lng,
        postalCode,
        state,
        city
      } = {}} = this.props.navigation.state.params;
      const coord = { latitude: lat, longitude: lng };
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapViewContainer}
          initialRegion={{
            ...coord,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}>
        <Marker
          coordinate={coord}
        />
        </MapView>

        <View style={styles.infoContainer}>
          <View style={styles.infoHeaderContainer}>
            <BRText h1 white>{name}</BRText>
            <BRText white>{category}</BRText>
          </View>
          <View style={styles.addressContainer}>
            <View style={styles.addressSection}>
              <BRText style={styles.addressText}>{address}</BRText>
              <View style={styles.row}>
                <BRText style={styles.addressText}>{`${city}, ${state} ${postalCode}`}</BRText>
              </View>
            </View>
            <View style={styles.addressSection}>
              <BRText style={styles.addressText}>{contact?.formattedPhone || `No Phone`}</BRText>
            </View>
            <View style={styles.addressSection}>
              <BRText style={styles.addressText}>{contact?.twitter ? `@${contact.twitter}` : `No Twitter`}</BRText>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

RestaurantScreenView.navigationOptions = {
  title: 'Restaurant Info'  
};
