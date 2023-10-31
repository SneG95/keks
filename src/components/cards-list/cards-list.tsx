import ProductCard from '../product-card/product-card';
import AllProductsCard from '../all-products-card/all-products-card';
import { useAppSelector } from '../../hooks';
import { getProducts } from '../../store/products-process/products-process.selectors';
import { getRandomProducts } from '../../utils';
import { MAX_RANDOM_COUNT } from '../../consts';
import cn from 'classnames';

type CardsListProps = {
  isRandom?: boolean;
}

function CardsList({ isRandom }: CardsListProps): JSX.Element {
  const products = useAppSelector(getProducts);

  return (
    <ul className={cn(
      { 'random-main__list': isRandom },
      {'catalog__list': !isRandom }
    )}
    >
      {
        isRandom ? getRandomProducts(products, MAX_RANDOM_COUNT).map((product) => (
          <ProductCard key={product.id} product={product} />)
        )
          :
          products.map((product) => (
            <ProductCard key={product.id} product={product} />)
          )
      }
      { isRandom && <AllProductsCard /> }
    </ul>
  );
}

export default CardsList;
