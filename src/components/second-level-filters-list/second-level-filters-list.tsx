import { TypeProduct } from '../../consts';
import { translateTypeToRu } from '../../utils';
import { setSecondLevelFilter } from '../../store/filters-process/filters-process.slice';
import { useAppDispatch } from '../../hooks';
import { ChangeEvent } from 'react';

type SecondLevelFiltersListProps = {
  filters: TypeProduct[];
  currentFilters: TypeProduct[];
}

function SecondLevelFiltersList({filters, currentFilters}: SecondLevelFiltersListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSecondLevelFilter(evt.currentTarget.value));
  };

  return (
    <div className="catalog-filter__second-level">
      <h3 className="catalog-filter__title catalog-filter__title--second-level">начинки</h3>
      <ul className="catalog-filter__list catalog-filter__list--second-level">
        {
          filters.map((filter, index) => (
            <li key={filter} className="catalog-filter__item catalog-filter__item--second-level">
              <div className="custom-toggle custom-toggle--checkbox">
                <input
                  type="checkbox"
                  value={filter}
                  id={`catalog-second-level-id-${index}`}
                  name="catalog-second-level"
                  checked={currentFilters.some((item) => item === filter)}
                  onChange={handleChange}
                />
                <label className="custom-toggle__label" htmlFor={`catalog-second-level-id-${index}`}>{translateTypeToRu(filter)}</label>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default SecondLevelFiltersList;
