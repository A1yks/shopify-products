import { Router } from 'express';
import { validate } from 'express-validation';
import * as ProductsController from '@/controllers/products';
import { getProductsSchema } from '@/controllers/products/validation';

const router = Router();

router.get('/', validate(getProductsSchema), ProductsController.getProducts);

export default router;
