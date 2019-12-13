import React, { } from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './navigators/RootNavigator';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './configureStore';

const store = configureStore()

const Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return  <Provider store={store.store}>
        <PersistGate
          persistor={store.persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
  }
}