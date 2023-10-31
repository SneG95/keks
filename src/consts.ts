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
