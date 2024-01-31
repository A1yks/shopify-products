import { IProduct } from '@backend/models/Product/types';

export type GetProductsRes = {
    products: IProduct[];
    count: number;
};
