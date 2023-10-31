import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CardsList from '../../components/cards-list/cards-list';

function CatalogPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Каталог товаров</h1>
        <div className="back-link">
          <div className="container">
            <a className="back-link__link" href="#">Назад
              <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
                <use xlinkHref="#icon-arrow-left"></use>
              </svg>
            </a>
          </div>
        </div>
        <div className="catalog-filter">
          <div className="container">
            <div className="catalog-filter__first-level">
              <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
              <ul className="catalog-filter__list catalog-filter__list--first-level">
                <li className="catalog-filter__item catalog-filter__item--first-level">
                  <button className="btn btn--filter-first-level" type="button">Бисквит</button>
                </li>
                <li className="catalog-filter__item catalog-filter__item--first-level">
                  <button className="btn btn--filter-first-level" type="button">Десерт</button>
                </li>
                <li className="catalog-filter__item catalog-filter__item--first-level">
                  <button className="btn btn--filter-first-level" type="button">Чизкейк</button>
                </li>
                <li className="catalog-filter__item catalog-filter__item--first-level">
                  <button className="btn btn--filter-first-level" type="button">Песочное</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="catalog">
          <div className="container">
            <h2 className="visually-hidden">Каталог</h2>
            <div className="catalog__wrapper">

              <CardsList />

              <div className="catalog__button-wrapper">
                <button className="btn btn--second" type="button">Показать еще</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CatalogPage;
