import Header from 'components/Header';
import {AppLayout} from 'components/Layout/AppLayout';
import { SButton } from 'components/Styled/SButton';
import {SFlex} from 'components/Styled/SFlex';
import {SText} from 'components/Styled/SText';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { Colors } from 'utils/styles';
import { ScreenEnum } from 'utils/types';


const CouponsScreen = () => {
  return (
    <AppLayout>
      <Header screenName='Курони та сертифікати' prevScreen={ScreenEnum.Main} />
      <View style={styles.wrapper}>
        <SFlex flexDirection="column" marginTop={150}>
          <SText textAlign='center' marginTop={30}>
            Додавай промокоди і сертифікати в застосунок та зручно використовуй їх
          </SText>
        </SFlex>
      </View>
      <SButton
        onPress={() => {}}
        baseColor={Colors.greenLine}
        activeColor={Colors.extraGreen}
        styleBtn={styles.button}
        borderRadius={5}>
        <SText color={Colors.white} textAlign='center'>КУПИТИ ПРОМОКОД / СЕРТИФІКАТ</SText>
      </SButton>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 40,
    flex: 1
  },
  button: {
    paddingVertical: 10,
    marginLeft: 15,
    marginRight: 15,
    top: -10
  },
});

export default CouponsScreen;
