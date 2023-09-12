import { OfferType } from "../types/offer";

export const offers: OfferType[] = [
    {
        id: 'd85aaed0-be26-4baf-ba12-1bf5e3974489',
        title: 'Amazing and Extremely Central Flat',
        type: 'room',
        price: 174,
        previewImage: 'https://13.design.pages.academy/static/hotel/6.jpg',
        city: {
            name: 'Paris',
            location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
        },
        location: { latitude: 48.834610000000005, longitude: 2.335499, zoom: 16 },
        isFavorite: false,
        isPremium: false,
        rating: 3.2,
    },
    {
        id: 'd5fdc24e-e3be-41f1-ac5d-5d7ff9b1256b',
        title: 'The house among olive ',
        type: 'apartment',
        price: 447,
        previewImage: 'https://13.design.pages.academy/static/hotel/14.jpg',
        city: {
            name: 'Paris',
            location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
        },
        location: { latitude: 48.85761, longitude: 2.358499, zoom: 16 },
        isFavorite: true,
        isPremium: false,
        rating: 2.3,
    },
    {
        id: 'fa0d1e3d-9f83-44e1-bfbf-9e04442ef486',
        title: 'The Pondhouse - A Magical Place',
        type: 'house',
        price: 502,
        previewImage: 'https://13.design.pages.academy/static/hotel/14.jpg',
        city: {
            name: 'Paris',
            location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
        },
        location: { latitude: 48.87561, longitude: 2.375499, zoom: 16 },
        isFavorite: false,
        isPremium: true,
        rating: 3.6,
    },
    {
        id: '8455ead2-5162-4c79-8142-89c4f2934f49',
        title: 'Canal View Prinsengracht',
        type: 'room',
        price: 289,
        previewImage: 'https://13.design.pages.academy/static/hotel/12.jpg',
        city: {
            name: 'Paris',
            location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
        },
        location: { latitude: 48.87961000000001, longitude: 2.353499, zoom: 16 },
        isFavorite: false,
        isPremium: false,
        rating: 2.6,
    }
]