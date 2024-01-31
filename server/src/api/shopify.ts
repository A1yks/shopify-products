import axios from 'axios';

const shopifyApi = axios.create({
    baseURL: `https://${process.env.SHOP}.myshopify.com/admin`,
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
    },
});

export default shopifyApi;
