import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

type HeaderFavoriteButtonProps = {
  count: number;
}

function HeaderFavoriteButton({count}: HeaderFavoriteButtonProps): JSX.Element {
  return (
    <Link className="header__favourite" to={AppRoute.Favorites}>
      <span className="header__favourite-icon">
        <svg width="33" height="29" aria-hidden="true">
          <use xlinkHref="#icon-favourite"></use>
        </svg>
      </span>
      <span className="header__favourite-number">{count}</span>
      <span className="visually-hidden">Избранное</span>
    </Link>
  );
}

export default HeaderFavoriteButton;
