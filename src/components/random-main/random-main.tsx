import CardsList from '../cards-list/cards-list';
import { useAppSelector } from '../../hooks';
import { getProducts } from '../../store/products-process/products-process.selectors';
import { getRandomProducts } from '../../utils';
import { MAX_RANDOM_COUNT } from '../../consts';

function RandomMain(): JSX.Element {
  const products = useAppSelector(getProducts);
  const randomProducts = getRandomProducts(products, MAX_RANDOM_COUNT);

  return (
    <section className="random-main">
      <div className="container">
        <h2 className="random-main__title">кексы</h2>
        <CardsList products={randomProducts} productsCount={MAX_RANDOM_COUNT} isRandom />
      </div>
    </section>
  );
}

export default RandomMain;
