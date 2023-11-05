import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

function Logo(): JSX.Element {
  return (
    <Link className="header__logo" to={AppRoute.Main} aria-label="Переход на главную">
      <img src="img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" />
    </Link>
  );
}

export default Logo;
