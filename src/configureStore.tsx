import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import rootEpic from './epics';
import rootReducer from './reducers'
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['form']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const epicMiddleware = createEpicMiddleware();

export default () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(
      epicMiddleware
    )
  )
  epicMiddleware.run(rootEpic);

  const persistor = persistStore(store)
  return { store, persistor }
}