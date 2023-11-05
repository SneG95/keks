import Logo from '../logo/logo';
import HeaderButtonsList from '../header-buttons-list/header-buttons-list';
import UserInfo from '../user-info/user-info';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { AuthorizationStatus } from '../../consts';
import cn from 'classnames';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className={cn(
      'header',
      {'header--authorized': isAuth}
    )}
    >
      <div className="container">
        <div className="header__inner">

          <Logo />

          {isAuth && <UserInfo />}

          <HeaderButtonsList isAuth={isAuth} />

        </div>
      </div>
    </header>
  );
}

export default Header;
