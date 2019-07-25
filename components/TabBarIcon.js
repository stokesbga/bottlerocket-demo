import React from 'react';
import { Image } from 'react-native'

const InternetsImgIcon = require('../assets/images/tab_internets.png');
const LunchImgIcon = require('../assets/images/tab_lunch.png');

export default ({ name, focused }) => {
  return (
    <Image
      source={name === 'internets' ? InternetsImgIcon : LunchImgIcon}
      style={{ width: 23, height: 23 }}
      resizeMode={'contain'}
    />
  );
}
