import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { TProductDetail } from '../../types/product';
import { getNoun, getSumPriceProducts, formatProductPrice } from '../../utils';

type CountFavoritesProps = {
  favorites: TProductDetail[];
}

function CountFavorites({favorites}: CountFavoritesProps): JSX.Element {
  const sumPrices = getSumPriceProducts(favorites);

  return (
    <section className="number-of-favourites favorites-page__qty">
      <div className="container">
        <h2 className="visually-hidden">Количество товаров в избранном.</h2>
        <p className="number-of-favourites__cakes">{`${favorites.length} ${getNoun(favorites.length) as string}`}</p>
        <div className="number-of-favourites__wrapper">
          <div className="number-of-favourites__wrap-price">
            <p className="number-of-favourites__text">Всего</p>
            <p className="number-of-favourites__price">{`${formatProductPrice(sumPrices)} р`}</p>
          </div>
        </div>
        <div className="number-of-favourites__button">
          <Link className="btn" to={AppRoute.Catalog}>В каталог</Link>
        </div>
      </div>
    </section>
  );
}

export default CountFavorites;
