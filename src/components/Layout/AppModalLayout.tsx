import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import {
  StatusBar,
  SafeAreaView,
  ColorValue,
  StatusBarStyle,
  StyleProp,
  ViewStyle,
  Pressable,
} from 'react-native';
import {
  STATUS_BAR_BACKGROUND,
  STATUS_BAR_STYLE,
  baseStyle,
} from 'utils/styles';
import ArrowDownIcon from 'assets/icons/arrow-down.svg';
import { SFlex } from 'components/Styled/SFlex';
import { StyleSheet } from 'react-native';


interface IProps {
  children: React.ReactNode;
  backgroundColor?: ColorValue;
  barStyle?: StatusBarStyle;
  screenBackgroundColor?: ColorValue;
  screenViewStyle?: StyleProp<ViewStyle>;
}

export const AppModalLayout = ({
  children,
  backgroundColor,
  barStyle,
  screenBackgroundColor,
  screenViewStyle,
}: IProps) => {
  const { goBack } = useNavigation();

  const _backgroundColor = useMemo(() => (
    backgroundColor || STATUS_BAR_BACKGROUND
  ), [backgroundColor]);

  const _barStyle = useMemo(() => (
    barStyle || STATUS_BAR_STYLE
  ), [barStyle]);

  const closeScreen = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
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
      <SFlex justifyContent="center">
        <Pressable style={styles.closeBtn} onPress={closeScreen}>
          <ArrowDownIcon/>
        </Pressable>
      </SFlex>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  closeBtn: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
});

