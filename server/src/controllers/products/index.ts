import { NextFunction } from 'express';
import { GetProductsReq } from './types';
import * as ProductsService from '@/services/products';

export async function getProducts(req: Server.Request<void, void, GetProductsReq>, res: Server.Response, next: NextFunction) {
    try {
        const { page, limit } = req.query;
        const products = await ProductsService.getProducts(page, limit);

        res.status(200).json({ data: products });
    } catch (err) {
        next(err);
    }
}
