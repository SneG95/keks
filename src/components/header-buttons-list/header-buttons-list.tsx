import HeaderFavoriteButton from '../header-favorite-button/header-favorite-button';
import ExitButton from '../exit-button/exit-button';
import RegistrationButton from '../registration-button/registration-button';
import LoginButton from '../login-button/login-button';

type HeaderButtonsListProps = {
  isAuth: boolean;
}

function HeaderButtonsList({ isAuth }: HeaderButtonsListProps): JSX.Element {
  return (
    <div className="header__buttons">
      {
        isAuth ?
          <>
            <HeaderFavoriteButton />
            <ExitButton />
          </>
          :
          <>
            <RegistrationButton />
            <LoginButton />
          </>
      }
    </div>
  );
}

export default HeaderButtonsList;
