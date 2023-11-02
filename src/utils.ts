import { TProduct } from './types/product';
import { TComment } from './types/comment';
import { DATE_COMMENT_FORMAT, DATE_COMMENT_META_FORMAT } from './consts';
import dayjs from 'dayjs';

export const getRandomProducts = (array: TProduct[], count: number) => {
  const products = [...array];

  for (let i = products.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [products[i], products[j]] = [products[j], products[i]];
  }

  return products.slice(0, count);
};

export const formatProductPrice = (price: number) => price.toLocaleString();

export const formatCommentDate = (commentDate: TComment['isoDate']) => commentDate ? dayjs(commentDate).format(DATE_COMMENT_FORMAT) : '';
export const formatCommentMetaDate = (commentDate: TComment['isoDate']) => commentDate ? dayjs(commentDate).format(DATE_COMMENT_META_FORMAT) : '';
