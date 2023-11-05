import { Link } from 'react-router-dom';
import { AppRoute, ValidAvatarProperties } from '../../consts';
import { checkNameValid, checkEmailValid, checkPasswordValid } from '../../utils';
import { useRef, useState, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getErrorStatus } from '../../store/user-process/user-process.selectors';
import { dropError } from '../../store/user-process/user-process.slice';
import { registrateAction } from '../../store/api-actions';

function RegisterPage(): JSX.Element {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const avatarRef = useRef<HTMLInputElement | null>(null);
  const [isNameError, setNameError] = useState<boolean>(false);
  const [isEmailError, setEmailError] = useState<boolean>(false);
  const [isPasswordError, setPasswordError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const hasError = useAppSelector(getErrorStatus);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (nameRef.current !== null && emailRef.current !== null && passwordRef.current !== null) {
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      /*if (avatarRef.current !== null && avatarRef.current.files) {
        const size = avatarRef.current.files[0].size;

      }*/

      const isNameValid = checkNameValid(name);
      const isEmailValid = checkEmailValid(email);
      const isPasswordValid = checkPasswordValid(password);
      setEmailError(false);
      setPasswordError(false);

      if (!isNameValid) {
        setNameError(true);
      }

      if (!isEmailValid) {
        setEmailError(true);
      }

      if (!isPasswordValid) {
        setPasswordError(true);
      }

      if (isNameValid && isEmailValid && isPasswordValid) {
        dispatch(registrateAction({
          name: name,
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
        <section className="register-page">
          <div className="register-page__header">
            <div className="register-page__img-wrap">
              <img className="register-page__img" src="img/svg/hero-keks.svg" width="727" height="569" alt="Картика кота." />
            </div>
          </div>
          <div className="register-page__content">
            <div className="register-page__inner">
              <h1 className="register-page__title">Регистрация</h1>
              <div className="register-page__form">
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  method="post"
                  autoComplete="off"
                >
                  <div className="register-page__fields">
                    <div className="custom-input register-page__field">
                      <label><span className="custom-input__label">Введите ваше имя</span>
                        <input
                          ref={nameRef}
                          type="text"
                          name="user-name-1"
                          placeholder="Имя"
                          required
                        />
                      </label>
                    </div>
                    <div className="custom-input register-page__field">
                      <label><span className="custom-input__label">Введите вашу почту</span>
                        <input
                          ref={emailRef}
                          type="email"
                          name="user-mail-1"
                          placeholder="Почта"
                          required
                        />
                      </label>
                    </div>
                    <div className="custom-input register-page__field">
                      <label><span className="custom-input__label">Введите ваш пароль</span>
                        <input
                          ref={passwordRef}
                          type="password"
                          name="user-password-1"
                          placeholder="Пароль"
                          required
                        />
                      </label>
                    </div>
                    <div className="custom-input register-page__field">
                      <label><span className="custom-input__label">Введите ваше имя</span>
                        <input
                          ref={avatarRef}
                          type="file"
                          name="user-name-1"
                          data-text="Аватар"
                          accept={ValidAvatarProperties.Types as string}
                        />
                      </label>
                    </div>
                  </div>
                  <button className="btn register-page__btn btn--large" type="submit">Зарегистрироваться</button>
                </form>
              </div>
              {
                (isNameError || isEmailError || isPasswordError || hasError) &&
                <div className='register-page__text-wrap'>
                  {isNameError && <p>Please enter a valid name</p>}
                  {isEmailError && <p>Please enter a valid email address</p>}
                  {isPasswordError && <p>Please enter a valid password</p>}
                  {hasError && <p>We can’t register you now. <br />Please try again.</p>}
                </div>
              }
              <p className="register-page__text-wrap">Уже зарегистрированы? <Link className="register-page__link" to={AppRoute.LogIn}>Войдите</Link> в свой аккаунт.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default RegisterPage;
