import axios from 'axios';
import Header from 'components/Header';
import {AppLayout} from 'components/Layout/AppLayout';
import { SButton } from 'components/Styled/SButton';
import {SText} from 'components/Styled/SText';
import {SView} from 'components/Styled/SView';
import React, {useEffect, useState} from 'react';

const SaleStatsScreen = () => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const getInfo = () => {
    axios
      .get('https://6480f41ef061e6ec4d4a1d0d.mockapi.io/sales')
      .then(res => setData(res.data));
  };
  const test = () => {
    for (let i = 0; i < data.length; i++) {
        const obj = data[i];
        setTotalPrice((prev) => prev + obj.price);
      }
}

  useEffect(() => {
    getInfo();
    test()
  }, []);


  return (
    <AppLayout>
      <Header screenName="Звіт по продажам" />
      <SView marginLeft={15} marginRight={15}>
        <SText>Кількість продаж: {data.length}</SText>
        <SText>Загальна сумма: {totalPrice}</SText>
        <SButton onPress={test}><SText>Обновити данні</SText></SButton>
      </SView>
    </AppLayout>
  );
};

export default SaleStatsScreen;
