import { Types } from 'mongoose';

export interface IProduct {
    _id: Types.ObjectId;
    id: string;
    title: string;
    bodyHtml: string;
    images: string[];
}
