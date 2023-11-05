import cn from 'classnames';
import { STARS_COUNT } from '../../consts';

type RatingListProps = {
  rating: number;
  isProductDetail?: boolean;
}

function RatingList({rating, isProductDetail}: RatingListProps): JSX.Element {
  return (
    <div className={cn(
      'star-rating',
      { 'star-rating--big': isProductDetail }
    )}
    >
      {
        Array.from({length: STARS_COUNT}, (_, k) => (
          <svg
            key={k}
            className={cn(
              'star-rating__star',
              {'star-rating__star--active': k < rating }
            )}
            width="30"
            height="30"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-star"></use>
          </svg>
        ))
      }
    </div>
  );
}

export default RatingList;
