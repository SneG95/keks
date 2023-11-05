import { TProductDetail } from '../../types/product';
import { formatProductPrice } from '../../utils';
import RatingList from '../rating-list/rating-list';

type ProductDetailProps = {
  product: TProductDetail;
}

function ProductDetail({product}: ProductDetailProps): JSX.Element {
  const {title, price, weight, rating} = product;

  return (
    <section className="item-details item-details--form-open">
      <div className="container">
        <div className="item-details__wrapper">
          <div className="item-details__top-wrapper">
            <h2 className="item-details__name">{title}</h2><span className="item-details__price">{`${formatProductPrice(price)} р`}</span>
          </div>
          <div className="item-details__weight-wrapper"><span className="item-details__weight">{`${formatProductPrice(weight)} грамм`}</span></div>
          <div className="item-details__bottom-wrapper">
            <div className="item-details__image-wrapper">
              <picture>
                <source type="image/webp" srcSet="img/content/lemon-pie.webp, img/content/lemon-pie@2x.webp 2x" />
                <img src="img/content/lemon-pie.jpg" srcSet="img/content/lemon-pie@2x.jpg 2x" width="241" height="245" alt="Чизкейк лимонный" />
              </picture><span className="item-details__label">Новинка</span>
            </div>
            <div className="item-details__review-wrapper">
              <RatingList rating={rating} isProductDetail/>
              <div className="item-details__text-wrapper"><span className="item-details__text">Цитрусовый десерт с тонким сливочным вкусом, лёгкой свежестью и низким содержанием калорий сд</span>
                <button className="item-details__more"><span className="visually-hidden">Читать полностью</span>
                  <svg width="27" height="17" aria-hidden="true">
                    <use xlinkHref="#icon-more"></use>
                  </svg>
                </button>
              </div>
              <div className="item-details__button-wrapper">
                <button className="item-details__like-button">
                  <svg width="45" height="37" aria-hidden="true">
                    <use xlinkHref="#icon-like"></use>
                  </svg><span className="visually-hidden">Понравилось</span>
                </button>
                <button className="btn btn--second" type="button">Отменить отзыв</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
