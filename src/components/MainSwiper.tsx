import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {Colors} from 'utils/styles';
import {SButton} from './Styled/SButton';
import {SText} from './Styled/SText';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const MainSwiper = () => {
  const slides = useSelector((state: RootState) => state.baners.baners)

  return (
    <>
      <Swiper
        style={styles.wrapper}
        dotStyle={{top: 50}}
        activeDotStyle={{top: 50}}
        activeDotColor={Colors.greenLine}>
        {slides.map((item: any, index: number) => {
          return (
            <Image
              key={index}
              style={styles.slide}
              source={{uri: item.baner}}
            />
          );
        })}
      </Swiper>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {height: 100},
  slide: {
    backgroundColor: 'red',
    width: '100%',
    height: 100,
  },
});

export default MainSwiper;
