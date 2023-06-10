import React, { useMemo } from 'react';
import {
  StatusBar,
  SafeAreaView,
  ColorValue,
  StatusBarStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {
  Colors,
  STATUS_BAR_BACKGROUND,
  STATUS_BAR_STYLE,
  baseStyle,
} from 'utils/styles';


interface IProps {
  children: React.ReactNode;
  backgroundColor?: ColorValue;
  barStyle?: StatusBarStyle;
  screenBackgroundColor?: ColorValue;
  screenViewStyle?: StyleProp<ViewStyle>;
  upperBackgroundColor?: string,
}

export const AppLayout = ({
  children,
  backgroundColor,
  barStyle,
  screenBackgroundColor,
  screenViewStyle,
}: IProps) => {

  const _backgroundColor = useMemo(() => (
    backgroundColor || STATUS_BAR_BACKGROUND
  ), [backgroundColor]);

  const _barStyle = useMemo(() => (
    barStyle || STATUS_BAR_STYLE
  ), [barStyle]);

  return (
    <>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: Colors.greenLine }}
      />
      <SafeAreaView
        style={[
          baseStyle.screenView,
          Boolean(screenBackgroundColor) ? {
            backgroundColor: screenBackgroundColor,
          } : {},
          screenViewStyle,
        ]}
      >
        <StatusBar
          backgroundColor={_backgroundColor}
          barStyle={_barStyle}
          translucent={false}
        />
        {children}
      </SafeAreaView>
    </>
  );
};
