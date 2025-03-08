import createHttpError from 'http-errors';
import { getProductById, getProducts } from '../services/products.js';

export const getProductsController = async (req, res) => {
  const products = await getProducts();

  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const productById = await getProductById(productId);

  if (!productById) {
    throw createHttpError(404, 'Product not found');
  }

  res.json({
    status: 200,
    message: ` Successfully found product with id ${productId}!`,
    data: productById,
  });
};
