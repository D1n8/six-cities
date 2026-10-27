import type { MainPageType } from './types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import NotFoundPage from './pages/not-found-page';
import PrivateRoute from './routes/private-route';
import { isFavorite } from './entities/favorite/utils/is-favorite';
import { routes } from './routes/config/routes';

function App({ offers }: MainPageType) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.main.mask} element={<MainPage offers={offers} />} />
        <Route path={routes.login.mask} element={<LoginPage />} />
        <Route
          path={routes.favorites.mask}
          element={
            <PrivateRoute isAuth={false}>
              <FavoritesPage items={offers.filter(isFavorite)} />
            </PrivateRoute>
          }
        />
        <Route path={routes.offer.mask} element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
