function FavoriteButton(): JSX.Element {
  return(
    <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
      <svg width="51" height="41" aria-hidden="true">
        <use xlinkHref="#icon-like"></use>
      </svg>
    </button>
  );
}

export default FavoriteButton;
