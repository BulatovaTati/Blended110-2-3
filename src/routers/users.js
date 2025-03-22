import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerController } from '../controllers/users.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema } from '../validation/users.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerController),
);

export default router;
