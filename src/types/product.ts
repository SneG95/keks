import { CategoryProduct, TypeProduct } from '../consts';

export type TProduct = {
  id: string;
  title: string;
  category: CategoryProduct;
  type: TypeProduct;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
}

export type TProductDetail = {
  id: string;
  title: string;
  category: CategoryProduct;
  type: TypeProduct;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
  description: string;
  images: [string];
  weight: number;
  rating: number;
  reviewCount: number;
}
