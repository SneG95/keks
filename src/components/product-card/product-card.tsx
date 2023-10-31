import cn from 'classnames';
import FavoriteButton from '../favorite-button/favorite-button';
import { Link, generatePath } from 'react-router-dom';
import { TProduct } from '../../types/product';
import { formatProductPrice } from '../../utils';
import { AppRoute } from '../../consts';

type ProductCardProps = {
  isRandom?: boolean;
  product: TProduct;
}

function ProductCard({ isRandom, product }: ProductCardProps): JSX.Element {
  const {title, price, previewImage, previewImageWebp, isNew, id} = product;

  return(
    <li className={cn(
      { 'random-main__item': isRandom },
      {'catalog__item': !isRandom }
    )}
    >
      <div className={cn(
        'card-item',
        {'card-item--big': !isRandom}
      )}
      >
        <Link className="card-item__img-link" to={generatePath(AppRoute.Product, { id: id })}>
          <div className="card-item__img-wrapper">
            <picture>
              <source type="image/webp" srcSet={previewImageWebp} />
              <img src={previewImage} width={isRandom ? '241' : '326'} height={isRandom ? '245' : '332'} alt={title} />
            </picture>
          </div>
          {isNew && <span className="card-item__label">Новинка</span>}
        </Link>

        <FavoriteButton id={id} />

        {!isRandom && <span className="card-item__price">{`${formatProductPrice(price)} p`}</span>}
        <Link className="card-item__link" to={generatePath(AppRoute.Product, { id: id })}>
          <h3 className="card-item__title">
            <span>{title}</span>
          </h3>
        </Link>
      </div>
    </li>
  );
}

export default ProductCard;
