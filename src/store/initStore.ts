import { Store, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getInitialState, reducers } from './reducers';
import { AppState } from 'types';

const middleware = [thunk];

const initializeStore = (initialState = getInitialState()): Store<AppState> => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));
};

export default initializeStore;
