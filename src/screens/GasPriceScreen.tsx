import axios from 'axios';
import BuyGasModal from 'components/BuyGasModal';
import GasItemPrice from 'components/GasItemPrice';
import Header from 'components/Header';
import {AppLayout} from 'components/Layout/AppLayout';
import {SText} from 'components/Styled/SText';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {buyGas} from 'redux/slices/userSlice';
import {IGas} from 'utils/models';
import {Colors} from 'utils/styles';

const list: Array<IGas> = [
  {
    typeOil: '95',
    price: 49.99,
    produser: 'Mustang',
    color: Colors.darkRed,
  },
  {
    typeOil: 'A-95',
    price: 43.2,
    produser: 'Євро5',
    color: Colors.darkBlue,
  },
  {
    typeOil: 'ДП',
    price: 49.99,
    produser: 'Євро5',
    color: Colors.darkRed,
  },
  {
    typeOil: 'ГАЗ',
    price: 22.7,
    produser: 'Mustang',
    color: Colors.darkBlue,
  },
];

const GasPriceScreen = () => {
  const [activeGas, setActiveGas] = useState<number | null>(null);
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  

  const handleBuyGas = async () => {
    try {
      if (activeGas !== null && list[activeGas]) {
        let data = {
          typeGas: list[activeGas].typeOil,
          produser: list[activeGas].typeOil,
          amount: Number(amount),
          price: Number(amount) * list[activeGas].price,
        };
        await axios.post(
          'https://6480f41ef061e6ec4d4a1d0d.mockapi.io/sales',
          data,
        );
        dispatch(
          buyGas([
            list[activeGas].typeOil,
            list[activeGas].produser,
            Number(amount),
            list[activeGas].price,
          ]),
        );
        setAmount('');
        closeModal();
      }
    } catch (err: any) {
      console.log(err, ' => err handleBuyGas');
    }
  };

  const closeModal = () => {
    setActiveGas(null);
    setModal(false);
  };

  return (
    <AppLayout>
      <Header screenName="Ціни на пальне сьогодні" />
      <View>
        <SText type="t3" marginStart={15}>
          Середня ціна мережі
        </SText>
        {list.map((it, index) => (
          <GasItemPrice
            typeOil={it.typeOil}
            color={it.color}
            price={it.price}
            produser={it.produser}
            setActiveGas={() => {
              setActiveGas(index);
              setModal(true);
            }}
            key={index}
          />
        ))}
      </View>
      <BuyGasModal
        modal={modal}
        closeModal={closeModal}
        item={activeGas !== null  ? list[activeGas] : undefined}
        setAmount={setAmount}
        amount={amount}
        handleBuyGas={handleBuyGas}
      />
    </AppLayout>
  );
};

export default GasPriceScreen;
