import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

function RegistrationButton(): JSX.Element {
  return (
    <div className="header__btn">
      <Link className="btn btn--third header__link header__link--reg" to={AppRoute.Register}>Регистрация</Link>
    </div>
  );
}

export default RegistrationButton;
