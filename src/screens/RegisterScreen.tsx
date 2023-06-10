import { useNavigation } from '@react-navigation/native';
import { AppLayout } from 'components/Layout/AppLayout';
import { SButton } from 'components/Styled/SButton';
import { SFlex } from 'components/Styled/SFlex';
import { SText } from 'components/Styled/SText';
import { SView } from 'components/Styled/SView';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addName } from 'redux/slices/userSlice';
import { RootState } from 'redux/store';
import { Colors } from 'utils/styles';
import { ScreenEnum } from 'utils/types';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userType, setUserType] = useState('');
  const userData = useSelector((state: RootState) => state.user);

  const submitName = () => {
    dispatch(addName([name, lastName, userType]));
    navigate(ScreenEnum.Main);
    console.log(userData);
  };

  return (
    <AppLayout screenBackgroundColor={Colors.greenLine}>
      <View style={styles.wrapper}>
        <SView flex={1}>
          <SText
            color={Colors.white}
            textAlign="center"
            type="h3"
            marginBottom={100}
            marginTop={100}
          >
          Реэстрація
          </SText>
          <TextInput
            placeholder="Прізвище"
            placeholderTextColor={Colors.white}
            style={styles.input}
            onChangeText={text => setLastName(text)}
            value={lastName}
          />
          <TextInput
            placeholder="Ім'я"
            placeholderTextColor={Colors.white}
            style={styles.input}
            onChangeText={text => setName(text)}
            value={name}
          />
          <SFlex
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
          >
            <SButton
              baseColor={userType === 'Користувач' ? Colors.darkGrey : Colors.grey}
              onPress={() => setUserType('Користувач')}
              styleBtn={styles.typeUserButton}
              activeColor={Colors.lightGrey}
              borderRadius={10}
            >
              <SText
                textAlign="center"
                color={userType === 'Користувач' ? Colors.white : Colors.black}
              >
              Користувач
              </SText>
            </SButton>
            <SButton
              marginLeft={5}
              marginRight={5}
              baseColor={userType === 'Касир' ? Colors.darkGrey : Colors.grey}
              onPress={() => setUserType('Касир')}
              styleBtn={styles.typeUserButton}
              activeColor={Colors.lightGrey}
              borderRadius={10}
            >
              <SText
                textAlign="center"
                color={userType === 'Касир' ? Colors.white : Colors.black}
              >
              Касир
              </SText>
            </SButton>
            <SButton
              baseColor={userType === 'Адміністратор' ? Colors.darkGrey : Colors.grey}
              onPress={() => setUserType('Адміністратор')}
              styleBtn={styles.typeUserButton}
              activeColor={Colors.lightGrey}
              borderRadius={10}
            >
              <SText
                textAlign="center"
                color={userType === 'Адміністратор' ? Colors.white : Colors.black}
              >
              Адміністратор
              </SText>
            </SButton>
          </SFlex>
        </SView>
        <SButton
          onPress={submitName}
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
    marginBottom: 30,
  },
  button: {
    paddingVertical: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
  typeUserButton: {
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
});

export default RegisterScreen;
