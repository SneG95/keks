import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

function LoginButton(): JSX.Element {
  return(
    <div className="header__btn">
      <Link className="btn" to={AppRoute.LogIn}>Войти</Link>
    </div>
  );
}

export default LoginButton;
