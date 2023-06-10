import React, { } from 'react';
import { ModalWrapper } from './ModalWrapper';
import { KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native';
import { SText } from './Styled/SText';
import { SFlex } from './Styled/SFlex';
import { Colors } from 'utils/styles';
import { SButton } from './Styled/SButton';
import { IGas } from 'utils/models';

interface IProps {
    modal: boolean;
    closeModal: any;
    item?: IGas;
    setAmount: (val: string) => void;
    amount: string;
    handleBuyGas: () => void;
}

const BuyGasModal = ({
  modal,
  closeModal,
  item,
  amount,
  handleBuyGas,
  setAmount }: IProps) => {

  return (
    <ModalWrapper close={() => closeModal()} isVisible={modal}>
      {item ? (
        <KeyboardAvoidingView style={styles.wrapper}>
          <SFlex justifyContent="space-between">
            <View>
              <SText>{item.typeOil}</SText>
              <SText type="t4">{item.produser}</SText>
            </View>
            <TextInput
              placeholder="23 л."
              style={styles.input}
              value={amount}
              onChangeText={val => setAmount(val)}
            />
          </SFlex>
          <SButton
            onPress={handleBuyGas}
            baseColor={Colors.greenLine}
            styleBtn={styles.button}
            borderRadius={5}
            marginTop={20}
          >
            <SText color={Colors.white} textAlign="center">
            Придбати за {(Number(amount) * item.price).toFixed(2)} ₴
            </SText>
          </SButton>
        </KeyboardAvoidingView>
      ) : (
        <SText textAlign="center" marginTop={20} marginBottom={20}>
          Виберіть топливо
        </SText>
      )}
    </ModalWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
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
