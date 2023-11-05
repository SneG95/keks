import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import BackArrow from '../../components/back-arrow/back-arrow';
import CommentForm from '../../components/comment-form/comment-form';
import ProductDetail from '../../components/product-detail/product-detail';
import FilterSort from '../../components/filter-sort/filter-sort';
import CommentsList from '../../components/comments-list/comments-list';

function ProductPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Карточка: пользователь авторизован</h1>
        <div className="back-link">
          <div className="container">
            <BackArrow />
          </div>
        </div>

        <ProductDetail />

        <CommentForm />

        <FilterSort />

        <CommentsList />
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
