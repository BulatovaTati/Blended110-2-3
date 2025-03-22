import { ProductModel } from '../db/models/products.js';

export const getProducts = async (params) => {
  const { category, minPrice, maxPrice } = params;

  const products = ProductModel.find();

  if (category) {
    products.where('category').equals(category);
  }

  if (minPrice) {
    products.where('price').gte(minPrice);
  }

  if (maxPrice) {
    products.where('price').lte(maxPrice);
  }

  return await products;
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

export const deleteProduct = async (productId) => {
  const product = await ProductModel.findOneAndDelete({ _id: productId });
  return product;
};
