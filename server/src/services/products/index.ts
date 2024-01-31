import shopifyApi from '@/api/shopify';
import Product from '@/models/Product';
import { IProduct } from '@/models/Product/types';
import { ShopifyProduct, ShopifyResponse } from './types';
import { GET_PRODUCTS_QUERY } from './queries';

const MAX_SHOPIFY_PRODUCTS = 250;

export async function getProducts(page = 1, limit = 4) {
    const [count, products] = await Promise.all([
        Product.countDocuments(),
        Product.find()
            .skip((page - 1) * limit)
            .limit(limit),
    ]);

    return { count, products };
}

export async function saveProductsFromShopify() {
    const totalProducts = await Product.countDocuments();
    const isCachingNeeded = totalProducts === 0;

    if (isCachingNeeded) {
        const products = await fetchShopifyProducts();

        await saveProductsToDB(products);
    }
}

async function fetchShopifyProducts() {
    const products: ShopifyProduct[] = [];
    let cursor: string | null = null;

    // Get all products from shopify
    do {
        const response = await sendQuery(GET_PRODUCTS_QUERY, { first: MAX_SHOPIFY_PRODUCTS, cursor });

        if (isShopifyResponse(response.data)) {
            const {
                data: {
                    products: { edges, pageInfo },
                },
            } = response.data;

            cursor = pageInfo.hasNextPage ? edges[edges.length - 1].cursor : null;

            products.push(...edges);
        } else {
            throw new Error('Invalid response from Shopify');
        }
    } while (cursor !== null);

    return products;
}

async function sendQuery(query: string, variables?: Record<string, unknown>) {
    return shopifyApi('/api/2024-01/graphql.json', { method: 'POST', data: { query, variables } });
}

function isShopifyResponse(resp: unknown): resp is ShopifyResponse {
    const res = resp as ShopifyResponse;

    return (
        res.data !== undefined &&
        res.data.products !== undefined &&
        Array.isArray(res.data.products.edges) &&
        res.data.products.pageInfo !== undefined
    );
}

async function saveProductsToDB(products: ShopifyProduct[]) {
    const productsToSave: Omit<IProduct, '_id'>[] = products.map(({ node }) => ({
        id: node.id,
        title: node.title,
        description: node.bodyHtml,
        bodyHtml: node.bodyHtml,
        images: node.images.nodes.map(({ src }) => src),
    }));

    await Product.insertMany(productsToSave);
}
