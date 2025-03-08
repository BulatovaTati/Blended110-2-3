import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createProductController,
  getProductByIdController,
  getProductsController,
  patchProductController,
  deleteProductController,
} from '../controllers/products.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createProductSchema,
  updateProductSchema,
} from '../validation/products.js';

const router = Router();

router.get('/', ctrlWrapper(getProductsController));
router.get('/:productId', ctrlWrapper(getProductByIdController));

router.post(
  '/',
  validateBody(createProductSchema),
  ctrlWrapper(createProductController),
);

router.patch(
  '/:productId',
  validateBody(updateProductSchema),
  ctrlWrapper(patchProductController),
);

router.delete('/:productId', ctrlWrapper(deleteProductController));

export default router;
