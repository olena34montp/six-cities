import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import FavoritesPage from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found/not-found';

type AppPageProps = {
    cardsCount: number;
}

function App({ cardsCount }: AppPageProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={<MainPage cardsCount={cardsCount} />}
                />
                <Route
                    path={AppRoute.Login}
                    element={<LoginPage />}
                />
                <Route
                    path={AppRoute.Favorites}
                    element={<FavoritesPage />}
                />
                <Route
                    path={AppRoute.Offer}
                    element={<OfferPage />}
                />
                <Route
                    path="*"
                    element={<NotFoundPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;