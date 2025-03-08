import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createProductController,
  getProductByIdController,
  getProductsController,
  patchProductController,
  deleteProductController

} from '../controllers/products.js';

const router = Router();

router.get('/', ctrlWrapper(getProductsController));
router.get('/:productId', ctrlWrapper(getProductByIdController));

router.post('/', ctrlWrapper(createProductController));

router.patch('/:productId', ctrlWrapper(patchProductController));

router.delete('/:productId', ctrlWrapper(deleteProductController));

export default router;
