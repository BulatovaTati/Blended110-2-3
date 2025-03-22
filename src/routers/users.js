import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerController, loginUserController } from '../controllers/users.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema, loginUserSchema} from '../validation/users.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerController),
);

router.post('/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),);

export default router;
