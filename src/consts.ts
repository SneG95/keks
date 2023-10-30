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
