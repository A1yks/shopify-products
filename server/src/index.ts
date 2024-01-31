import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

import checkEnv from './utils/checkEnv';

checkEnv();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import productsRouter from './routes/products';
import errorsHandler from './utils/errorsHandler';
import { saveProductsFromShopify } from './services/products';

const port = process.env.PORT || 3000;
const app = express();

(async () => {
    await mongoose.connect(process.env.DB_CONNECT);

    app.use(express.static(path.resolve(__dirname, 'client')));

    console.log('Connected to DB');

    await saveProductsFromShopify();

    console.log('Products saved to DB');

    app.use(cors());

    app.use('/api/products', productsRouter);

    app.use(errorsHandler);

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
})();
