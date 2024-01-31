import express, { RequestHandler } from 'express';
import { ValidationOptions } from 'joi';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            SHOPIFY_ACCESS_TOKEN: string;
            SHOP: string;
            DB_CONNECT: string;
        }
    }

    namespace Server {
        export type ResponseBody<T = unknown> = { data: T; error?: never } | { error: string; data?: never };

        export interface Request<Body = unknown, Params = unknown, QueryParams = unknown>
            extends express.Request<Params, unknown, unknown, QueryParams> {
            body: Body;
        }

        export type Response<T = unknown> = express.Response<ResponseBody<T>>;
    }
}

declare module 'express-validation' {
    function validate<Params, ResBody, ReqBody, ReqQuery>(
        schema: schema,
        options?: EvOptions,
        joiRoot?: ValidationOptions
    ): RequestHandler<Params, ResBody, ReqBody, ReqQuery>;
}

export {};
