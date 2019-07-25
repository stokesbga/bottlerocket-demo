import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
  },

  bgImg: {
    width: '100%',
    height: '100%',
    padding: 0,
  },

  gradientImg: {
    flex: 1,
    zIndex: 1
  },

  infoContainer: {
    zIndex: 999,
    position: 'absolute',
    bottom: 10,
    left: 16,
  }
});