import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import BackArrow from '../../components/back-arrow/back-arrow';

function CatalogPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Каталог товаров</h1>
        <div className="back-link">
          <div className="container">
            <BackArrow />
          </div>
        </div>
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}

export default CatalogPage;
