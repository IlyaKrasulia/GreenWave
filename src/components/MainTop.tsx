import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Colors } from 'utils/styles';
import { SText } from './Styled/SText';
import { SFlex } from './Styled/SFlex';
import { SButton } from './Styled/SButton';
import { useNavigation } from '@react-navigation/native';
import { ScreenEnum } from 'utils/types';

interface IProps {
    balance: number,
    oil: number,
    coffee: number,
}

const MainTop = ({ balance, oil, coffee }: IProps) => {
  const { navigate }: any = useNavigation();

  return (
    <View style={styles.wrapper}>
      <SText marginTop={60} textAlign="center" color={Colors.white} type="t3">
        Мій баланс
      </SText>
      <SFlex justifyContent="center" marginTop={10}>
        <SText color={Colors.white} type="h1">
          {balance.toLocaleString()}
        </SText>
        <SText color={Colors.white} type="t3">
          ₴
        </SText>
      </SFlex>
      <SFlex justifyContent="center" marginTop={20}>
        <SButton
          onPress={() => navigate(ScreenEnum.History)}
          baseColor="#00000023"
          styleBtn={{ paddingVertical: 5, paddingHorizontal: 25 }}
          borderRadius={20}
        >
          <SFlex alignItems="center">
            <Image
              source={require('../assets/icons/history.png')}
              style={{ height: 20, width: 20 }}
            />
            <SText marginStart={5} color={Colors.white} type="t3">
              Історія
            </SText>
          </SFlex>
        </SButton>
      </SFlex>
      <SFlex justifyContent="center" marginTop={50}>
        <SButton
          onPress={() => navigate(ScreenEnum.Balance)}
          baseColor="#ffffff35"
          borderRadius={40}
          styleBtn={{ padding: 15 }}
        >
          <SFlex>
            <SText color={Colors.white}>Гаманець</SText>
            <SText color={Colors.white} marginStart={40}>{oil} л</SText>
            <SText color={Colors.white} marginStart={40}>{coffee}</SText>
          </SFlex>
        </SButton>
      </SFlex>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.greenLine,
    paddingBottom: 30,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});

export default MainTop;
