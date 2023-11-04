import CardsList from '../cards-list/cards-list';
import FiltersList from '../filters-list/filters-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import StartButton from '../start-button/start-button';
import NotFoundProducts from '../not-found-products/not-found-products';
import { getProducts } from '../../store/products-process/products-process.selectors';
import { getFirstLevelFilter, getCurrentSecondLevelFilters } from '../../store/filters-process/filters-process.selectors';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect, useState } from 'react';
import { DEFAULT_PRODUCTS_COUNT } from '../../consts';
import { fetchCategoriesAction } from '../../store/api-actions';
import { getProductsByCategory, getProductsByTypes } from '../../utils';

function Catalog(): JSX.Element {
  const dispatch = useAppDispatch();
  let products = useAppSelector(getProducts);
  const currentFirstLevel = useAppSelector(getFirstLevelFilter);
  const currentSecondLevelFilters = useAppSelector(getCurrentSecondLevelFilters);
  const [productsCount, setProductsCount] = useState(DEFAULT_PRODUCTS_COUNT);

  useEffect(() => {
    setProductsCount(DEFAULT_PRODUCTS_COUNT);
  }, [currentFirstLevel, currentSecondLevelFilters]);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  if (currentFirstLevel) {
    products = getProductsByCategory(products, currentFirstLevel);
  }

  if(currentSecondLevelFilters.length > 0) {
    products = getProductsByTypes(products, currentSecondLevelFilters);
  }

  return (
    <>
      <FiltersList currentFirstLevel={currentFirstLevel} currentSecondLevelFilters={currentSecondLevelFilters} />
      {
        products.length > 0 ?
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
          :
          <NotFoundProducts />
      }
    </>
  );
}

export default Catalog;
