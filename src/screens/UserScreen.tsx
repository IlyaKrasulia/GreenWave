import {useNavigation} from '@react-navigation/native';
import {AppLayout} from 'components/Layout/AppLayout';
import NavigateBar from 'components/NavigateBar';
import {SButton} from 'components/Styled/SButton';
import {SText} from 'components/Styled/SText';
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {Colors} from 'utils/styles';
import {ScreenEnum} from 'utils/types';

const UserScreen = () => {
  const userData = useSelector((state: RootState) => state.user);
  const {navigate} = useNavigation();

  const userName = useMemo(() => {
    if (userData.name || userData.lastName) {
      return `${userData.name} ${userData.lastName}`;
    } else {
      return 'Anonym';
    }
  }, [userData]);

  return (
    <AppLayout>
      <View style={styles.header}>
        <SText type="t1bold" color={Colors.white} textAlign="center">
          {userName}
        </SText>
      </View>
      <View style={styles.container}>
        <SButton onPress={() => {}} styleBtn={styles.button}>
          <SText type="t2">Мої данні</SText>
        </SButton>
        {userData.userType === 'Касир' && (
          <>
            <SButton
              onPress={() => navigate(ScreenEnum.SaleStats)}
              styleBtn={styles.button}>
              <SText type="t2">Звіт по продажам</SText>
            </SButton>
          </>
        )}
        {
          (userData.userType === 'Адміністратор' && (
            <SButton
              onPress={() => navigate(ScreenEnum.Baners)}
              styleBtn={styles.button}>
              <SText type="t2">Керування банерами</SText>
            </SButton>
          ))
        }
      </View>
      <NavigateBar />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.greenLine,
    paddingVertical: 14,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button: {
    borderColor: Colors.transparent,
    borderBottomColor: Colors.black,
    borderWidth: 1,
    paddingVertical: 10,
  },
});

export default UserScreen;
