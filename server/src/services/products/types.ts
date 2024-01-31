export type ShopifyProduct = {
    node: {
        id: string;
        title: string;
        bodyHtml: string;
        images: {
            nodes: Array<{
                src: string;
            }>;
        };
    };
    cursor: string;
};

export type ShopifyResponse = {
    data: {
        products: {
            edges: Array<ShopifyProduct>;
            pageInfo: {
                hasNextPage: boolean;
            };
        };
    };
};
