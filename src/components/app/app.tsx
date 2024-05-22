import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

type AppProps = {
  authorizationStatus: AuthorizationStatus;
  store: Store;
};

function App({ authorizationStatus, store }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}`}
            element={<OfferScreen />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
