import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import BackArrow from '../../components/back-arrow/back-arrow';
import CountFavorites from '../../components/count-favorites/count-favorites';
import CardsList from '../../components/cards-list/cards-list';
import NotFoundFavorites from '../../components/not-found-favorites/not-found-favorites';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFavorites } from '../../store/favorite-process/favorite-process.selectors';
import { deleteFavoriteAction } from '../../store/api-actions';

function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector(getFavorites);
  const dispatch = useAppDispatch();

  const handleClearButtonClick = () => {
    favorites.map((product) => dispatch(deleteFavoriteAction(product.id)));
  };

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="favorites-page">
          <h1 className="visually-hidden">Избранное</h1>
          <div className="back-link">
            <div className="container">

              <BackArrow />

            </div>
          </div>
          {
            favorites.length > 0 ?
              <>
                <CountFavorites favorites={favorites} />
                <section className="favourites">
                  <div className="container">
                    <h2 className="visually-hidden">Избранные товары</h2>
                    <div className="favourites__button">
                      <button className="btn btn--second" type="button" onClick={handleClearButtonClick}>Очистить</button>
                    </div>
                  </div>
                  <section className="catalog">
                    <div className="container">
                      <h2 className="visually-hidden">Каталог</h2>
                      <div className="catalog__wrapper">

                        <CardsList products={favorites} productsCount={favorites.length} />

                      </div>
                    </div>
                  </section>
                </section>
              </>
              :
              <NotFoundFavorites />
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
