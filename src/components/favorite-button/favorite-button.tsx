import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/favorite-process/favorite-process.selectors';
import { addFavoriteAction, deleteFavoriteAction } from '../../store/api-actions';
import { dropChangeStatusError } from '../../store/favorite-process/favorite-process.slice';
import cn from 'classnames';
import { useEffect } from 'react';

type FavoriteButtonProps = {
  id: string;
}

function FavoriteButton({id}: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavorites);
  const isFavorite = favorites.some((product) => product.id === id);

  const handleButtonClick = () => {
    if (isFavorite) {
      dispatch(deleteFavoriteAction(id));
      return;
    }

    dispatch(addFavoriteAction(id));
  };

  useEffect(() => {
    dispatch(dropChangeStatusError());
  }, [dispatch]);

  return(
    <button
      className={cn(
        'card-item__favorites',
        {'card-item__favorites--active': isFavorite}
      )}
      onClick={handleButtonClick}
    >
      <span className="visually-hidden">Добавить в избранное</span>
      <svg width="51" height="41" aria-hidden="true">
        <use xlinkHref="#icon-like"></use>
      </svg>
    </button>
  );
}

export default FavoriteButton;
