import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

function ExitButton(): JSX.Element {
  return(
    <div className="header__buttons-authorized">
      <div className="header__btn">
        <Link className="btn btn--second" to={AppRoute.Main}>Выйти</Link>
      </div>
    </div>
  );
}

export default ExitButton;
