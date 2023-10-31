import cn from 'classnames';
import { TProduct } from '../../types/product';
import { formatProductPrice } from '../../utils';

type ProductCardProps = {
  isRandom?: boolean;
  product: TProduct;
}

function ProductCard({ isRandom, product }: ProductCardProps): JSX.Element {
  const {title, price, previewImage, previewImageWebp, isNew} = product;

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
        <a className="card-item__img-link" href="#">
          <div className="card-item__img-wrapper">
            <picture>
              <source type="image/webp" srcSet={previewImageWebp} />
              <img src={previewImage} width={isRandom ? '241' : '326'} height={isRandom ? '245' : '332'} alt={title} />
            </picture>
          </div>
          {isNew && <span className="card-item__label">Новинка</span>}
        </a>
        <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
          <svg width="51" height="41" aria-hidden="true">
            <use xlinkHref="#icon-like"></use>
          </svg>
        </button>
        {!isRandom && <span className="card-item__price">{`${formatProductPrice(price)} p`}</span>}
        <a className="card-item__link" href="#">
          <h3 className="card-item__title">
            <span>{title}</span>
          </h3>
        </a>
      </div>
    </li>
  );
}

export default ProductCard;
