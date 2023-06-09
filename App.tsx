import {AppLayout} from 'components/Layout/AppLayout';
import {AppNavigation} from 'navigation/AppNavigation';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import BalanceScreen from 'screens/BalanceScreen';
import ConfirmCodeScreen from 'screens/ConfirmCodeScreen';
import CouponsScreen from 'screens/CouponsScreen';
import GasPrice from 'screens/GasPriceScreen';
import HistoryScreen from 'screens/HistoryScreen';
import LoginScreen from 'screens/LoginScreen';
import Main from 'screens/MainScreen';
import RegisterScreen from 'screens/RegisterScreen';
import UserScreen from 'screens/UserScreen';
import {ScreenEnum} from 'utils/types';
import { store } from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
