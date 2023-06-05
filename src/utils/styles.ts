import {
  ColorValue,
  Dimensions,
  StatusBarStyle,
  StyleSheet,
} from 'react-native';

// Dimensions
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

// StatusBar
export const STATUS_BAR_BACKGROUND: ColorValue = 'transparent';
export const STATUS_BAR_STYLE: StatusBarStyle = 'dark-content';

// BaseStyle
export const baseStyle = StyleSheet.create({
  screenView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
});

// Scale
export const widthScale = screenWidth / 375;
export const heightScale = screenHeight / 812;

// ScaleSize
interface ScaleSizeOption {
  min?: number;
  max?: number;
}

export const getWidthScaleSize = (size: number, options?: ScaleSizeOption): number => {
  const scaleSize = Math.floor(size * widthScale);
  if (options) {
    const { min, max } = options;
    const minSize: number = min || 0;
    const maxSize: number = max || Infinity;
    return scaleSize > maxSize ? maxSize : scaleSize < minSize ? minSize : scaleSize;
  }
  return scaleSize;
};

export const getHeightScaleSize = (size: number, options?: ScaleSizeOption): number => {
  const scaleSize = Math.floor(size * heightScale);
  if (options) {
    const { min, max } = options;
    const minSize: number = min || 0;
    const maxSize: number = max || Infinity;
    return scaleSize > maxSize ? maxSize : scaleSize < minSize ? minSize : scaleSize;
  }
  return scaleSize;
};

// Size
export const getHeightSize = (size: number, options?: ScaleSizeOption): number => {
  if (options) {
    const { min, max } = options;
    const minSize: number = min || 0;
    const maxSize: number = max || Infinity;
    return size > maxSize ? maxSize : size < minSize ? minSize : size;
  }
  return size;
};

// Colors

export enum Colors {
  'yellow' = '#FFD159',
  'lightOrange' = '#FAB101',
  'orange' = '#EC662B',
  'lightGreen' = '#BCEEC7',
  'greenLine' = 'rgba(102, 185, 120, 1)',
  'darkGreen' = '#9EE2AD',
  'extraGreen' = 'rgba(102, 185, 120, 0.5)',
  'green' = '#66B978',
  'blue' = '#ACDCFF',
  'darkBlue' = '#85BCE4',
  'lightRed' = '#FF7A68',
  'red' = '#EE3E17',
  'darkRed' = '#D64D3B',
  'black' = '#000000',
  'mainBlack' = '#302936',
  'darkGrey' = '#7B7D8E',
  'grey' = '#D8D8DE',
  'greyText' = '#ACADBC',
  'lightGrey' = '#E7E8F1',
  'secondaryGrey' = '#E3E3EC',
  'white' = '#FFFFFF',
  'transparent' = 'transparent',
}

export enum Fonts {
  'light' = 'Manrope-Light',
  'regular' = 'Manrope-Regular',
  'medium' = 'Manrope-Medium',
  'semiBold' = 'Manrope-SemiBold',
  'bold' = 'Manrope-Bold',
  'extraBold' = 'Manrope-Extrabold',
}

export type TMargins = {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export const defaultMargins: TMargins = {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
};

