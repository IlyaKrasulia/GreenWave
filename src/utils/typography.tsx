import { StyleSheet } from 'react-native';
import { Fonts } from './styles';

export const typography = StyleSheet.create({
  h1: {
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.2,
    fontFamily: Fonts.medium,
  },
  h2: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.2,
    fontFamily: Fonts.medium,
  },
  h3: {
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: 0.2,
    fontFamily: Fonts.semiBold,
  },
  h3Medium: {
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: 0.4,
    fontFamily: Fonts.medium,
  },
  h3SemiBold: {
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: 0.4,
    fontFamily: Fonts.semiBold,
  },
  t1: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.4,
    fontFamily: Fonts.medium,
  },
  t2: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.2,
    fontFamily: Fonts.medium,
  },
  t3: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.2,
    fontFamily: Fonts.medium,
  },
  t4: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
    fontFamily: Fonts.medium,
  },
  t5: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    fontFamily: Fonts.medium,
  },
  t5Bold: {
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0.2,
    fontFamily: Fonts.bold,
  },
  t6Regular: {
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.2,
    fontFamily: Fonts.regular,
  },
  t6: {
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.2,
    fontFamily: Fonts.medium,
  },
  button: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
    fontFamily: Fonts.semiBold,
  },
});
