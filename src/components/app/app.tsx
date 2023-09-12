import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { OfferType } from '../../types/offer';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login/login';
import FavoritesPage from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type AppPageProps = {
    offers: OfferType[];
}

function App({ offers }: AppPageProps): JSX.Element {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path={AppRoute.Main}
                        element={<MainPage offers={offers} />}
                    />
                    <Route
                        path={AppRoute.Login}
                        element={<LoginPage />}
                    />
                    <Route
                        path={AppRoute.Favorites}
                        element={
                            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                                <FavoritesPage offers={offers} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path={AppRoute.Offer}
                        element={<OfferPage offers={offers} />}>
                        <Route path=':id' element={<OfferPage offers={offers}/>} />    
                    </Route>
                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;