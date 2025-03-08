import createHttpError from 'http-errors';
import {
  createProduct,
  getProductById,
  getProducts,
  patchProduct,
} from '../services/products.js';

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

export const createProductController = async (req, res) => {
  const newProduct = await createProduct(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: newProduct,
  });
};

export const patchProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await patchProduct(productId, req.body);

  if (!product) throw createHttpError(404, 'Product not found');

  res.json({
    status: 200,
    message: 'Successfully patched a product!',
    data: product
  });
};
