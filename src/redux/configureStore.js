import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import mattressesReducer from './ducks/mattresses';
import cartReducer from './ducks/cart';
import { watcherSaga } from './sagas/rootSaga';

const rootReducer = combineReducers({
  mattresses: mattressesReducer,
  cart: cartReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watcherSaga);

export default store;
