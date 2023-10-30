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
