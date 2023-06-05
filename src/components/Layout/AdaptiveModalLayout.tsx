import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import {
  StatusBar,
  ColorValue,
  StatusBarStyle,
  StyleProp,
  ViewStyle,
  Pressable,
  View,
} from 'react-native';
import {
  STATUS_BAR_BACKGROUND,
  STATUS_BAR_STYLE,
  baseStyle,
  screenHeight,
} from 'utils/styles';
import ArrowDownIcon from 'assets/icons/arrow-down.svg';
import { SFlex } from 'components/Styled/SFlex';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface IProps {
  children: React.ReactNode;
  backgroundColor?: ColorValue;
  barStyle?: StatusBarStyle;
  screenBackgroundColor?: ColorValue;
  screenViewStyle?: StyleProp<ViewStyle>;
}

export const AdaptiveModalLayout = ({
  children,
  backgroundColor,
  barStyle,
  screenBackgroundColor,
  screenViewStyle,
}: IProps) => {
  const { goBack } = useNavigation();
  const insets = useSafeAreaInsets();

  const _backgroundColor = useMemo(() => (
    backgroundColor || STATUS_BAR_BACKGROUND
  ), [backgroundColor]);

  const _barStyle = useMemo(() => (
    barStyle || STATUS_BAR_STYLE
  ), [barStyle]);

  const closeScreen = useCallback(() => {
    goBack();
  }, [goBack]);

  console.log(screenHeight, ' => screenHeight');

  return (
    <View
      style={[
        baseStyle.screenView,
        styles.container,
      ]}
    >
      <StatusBar
        backgroundColor={_backgroundColor}
        barStyle={_barStyle}
        translucent={false}
      />
      <View
        style={[
          screenBackgroundColor ? {
            backgroundColor: screenBackgroundColor,
          } : {},
          screenViewStyle,
          styles.wrapper,
          {
            height: screenHeight < 680 ? screenHeight * 0.9 : screenHeight * 0.75,
            paddingBottom: Math.min(insets.bottom, 20),
          },
        ]}
      >
        <SFlex justifyContent="center">
          <Pressable style={styles.closeBtn} onPress={closeScreen}>
            <ArrowDownIcon/>
          </Pressable>
        </SFlex>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closeBtn: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  wrapper: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

