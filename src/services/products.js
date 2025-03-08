import { ProductModel } from '../db/models/products.js';

export const getProducts = async () => {
  const products = await ProductModel.find();
  return products;
};
