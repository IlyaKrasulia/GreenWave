import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BalanceScreen from 'screens/BalanceScreen';
import ConfirmCodeScreen from 'screens/ConfirmCodeScreen';
import CouponsScreen from 'screens/CouponsScreen';
import GasPriceScreen from 'screens/GasPriceScreen';
import HistoryScreen from 'screens/HistoryScreen';
import LoginScreen from 'screens/LoginScreen';
import MainScreen from 'screens/MainScreen';
import RegisterScreen from 'screens/RegisterScreen';
import { ScreenEnum, StackParamList } from 'utils/types';
import UserScreen from 'screens/UserScreen';
import SaleStatsScreen from 'screens/SaleStatsScreen';
import BanersScreen from 'screens/BanersScreen';

const Stack = createStackNavigator<StackParamList>();


export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
        <Stack.Screen
          name={ScreenEnum.Login}
          component={LoginScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={ScreenEnum.Register}
          component={RegisterScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={ScreenEnum.Balance}
          component={BalanceScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={ScreenEnum.ConfirmCode}
          component={ConfirmCodeScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={ScreenEnum.Coupons}
          component={CouponsScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={ScreenEnum.GasPrice}
          component={GasPriceScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={ScreenEnum.History}
          component={HistoryScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={ScreenEnum.Main}
          component={MainScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={ScreenEnum.User}
          component={UserScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name={ScreenEnum.SaleStats}
          component={SaleStatsScreen}
          options={{ gestureEnabled: false }}
        />
         <Stack.Screen
          name={ScreenEnum.Baners}
          component={BanersScreen}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}