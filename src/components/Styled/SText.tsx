import React from 'react';
import { Text, TextStyle } from 'react-native';
import { Colors } from 'utils/styles';
import { typography } from 'utils/typography';

type TextAlignType = TextStyle['textAlign'];
type FontWeightType = TextStyle['fontWeight'];
type AlignSelfType = TextStyle['alignSelf'];
type TextTransformType = TextStyle['textTransform'];
type TextDecorationType = TextStyle['textDecorationLine'];

interface IProps {
  color?: string;
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
  marginStart?: number;
  marginEnd?: number;
  fontWeight?: FontWeightType;
  textAlign?: TextAlignType;
  textDecoration?: TextDecorationType;
  alignSelf?: AlignSelfType;
  textTransform?: TextTransformType;
  opacity?: number;
  letterSpacing?: number;
  type?: 'h1' | 'h2' | 'h3' | 'h3Medium' | 'h3SemiBold' | 't1' | 't2' | 't3' | 't4' | 't5' | 't5Bold' | 't6' | 'button' | 't6Regular';
  children: React.ReactNode;
  numberOfLines?: number;
  lineBreakMode?: 'tail' | 'clip' | 'middle' | 'head';
  lineHeight?: number;
}

export const SText = ({
  type = 't2',
  color = Colors.black,
  fontSize,
  marginTop = 0,
  marginBottom = 0,
  marginStart = 0,
  marginEnd = 0,
  textAlign = 'left',
  textDecoration = 'none',
  alignSelf = 'auto',
  opacity = 1,
  letterSpacing,
  children,
  lineBreakMode,
  numberOfLines,
  lineHeight,
}: IProps) => {
  return (
    <Text
      style={[
        {
          color,
          marginTop,
          marginBottom,
          marginStart,
          marginEnd,
          textAlign,
          alignSelf,
          opacity,
          textDecorationLine: textDecoration,
          lineHeight: lineHeight ? lineHeight : typography[type].lineHeight,
          fontSize: fontSize ? fontSize : typography[type].fontSize,
          letterSpacing: letterSpacing ? letterSpacing : typography[type].letterSpacing,
          fontFamily: typography[type].fontFamily,
        },
      ]}
      lineBreakMode={lineBreakMode}
      numberOfLines={numberOfLines}
      allowFontScaling={false}
    >
      {children}
    </Text>
  );
};

