import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  isLoginPage?: boolean;
  isRegisterPage?: boolean;
}

function PrivateRoute({authorizationStatus, children, isLoginPage, isRegisterPage}: PrivateRouteProps): JSX.Element | null {
  if(isLoginPage || isRegisterPage) {
    return(
      authorizationStatus === AuthorizationStatus.NoAuth
        ? children
        : <Navigate to={AppRoute.Main} />
    );
  }

  if(authorizationStatus === AuthorizationStatus.Unknown) {
    return null;
  }

  return(
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.LogIn} />
  );
}
export default PrivateRoute;
