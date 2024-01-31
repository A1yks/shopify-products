import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetProductsReq } from '@backend/controllers/products/types';
import { GetProductsRes } from './types';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.VITE_API_URL }),
    endpoints: (build) => ({
        getProducts: build.query<API.Response<GetProductsRes>, GetProductsReq>({
            query: (params) => ({
                url: 'products',
                params,
            }),
        }),
    }),
});

export const { useGetProductsQuery } = api;
