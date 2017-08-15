import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { setAppReady } from './store/actions';

import App from './init';
import store from './store/store';

persistStore(
  store,
  {
    storage: AsyncStorage,
    whitelist: ['app'],
  },
  () => {
    store.dispatch(setAppReady());
  },
);

const SuperGasOilRatioMixCalc = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(
  'SuperGasOilRatioMixCalc',
  () => SuperGasOilRatioMixCalc,
);
