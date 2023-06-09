import {AppLayout} from 'components/Layout/AppLayout';
import {SButton} from 'components/Styled/SButton';
import {SFlex} from 'components/Styled/SFlex';
import {SText} from 'components/Styled/SText';
import {SView} from 'components/Styled/SView';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors, screenHeight} from 'utils/styles';

const ConfirmCodeScreen = () => {
  return (
    <View style={styles.wrapper}>
      <SView flex={1}>
        <SText
          color={Colors.white}
          textAlign="center"
          marginTop={200}
          type="h3">
          Авторизація
        </SText>
        <SText color={Colors.white} opacity={0.8} type="t4" marginTop={50}>
          Ваш номер телефону
        </SText>
        <SText type="h3" color={Colors.white} marginTop={10}>
          +380662192962
        </SText>
        <SText color={Colors.white} opacity={0.8} type="t4" marginTop={20}>
          Код з SMS
        </SText>
        <TextInput style={styles.input} value="" />
        <SFlex justifyContent='center'>
          <SButton
            onPress={() => {}}
            baseColor={Colors.white}
            activeColor={Colors.extraGreen}
            styleBtn={styles.codeButton}
            borderRadius={5}>
            <SText color={Colors.greenLine} textAlign="center" type='t4'>
              Надіслати новий код
            </SText>
          </SButton>
        </SFlex>
      </SView>
      <SButton
        onPress={() => {}}
        baseColor={Colors.white}
        activeColor={Colors.extraGreen}
        styleBtn={styles.button}
        borderRadius={5}>
        <SText color={Colors.greenLine} textAlign="center">
          ДАЛІ
        </SText>
      </SButton>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.greenLine,
    height: screenHeight + 80,
    bottom: 60,
    paddingHorizontal: 30,
  },
  input: {
    color: Colors.white,
    fontSize: 20,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  button: {
    paddingVertical: 10,
    marginLeft: 15,
    marginRight: 15,
    top: -140,
  },
  codeButton: {
    marginTop: 25,
    padding: 5,
    paddingHorizontal: 10
  }
});

export default ConfirmCodeScreen;
