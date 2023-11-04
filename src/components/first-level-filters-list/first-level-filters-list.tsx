import cn from 'classnames';
import { CategoryProductRu, CategoryProduct } from '../../consts';
import { setFirstLevelFilter, dropFirstLevelFilter, dropSecondLevelFilters } from '../../store/filters-process/filters-process.slice';
import { translateCategoryToRu, translateCategoryToEng } from '../../utils';
import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks';

type FirstLevelFiltersListProps = {
  filters: CategoryProduct[];
  currentFilter: CategoryProduct | null;
}

function FirstLevelFiltersList({filters, currentFilter}: FirstLevelFiltersListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = (evt: MouseEvent<HTMLElement>) => {
    const target = evt.currentTarget.innerText;
    const filter = translateCategoryToEng(target as CategoryProductRu);
    if (currentFilter === filter) {
      dispatch(dropFirstLevelFilter());
      dispatch(dropSecondLevelFilters());
      return;
    }

    dispatch(setFirstLevelFilter(filter));
  };

  return (
    <div className="catalog-filter__first-level">
      <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
      <ul className="catalog-filter__list catalog-filter__list--first-level">
        {
          filters.map((filter) => (
            <li key={filter} className="catalog-filter__item catalog-filter__item--first-level">
              <button
                className={cn(
                  'btn',
                  'btn--filter-first-level',
                  {'is-active': currentFilter === filter})}
                type="button"
                onClick={handleClick}
              >{translateCategoryToRu(filter)}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default FirstLevelFiltersList;
