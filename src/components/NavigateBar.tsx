import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, screenWidth } from 'utils/styles';
import { SFlex } from './Styled/SFlex';
import { SButton } from './Styled/SButton';
import HomeSvg from '../assets/icons/icons8-home.svg';
import UserSvg from '../assets/icons/news.svg';
import { SText } from './Styled/SText';
import { useNavigation } from '@react-navigation/native';
import { ScreenEnum } from 'utils/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NavigateBar = () => {

  const { navigate }: any = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.wrapper,
      {
        paddingBottom: insets.bottom,
      },
    ]}
    >
      <SFlex marginLeft={15} marginRight={15} marginTop={15} marginBottom={15} justifyContent="center">
        <SButton onPress={() => navigate(ScreenEnum.Main)}>
          <SFlex flexDirection="column">
            <HomeSvg height={20} />
            <SText type="t5" marginTop={10}>Головна</SText>
          </SFlex>
        </SButton>
        <SButton onPress={() => navigate(ScreenEnum.User)} marginLeft={100}>
          <SFlex flexDirection="column">
            <UserSvg height={20} />
            <SText type="t5" marginTop={10}>Профіль</SText>
          </SFlex>
        </SButton>
      </SFlex>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.lightGrey,
    position: 'absolute',
    bottom: 0,
    width: screenWidth,
  },
});

export default NavigateBar;
