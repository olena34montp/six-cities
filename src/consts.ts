export const Setting = {
    CardsCount: 5
};

export enum AppRoute {
    Main = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer',
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}