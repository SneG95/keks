import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import BackArrow from '../../components/back-arrow/back-arrow';
import CommentForm from '../../components/comment-form/comment-form';
import ProductDetail from '../../components/product-detail/product-detail';
import FilterSort from '../../components/filter-sort/filter-sort';
import CommentsList from '../../components/comments-list/comments-list';
import Loader from '../../components/loader/loader';
import ErrorScreen from '../../components/error-screen/error-screen';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProduct, getProductLoadedStatus, getErrorStatus } from '../../store/product-process/product-process.selectors';
import { useEffect } from 'react';
import { fetchProductAction, fetchCommentsAction } from '../../store/api-actions';
import { dropProduct } from '../../store/product-process/product-process.slice';
import { getComments, getCommentsLoadedStatus } from '../../store/comments-process/comments-process.selectors';

function ProductPage(): JSX.Element {
  const {id = ''} = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(getProduct);
  const isProductLoaded = useAppSelector(getProductLoadedStatus);
  const hasProductError = useAppSelector(getErrorStatus);
  const comments = useAppSelector(getComments);
  const isCommentsLoaded = useAppSelector(getCommentsLoadedStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductAction(id));
      dispatch(fetchCommentsAction(id));
    }

    return () => {
      dispatch(dropProduct());
    };
  },[id, dispatch]);

  if (!product || !isProductLoaded || !isCommentsLoaded) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      <Header />
      {
        !hasProductError || !id ?
          <>
            <main>
              <h1 className="visually-hidden">Карточка: пользователь авторизован</h1>
              <div className="back-link">
                <div className="container">
                  <BackArrow />
                </div>
              </div>

              <ProductDetail product={product} />

              <CommentForm />

              <FilterSort />

              <CommentsList comments={comments}/>
            </main>
            <Footer />
          </> : <ErrorScreen />
      }
    </div>
  );
}

export default ProductPage;
