import React, { useState } from 'react';
import {ModalWrapper} from './ModalWrapper';
import {KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native';
import {SText} from './Styled/SText';
import {SFlex} from './Styled/SFlex';
import {Colors} from 'utils/styles';
import {SButton} from './Styled/SButton';
import { useDispatch } from 'react-redux';
import { buyGas } from 'redux/slices/userSlice';
import axios from 'axios';

interface IProps {
    modal: boolean;
    closeModal: any;
    typeGas: string;
    produser: string;
    price: number;
}

const BuyGasModal = ({modal, closeModal, typeGas, produser, price}: IProps) => {
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();

    const handleBuyGas = () => {
      dispatch(buyGas([typeGas, produser, amount, price]));
      let data = {
        typeGas: typeGas,
        produser: typeGas,
        amount: amount,
        price: amount * price,
      }
      axios.post('https://6480f41ef061e6ec4d4a1d0d.mockapi.io/sales', data)
      setAmount('0');
      closeModal();
    }
  return (
    <ModalWrapper close={() => closeModal()} isVisible={modal}>
      <KeyboardAvoidingView style={styles.wrapper}>
        <SFlex justifyContent="space-between">
          <View>
            <SText>{typeGas}</SText>
            <SText type="t4">{produser}</SText>
          </View>
          <TextInput placeholder="23 л." style={styles.input} onChangeText={(text) => setAmount(text)} />
        </SFlex>
          <SButton
            onPress={handleBuyGas}
            baseColor={Colors.greenLine}
            styleBtn={styles.button}
            borderRadius={5}
            marginTop={20}>
            <SText color={Colors.white} textAlign="center">
              Придбати за {Number(amount) * price} ₴
            </SText>
          </SButton>
      </KeyboardAvoidingView>
    </ModalWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  input: {
    fontSize: 30,
    borderColor: Colors.grey,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    paddingVertical: 10,
  },
});

export default BuyGasModal;
