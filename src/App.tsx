import { FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Header from './components/header/Header';
import Products from './components/products/Products';
import initializeStore from './store/initStore';
import { AppThemeProvider } from 'src/modules/styles';
import { getProductApi } from 'store/actions/productsActions';
import { AppState } from 'types';

const store = initializeStore();

const App: FC = () => {
  const dispatch = store.dispatch as ThunkDispatch<AppState, unknown, AnyAction>;

  useEffect(() => {
    dispatch(getProductApi());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <AppThemeProvider>
        <div>
          <Header />
          <main>
            <Products />
          </main>
        </div>
      </AppThemeProvider>
    </Provider>
  );
};

export default App;
