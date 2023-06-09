import {useNavigation} from '@react-navigation/native';
import {AppLayout} from 'components/Layout/AppLayout';
import MainStore from 'components/MainStore';
import MainSwiper from 'components/MainSwiper';
import MainTop from 'components/MainTop';
import NavigateBar from 'components/NavigateBar';
import {SButton} from 'components/Styled/SButton';
import {SFlex} from 'components/Styled/SFlex';
import {SText} from 'components/Styled/SText';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'redux/store';
import {Colors} from 'utils/styles';
import {ScreenEnum} from 'utils/types';

const MainScreen = () => {
  const {navigate}: any = useNavigation();
  const userData = useSelector((state: RootState) => state.user);

  console.log(userData);

  return (
    <AppLayout>
      <MainTop balance={userData.balance} oil={21} coffee={4} />
      <ScrollView style={{paddingVertical: 40, paddingBottom: 140}}>
      <MainStore />
        <MainSwiper />
        <View style={styles.midleButtons}>
          <SFlex justifyContent="space-between">
            <SButton onPress={() => navigate(ScreenEnum.Coupons)}>
              <View style={styles.buttonWrapper}>
                <SText textAlign="center" type="t4">
                  Купони/сертифікати
                </SText>
              </View>
            </SButton>
            <View style={styles.line}></View>
            <SButton onPress={() => navigate(ScreenEnum.GasPrice)}>
              <View style={styles.buttonWrapper}>
                <SText textAlign="center" type="t4">
                  Ціни на пальне
                </SText>
              </View>
            </SButton>
          </SFlex>
        </View>
      </ScrollView>
      <NavigateBar />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  midleButtons: {
    backgroundColor: Colors.lightGrey,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 130
  },
  buttonWrapper: {
    padding: 20,
    width: 170,
    justifyContent: 'center',
  },
  line: {
    backgroundColor: Colors.white,
    height: '100%',
    width: 1,
  },
});

export default MainScreen;
