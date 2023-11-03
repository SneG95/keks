import CardsList from '../cards-list/cards-list';
import FiltersList from '../filters-list/filters-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import StartButton from '../start-button/start-button';
import { getProducts } from '../../store/products-process/products-process.selectors';
import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { DEFAULT_PRODUCTS_COUNT } from '../../consts';

function Catalog(): JSX.Element {
  const products = useAppSelector(getProducts);
  const [productsCount, setProductsCount] = useState(DEFAULT_PRODUCTS_COUNT);

  useEffect(() => {
    setProductsCount(DEFAULT_PRODUCTS_COUNT);
  }, []);

  return (
    <>
      <FiltersList />
      <section className="catalog">
        <div className="container">
          <h2 className="visually-hidden">Каталог</h2>
          <div className="catalog__wrapper">

            <CardsList products={products} productsCount={productsCount} />

            {productsCount < products.length && <ShowMoreButton cardsCount={productsCount} onClick={setProductsCount} />}
            {productsCount > products.length && products.length > DEFAULT_PRODUCTS_COUNT && <StartButton />}
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;
