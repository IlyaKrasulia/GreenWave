import BuyGasModal from 'components/BuyGasModal';
import GasItemPrice from 'components/GasItemPrice';
import Header from 'components/Header';
import {AppLayout} from 'components/Layout/AppLayout';
import {SButton} from 'components/Styled/SButton';
import {SFlex} from 'components/Styled/SFlex';
import {SText} from 'components/Styled/SText';
import {SView} from 'components/Styled/SView';
import React, { useState } from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Colors, screenWidth} from 'utils/styles';

const GasPriceScreen = () => {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  }

  return (
    <AppLayout>
        <Header screenName='Ціни на пальне сьогодні' />
      <View>
        <SText type="t3" marginStart={15}>
          Середня ціна мережі
        </SText>
        <GasItemPrice
          typeOil={'95'}
          color={Colors.darkRed}
          price={49.99}
          produser="Mustang"
        />
         <GasItemPrice
          typeOil={'A-95'}
          color={Colors.darkBlue}
          price={46.99}
          produser="Євро5"
        />
         <GasItemPrice
          typeOil={'ДП'}
          color={Colors.darkBlue}
          price={44.99}
          produser="Євро5"
        />
         <GasItemPrice
          typeOil={'ДП'}
          color={Colors.darkRed}
          price={48.49}
          produser="Mustang"
        />
         <GasItemPrice
          typeOil={'ГАЗ'}
          color={Colors.blue}
          price={22.70}
          produser="Mustang"
        />
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
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

export default GasPriceScreen;
