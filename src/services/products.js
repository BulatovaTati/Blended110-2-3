import { ProductModel } from '../db/models/products.js';

export const getProducts = async () => {
  const products = await ProductModel.find();
  return products;
};

export const getProductById = async (productId) => {
  const product = await ProductModel.findById(productId);
  return product;
};

export const createProduct = async (body) => {
  const newProduct = await ProductModel.create(body);
  return newProduct;
};

export const patchProduct = async (productId, payload) => {
  const { value } = await ProductModel.findOneAndUpdate(
    {
      _id: productId,
    },
    payload,
    { new: true, includeResultMetadata: true },
  );
  return value;
};
