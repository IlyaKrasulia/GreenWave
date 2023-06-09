import Header from 'components/Header';
import {AppLayout} from 'components/Layout/AppLayout';
import {SButton} from 'components/Styled/SButton';
import {SFlex} from 'components/Styled/SFlex';
import {SText} from 'components/Styled/SText';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import {Colors} from 'utils/styles';

const BalanceScreen = () => {
  const oil = useSelector((state: RootState) => state.user.gas)

  console.log(oil);
  
  return (
    <AppLayout>
      <Header screenName='Гаманець PRIDE' />
      <View style={styles.wrapper}>
        {oil < 1 && <SFlex flexDirection="column" marginTop={150}>
          <Image
            source={require('../assets/icons/balance.jpg')}
            style={{width: 150, height: 150}}
          />
          <SText type="h3" textAlign="center" marginTop={30}>
            Тут зберігатиметься твоє пальне, напої та товари
          </SText>
          <SText textAlign="center" type="t4" marginTop={20}>
            Купуй пальне та напої і використовуй з сервісом GreenWave PAY або на
            касі.
          </SText>
        </SFlex>}
        {oil.map((it:any, index: number) => {

          return (
            <View key={index}>
              <SFlex justifyContent='space-between'>
                <View>
                  <SText>{it.type}</SText>
                  <SText>{it.produser}</SText>
                </View>
                <SText>{it.amount} л.</SText>
              </SFlex>
              <View style={styles.line}></View>
            </View>
          )
        })}
      </View>
      
      <SButton
        onPress={() => {}}
        baseColor={Colors.greenLine}
        activeColor={Colors.extraGreen}
        styleBtn={styles.button}
        borderRadius={5}>
        <SText color={Colors.white} textAlign='center'>КУПИТИ ПАЛИВО АБО НАПОЇ</SText>
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
  line: {
    backgroundColor: Colors.grey,
    height: 1,
    marginTop: 10
  }
});

export default BalanceScreen;
