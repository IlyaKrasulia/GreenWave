import Header from 'components/Header';
import { AppLayout } from 'components/Layout/AppLayout';
import { SFlex } from 'components/Styled/SFlex';
import { SText } from 'components/Styled/SText';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Colors } from 'utils/styles';

const HistoryScreen = () => {
  const data = useSelector((state: RootState) => state.user.history);

  return (
    <AppLayout>
      <Header screenName="Історія" />
      <ScrollView style={styles.wrapper}>
        {data.length > 0 ? data.map((it: any, index: number) => {
          return (
            <View style={styles.item} key={index}>
              <SFlex justifyContent="space-between">
                <View>
                  <SText type="t5">Дата</SText>
                  <SText color={Colors.black}>{it.date}</SText>
                  <SText marginTop={15} type="t5">
                    Опис
                  </SText>
                  <SText color={Colors.black}>{it.typeOil} "{it.produser}" {it.amount}л.</SText>
                </View>
                <View>
                  <SText>{it.price} ₴</SText>
                </View>
              </SFlex>
            </View>
          );
        }) :  <SFlex flexDirection="column" alignItems="center">
          <Image
            source={require('../assets/icons/clipboard.png')}
            style={{ width: 200, height: 200 }}
          />
          <SText textAlign="center" marginTop={30}>
            Поповнюйте та використовуйте гаманец, купляйте на АЗК, робіть
            подарунки
          </SText>
          <SText type="t4" marginTop={20}>Всі ваші операції будуть відображені тут</SText>
        </SFlex>}
      </ScrollView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 40,
  },
  item: {
    borderColor: Colors.black,
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
});

export default HistoryScreen;
