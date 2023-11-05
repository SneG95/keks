import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useRef, useState, FormEvent } from 'react';
import { checkEmailValid, checkPasswordValid } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { dropError } from '../../store/user-process/user-process.slice';
import { getErrorStatus } from '../../store/user-process/user-process.selectors';
import { loginAction } from '../../store/api-actions';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [isEmailError, setEmailError] = useState<boolean>(false);
  const [isPasswordError, setPasswordError] = useState<boolean>(false);
  const hasError = useAppSelector(getErrorStatus);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const isEmailValid = checkEmailValid(email);
      const isPasswordValid = checkPasswordValid(password);
      setEmailError(false);
      setPasswordError(false);

      if (!isEmailValid) {
        setEmailError(true);
      }

      if (!isPasswordValid) {
        setPasswordError(true);
      }

      if (isEmailValid && isPasswordValid) {
        dispatch(loginAction({
          email: email,
          password: password
        }));
      }

      dispatch(dropError());
    }
  };

  return (
    <div className="wrapper">
      <main>
        <section className="login-page">
          <div className="login-page__header">
            <div className="login-page__img-wrap">
              <img className="login-page__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картика кота." />
            </div>
          </div>
          <div className="login-page__content">
            <div className="login-page__inner">
              <h1 className="login-page__title">Вход</h1>
              <div className="login-page__form">
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  method="post"
                  autoComplete="off"
                >
                  <div className="login-page__fields">
                    <div className="custom-input login-page__field">
                      <label>
                        <span className="custom-input__label">Введите вашу почту</span>
                        <input
                          ref={emailRef}
                          type="email"
                          name="user-mail-1"
                          placeholder="Почта"
                          required
                        />
                      </label>
                    </div>
                    <div className="custom-input login-page__field">
                      <label>
                        <span className="custom-input__label">Введите ваш пароль</span>
                        <input
                          ref={passwordRef}
                          type="password"
                          name="user-password-1"
                          placeholder="Пароль"
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <button className="btn login-page__btn btn--large" type="submit">Войти</button>
                </form>
              </div>
              {
                (isEmailError || isPasswordError || hasError) &&
                <div className='register-page__text-wrap'>
                  {isEmailError && <p>Please enter a valid email address</p>}
                  {isPasswordError && <p>Please enter a valid password</p>}
                  {hasError && <p>We can’t register you now. <br />Please try again.</p>}
                </div>
              }
              <p className="login-page__text-wrap">Ещё не зарегистрированы? <Link className="login-page__link" to={AppRoute.Register}>Создайте</Link> аккаунт прямо сейчас.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
