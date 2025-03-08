import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createProductController,
  getProductByIdController,
  getProductsController,
} from '../controllers/products.js';

const router = Router();

router.get('/products', ctrlWrapper(getProductsController));
router.get('/products/:productId', ctrlWrapper(getProductByIdController));
router.post('/products', ctrlWrapper(createProductController));

export default router;
