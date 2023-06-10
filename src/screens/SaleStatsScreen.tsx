import axios from 'axios';
import Header from 'components/Header';
import { AppLayout } from 'components/Layout/AppLayout';
import { SButton } from 'components/Styled/SButton';
import { SText } from 'components/Styled/SText';
import { SView } from 'components/Styled/SView';
import React, { useEffect, useMemo, useState } from 'react';

const SaleStatsScreen = () => {
  const [data, setData] = useState([]);

  const getInfo = async () => {
    try {
      const { data } = await axios.get('https://6480f41ef061e6ec4d4a1d0d.mockapi.io/sales');
      setData(data);
    } catch (err: any) {
      console.log(err, ' => err getInfo');
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  const totalPrice = useMemo(() => {
    return data.reduce((a, b: any) => {
      return a + b.price;
    }, 0);
  }, [data]);


  return (
    <AppLayout>
      <Header screenName="Звіт по продажам" />
      <SView marginLeft={15} marginRight={15}>
        <SText>Кількість продаж: {data.length}</SText>
        <SText>Загальна сумма: {totalPrice}</SText>
        <SButton
          onPress={() => getInfo()}
        >
          <SText>Обновити данні</SText>
        </SButton>
      </SView>
    </AppLayout>
  );
};

export default SaleStatsScreen;
