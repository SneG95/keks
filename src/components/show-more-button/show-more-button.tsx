import { DEFAULT_PRODUCTS_COUNT } from '../../consts';

type ShowMoreButtonProps = {
  cardsCount: number;
  onClick: (cardsCount: number) => void;
}

function ShowMoreButton({cardsCount, onClick}: ShowMoreButtonProps): JSX.Element {
  const handleClick = () => {
    onClick(cardsCount + DEFAULT_PRODUCTS_COUNT);
  };

  return (
    <div className="catalog__button-wrapper">
      <button
        className="btn btn--second"
        type="button"
        onClick={handleClick}
      >Показать еще
      </button>
    </div>
  );
}

export default ShowMoreButton;
