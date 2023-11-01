import { TShop } from './types/shop';

export enum AppRoute {
  Main = '/',
  Catalog = '/catalog',
  Favorites = '/favourites',
  Register = '/singup',
  LogIn = '/login',
  Product = '/productpage/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum CategoryProduct {
  Bisque = 'bisque',
  Cheesecake = 'cheesecake',
  Shortbread = 'shortbread',
  Dessert = 'dessert'
}

export enum TypeProduct {
  Chocolate = 'chocolate',
  Vanilla = 'vanilla',
  Vegetarian = 'vegetarian',
  HoneyCake = 'honey-cake',
  Lemon = 'lemon',
  NewYork = 'new-york',
  Tart = 'tart',
  FunnelCake = 'funnel-cake',
  BasketCake = 'basket-cake',
  ChocolateMuffin = 'chocolate-muffin',
  BrandMuffin = 'brand-muffin'
}

export enum NameSpace {
  Products = 'PRODUCTS',
  Product = 'PRODUCT',
  User = 'USER',
  Review = 'REVIEW',
  Filters = 'FILTERS',
  Favorites = 'FAVORITES',
  App = 'APP'
}

export enum APIRoute {
  Products = '/products',
  Product = '/products/:id',
  Favorites = '/favorites',
  Login = 'users/login',
  Registration = 'users/registration',
  Logout = 'users/logout',
  Avatar = '/users/upload',
  LastReview = 'reviews/getLast',
  Review = '/reviews/'
}

export const BACKEND_URL = 'https://grading.design.pages.academy/v0/keks';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'keks-token';

export enum RequestStatus {
  Unsent = 'UNSENT',
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Error = 'ERROR'
}

export const MAX_RANDOM_COUNT = 3;

export const SHOPS: TShop[] = [
  {
    name: 'Кондитерская 1',
    address: [59.970969, 30.316252],
    place: 'ул. Профессора Попова, 9-15',
  },
  {
    name: 'Кондитерская 2',
    address: [59.967947, 30.274708],
    place: 'Спортивная площадка, д. 10, литер А, пом. 428, Вязовая ул.',
  },
  {
    name: 'Производство',
    address: [59.960380, 30.308725],
    place: 'ул. Ленина, 10-8',
  }
];

export const URL_SHOP_MARKER = 'img/content/map-marker2.svg';
export const URL_PRODUCTION_MARKER = 'img/content/map-marker1.svg';
export const DEFAULT_ZOOM = 14;
