import HeaderFavoriteButton from '../header-favorite-button/header-favorite-button';
import ExitButton from '../exit-button/exit-button';
import RegistrationButton from '../registration-button/registration-button';
import LoginButton from '../login-button/login-button';
import { useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/favorite-process/favorite-process.selectors';

type HeaderButtonsListProps = {
  isAuth: boolean;
}

function HeaderButtonsList({ isAuth }: HeaderButtonsListProps): JSX.Element {
  const favoritesCount = useAppSelector(getFavorites).length;

  return (
    <div className="header__buttons">
      {
        isAuth ?
          <>
            <HeaderFavoriteButton count={favoritesCount} />
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
