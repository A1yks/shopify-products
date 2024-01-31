import { Schema, model } from 'mongoose';
import { IProduct } from './types';

const productSchema = new Schema<IProduct>(
    {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        bodyHtml: {
            type: String,
            required: true,
        },
        images: {
            type: [String],
            default: [],
        },
    },
    {
        collection: 'products',
    }
);

export default model<IProduct>('Product', productSchema);
