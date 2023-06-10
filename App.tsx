import { AppNavigation } from 'navigation/AppNavigation';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
