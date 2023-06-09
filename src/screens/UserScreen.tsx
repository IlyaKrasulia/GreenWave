import {useNavigation} from '@react-navigation/native';
import {AppLayout} from 'components/Layout/AppLayout';
import NavigateBar from 'components/NavigateBar';
import {SButton} from 'components/Styled/SButton';
import {SFlex} from 'components/Styled/SFlex';
import {SText} from 'components/Styled/SText';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {Colors} from 'utils/styles';
import {ScreenEnum} from 'utils/types';

const UserScreen = () => {
  const userData = useSelector((state: RootState) => state.user);
  const {navigate}: any = useNavigation();
  console.log(userData);
  

  return (
    <AppLayout>
      <View style={styles.header}>
        <SFlex justifyContent="center" alignItems="flex-end" flex={1}>
          <SText type="t1bold" color={Colors.white} textAlign="center">
            {userData.name} {userData.lastName}
          </SText>
        </SFlex>
      </View>
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <SButton onPress={() => {}} styleBtn={styles.button}>
          <SText type="t2">Мої данні</SText>
        </SButton>
        {userData.userType === 'Адміністратор' || userData.userType === 'Касир' &&
           (
            <>
              <SButton
                onPress={() => navigate(ScreenEnum.SaleStats)}
                styleBtn={styles.button}>
                <SText type="t2">Звіт по продажам</SText>
              </SButton>
            </>
          )}
      </View>
        <NavigateBar />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.greenLine,
    height: 120,
    top: -60,
    paddingBottom: 30,
  },
  button: {
    borderColor: Colors.transparent,
    borderBottomColor: Colors.black,
    borderWidth: 1,
    paddingVertical: 10,
  },
});

export default UserScreen;
