import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../consts';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RegisterPage from '../../pages/register-page/register-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import ProductPage from '../../pages/product-page/product-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../consts';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchProductsAction } from '../../store/api-actions';

function App(): JSX.Element {
  const authorizationStatus = AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, [dispatch]);

  return(
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.LogIn}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus} isLoginPage>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Register}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus} isRegisterPage>
                <RegisterPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Catalog}
            element={<CatalogPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Product}
            element={<ProductPage />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
