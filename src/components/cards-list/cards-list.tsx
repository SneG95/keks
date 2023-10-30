import ProductCard from '../product-card/product-card';
import cn from 'classnames';

type CardsListProps = {
  isRandom?: boolean;
}

function CardsList({ isRandom }: CardsListProps): JSX.Element {
  return (
    <ul className={cn(
      { 'random-main__list': isRandom },
      {'catalog__list': !isRandom }
    )}
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      {
        isRandom &&
        <li className="random-main__item">
          <a className="random-main__link" href="#">
            <div className="random-main__icon-wrapper">
              <div className="random-main__icon">
                <svg width="120" height="130" aria-hidden="true">
                  <use xlinkHref="#icon-keks"></use>
                </svg>
              </div>
            </div>
            <h3 className="random-main__subtitle">Все кексы</h3>
          </a>
        </li>
      }
    </ul>
  );
}

export default CardsList;
