import { useNavigation } from '@react-navigation/native';
import { AppLayout } from 'components/Layout/AppLayout';
import { SButton } from 'components/Styled/SButton';
import { SText } from 'components/Styled/SText';
import { SView } from 'components/Styled/SView';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { useDispatch } from 'react-redux';
import { addPhone } from 'redux/slices/userSlice';
import { Colors } from 'utils/styles';
import { ScreenEnum } from 'utils/types';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [phone, setPhone] = useState('');

  const submitPhone = () => {
    dispatch(addPhone(phone));
    navigate(ScreenEnum.Register);
  };

  const phoneMask = [
    '+', '3', '8', '0', '(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/,
  ];

  return (
    <AppLayout screenBackgroundColor={Colors.greenLine}>
      <View style={styles.wrapper}>
        <SView flex={1}>
          <SText
            color={Colors.white}
            textAlign="center"
            marginTop={200}
            type="h3"
          >
            Ласкаво просимо!
          </SText>
          <SText color={Colors.white} opacity={0.8} type="t4" marginTop={50}>
            Введіть Ваш номер телефону
          </SText>
          <MaskInput
            mask={phoneMask}
            placeholderTextColor={Colors.white}
            style={styles.input}
            value={phone}
            onChangeText={text => setPhone(text)}
          />
        </SView>
        <SButton
          onPress={submitPhone}
          baseColor={Colors.white}
          activeColor={Colors.extraGreen}
          styleBtn={styles.button}
          borderRadius={5}
        >
          <SText color={Colors.greenLine} textAlign="center">
          ДАЛІ
          </SText>
        </SButton>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.greenLine,
    paddingHorizontal: 30,
  },
  input: {
    color: Colors.white,
    fontSize: 20,
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    marginTop: 10,
    paddingBottom: 5,
  },
  button: {
    paddingVertical: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
});

export default LoginScreen;
