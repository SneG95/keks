import { useNavigate } from 'react-router-dom';

function BackArrow(): JSX.Element {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <a className="back-link__link" href="#" onClick={handleClick}>Назад
      <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
        <use xlinkHref="#icon-arrow-left"></use>
      </svg>
    </a>
  );
}

export default BackArrow;
