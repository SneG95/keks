import { TProduct } from './types/product';

export const getRandomProducts = (array: TProduct[], count: number) => {
  const products = [...array];

  for (let i = products.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [products[i], products[j]] = [products[j], products[i]];
  }

  return products.slice(0, count);
};

export const formatProductPrice = (price: number) => price.toLocaleString();
