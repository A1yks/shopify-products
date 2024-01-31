import Joi from 'joi';
import { GetProductsReq } from './types';

export const getProductsSchema = {
    query: Joi.object<GetProductsReq>({
        page: Joi.number(),
        limit: Joi.number(),
    }),
};
