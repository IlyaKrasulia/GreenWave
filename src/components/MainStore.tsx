import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SText } from './Styled/SText';
import { Colors } from 'utils/styles';
import { SFlex } from './Styled/SFlex';
import { SButton } from './Styled/SButton';

const MainStore = () => {
  return (
    <View style={styles.wrapper}>
      <SText
        color={Colors.greenLine}
        type="h3"
        marginTop={40}
        textAlign="center"
      >
        GreenWave Pay
      </SText>
      <View style={{ flex: 1, top: 40, paddingHorizontal: 40 }}>
        <SFlex flex={1} justifyContent="space-between">
          <SButton onPress={() => {}} styleBtn={{ width: 80 }}>
            <SFlex flexDirection="column">
              <View style={styles.btnIcon}>
                <Image
                  source={require('assets/icons/gas-station.png')}
                  style={{ height: 20, width: 20 }}
                />
              </View>
              <SText color={Colors.darkGrey} type="t3" marginTop={10}>
                Заправка
              </SText>
            </SFlex>
          </SButton>
          <SButton onPress={() => {}} styleBtn={{ width: 80 }}>
            <SFlex flexDirection="column">
              <View style={styles.btnIcon}>
                <Image
                  source={require('../assets/icons/coffee.png')}
                  style={{ height: 20, width: 20 }}
                />
              </View>
              <SText color={Colors.darkGrey} type="t3" marginTop={10}>
                Кава
              </SText>
            </SFlex>
          </SButton>
          <SButton onPress={() => {}} styleBtn={{ width: 80 }}>
            <SFlex flexDirection="column">
              <View style={styles.btnIcon}>
                <Image
                  source={require('../assets/icons/hamburger.png')}
                  style={{ height: 20, width: 20 }}
                />
              </View>
              <SText color={Colors.darkGrey} type="t3" marginTop={10}>
                Кафе
              </SText>
            </SFlex>
          </SButton>
        </SFlex>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 100,
  },
  btnIcon: {
    backgroundColor: Colors.greenLine,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default MainStore;
