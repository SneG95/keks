import FirstLevelFiltersList from '../first-level-filters-list/first-level-filters-list';
import SecondLevelFiltersList from '../second-level-filters-list/second-level-filters-list';
import { getFirstLevelFilters, getSecondLevelFilters } from '../../store/filters-process/filters-process.selectors';
import { useAppSelector } from '../../hooks';
import { CategoryProduct, TypeProduct } from '../../consts';

type FiltersListProps = {
  currentFirstLevel: CategoryProduct | null;
  currentSecondLevelFilters: TypeProduct[];
}

function FiltersList({currentFirstLevel, currentSecondLevelFilters}: FiltersListProps): JSX.Element {
  const firstLevelFilters = useAppSelector(getFirstLevelFilters);
  const secondLevelFilters = useAppSelector(getSecondLevelFilters);

  return (
    <div className="catalog-filter">
      <div className="container">
        <FirstLevelFiltersList filters={firstLevelFilters} currentFilter={currentFirstLevel} />
        {currentFirstLevel && <SecondLevelFiltersList filters={secondLevelFilters} currentFilters={currentSecondLevelFilters} />}
      </div>
    </div>
  );
}

export default FiltersList;
