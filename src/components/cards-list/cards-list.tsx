import ProductCard from '../product-card/product-card';
import AllProductsCard from '../all-products-card/all-products-card';
import { TProduct } from '../../types/product';
import cn from 'classnames';

type CardsListProps = {
  products: TProduct[];
  productsCount: number;
  isRandom?: boolean;
}

function CardsList({ products, productsCount, isRandom }: CardsListProps): JSX.Element {
  return (
    <ul className={cn(
      { 'random-main__list': isRandom },
      {'catalog__list': !isRandom }
    )}
    >
      {
        products.slice(0, productsCount).map((product) => (
          <ProductCard key={product.id} product={product} />))
      }
      { isRandom && <AllProductsCard /> }
    </ul>
  );
}

export default CardsList;
