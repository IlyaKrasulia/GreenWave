import {AppLayout} from 'components/Layout/AppLayout';
import {SFlex} from 'components/Styled/SFlex';
import {SText} from 'components/Styled/SText';
import React, { useState } from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SView} from './Styled/SView';
import {Colors, screenWidth} from 'utils/styles';
import {SButton} from './Styled/SButton';
import BuyGasModal from './BuyGasModal';

interface IProps {
  typeOil: '95' | 'A-95' | 'ДП' | 'ГАЗ';
  produser: 'Mustang' | 'Євро5';
  color: string;
  price: number;
}

const GasItemPrice = ({typeOil, produser, color, price}: IProps) => {
  const [ modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false);
  }
  return (
    <SView marginTop={10}>
      <View style={styles.line}></View>
      <SFlex marginTop={10} justifyContent="space-between" alignItems="center">
        <SView marginLeft={15}>
          <SText textAlign="center" color={color}>
            {typeOil}
          </SText>
          <SText textAlign="center" type="t5" color={Colors.darkGrey}>
            {produser}
          </SText>
        </SView>
        <SText>{price.toLocaleString()} ₴</SText>
        <SButton
          onPress={() => setModal(true)}
          baseColor={Colors.greenLine}
          // activeColor={Colors.extraGreen}
          styleBtn={styles.button}
          borderRadius={5}>
          <SText color={Colors.white} textAlign="center">
            ПРИДБАТИ
          </SText>
        </SButton>
      </SFlex>
      <BuyGasModal price={price} produser={produser} typeGas={typeOil} modal={modal} closeModal={closeModal}/>
    </SView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 40,
    opacity: 0.3,
  },
  line: {
    width: screenWidth,
    height: 1,
    backgroundColor: Colors.grey,
  },
  button: {
    paddingVertical: 10,
    marginLeft: 15,
    marginRight: 15,
    paddingHorizontal: 15,
  },
});

export default GasItemPrice;
