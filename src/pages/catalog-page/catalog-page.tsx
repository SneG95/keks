import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';

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
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}

export default CatalogPage;
