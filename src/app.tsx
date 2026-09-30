import { MainPageType } from './types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import NotFoundPage from './pages/not-found-page';
import PrivateRoute from './routes/private-route';

function App({ placesCount }: MainPageType) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage placesCount={placesCount} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuth={false}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
