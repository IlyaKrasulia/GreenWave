import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import { Colors } from 'utils/styles';

const MainSwiper = () => {
  
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={{top: 50}}
      activeDotStyle={{top: 50}}
      activeDotColor={Colors.greenLine}>
      <Image style={styles.slide} source={require('../assets/images/baner-1.jpg')} />
      <Image style={styles.slide} source={require('../assets/images/baner-2.jpg')} />
      <Image style={styles.slide} source={require('../assets/images/baner-3.jpg')} />
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: { height: 100},
  slide: {
    backgroundColor: 'red',
    width: '100%',
    height: 100,
  },
});

export default MainSwiper;
