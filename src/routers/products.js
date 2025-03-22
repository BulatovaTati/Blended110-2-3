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
import { isValidId } from '../middlewares/validateId.js';

const router = Router();

router.get('/', ctrlWrapper(getProductsController));
router.get('/:productId', isValidId, ctrlWrapper(getProductByIdController));

router.post(
  '/',
  validateBody(createProductSchema),
  ctrlWrapper(createProductController),
);

router.patch(
  '/:productId',
  isValidId,
  validateBody(updateProductSchema),
  ctrlWrapper(patchProductController),
);

router.delete('/:productId', isValidId, ctrlWrapper(deleteProductController));

export default router;
