import { TProduct, TProductDetail } from './types/product';
import { TComment } from './types/comment';
import { TCategory } from './types/category';
import {
  DATE_COMMENT_FORMAT,
  DATE_COMMENT_META_FORMAT,
  CategoryProductRu,
  CategoryProduct,
  TypeProduct,
  TypeProductRu,
  NAME_REGEXP,
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
  ProductsDeclination
} from './consts';
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

export const transformUpperCaseFirst = (str: string) => {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
};

export const getCategoryNames = (categories: TCategory[]) => {
  const namesCategory: CategoryProduct[] = [];
  categories.map((item) => namesCategory.push(item.category));
  return namesCategory;
};

export const translateCategoryToRu = (category: CategoryProduct) => {
  const upperCategory = transformUpperCaseFirst(category);
  const translatedCategory = Object.entries(CategoryProductRu).find(([name]) => name === upperCategory);
  return translatedCategory ? translatedCategory[1] : '';
};

export const translateCategoryToEng = (category: CategoryProductRu) => Object.entries(CategoryProductRu).filter((item) => item[1] === category)[0][0].toLowerCase();

export const getCategoryTypes = (category: TCategory['category'] | null, categories: TCategory[]) => {
  if(category === null) {
    return [];
  }
  const currentCategory = categories.find((item) => item.category === category);
  return currentCategory ? currentCategory.types : [];
};

export const translateTypeToRu = (type: TypeProduct) => {
  const upperType = Object.entries(TypeProduct).find((item) => item[1] === type);
  if (!upperType) {
    return;
  }
  const translatedType = Object.entries(TypeProductRu).find(([name]) => name === upperType[0]);
  return translatedType ? translatedType[1] : '';
};

export const getProductsByCategory = (products: TProduct[], category: CategoryProduct) => products.filter((product) => product.category === category);

export const getProductsByTypes = (products: TProduct[], types: TypeProduct[]) => products.filter((product) => types.includes(product.type));

export const checkNameValid = (name: string) => NAME_REGEXP.test(name);

export const checkEmailValid = (email: string) => EMAIL_REGEXP.test(email);

export const checkPasswordValid = (password: string) => PASSWORD_REGEXP.test(password);

export const getSumPriceProducts = (products: TProductDetail[]) => {
  let sum = 0;
  if (products.length > 0) {
    const prices: number[] = [];
    products.map((product) => prices.push(product.price));
    sum = prices.reduce((a, b) => a + b, 0);
  }

  return sum;
};

export const getNoun = (count: number) => {
  count %= 100;
  if (count >= 5 && count <= 20) {
    return ProductsDeclination.Five;
  }
  count %= 10;
  if (count === 1) {
    return ProductsDeclination.One;
  }
  if (count >= 2 && count <= 4) {
    return ProductsDeclination.Two;
  }
  return ProductsDeclination.Five;
};

