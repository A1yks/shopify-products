export const GET_PRODUCTS_QUERY = `
    query getProducts($first: Int!, $cursor: String) {
        products(first: $first, after: $cursor) {
            edges {
                node {
                    id
                    title
                    bodyHtml
                    images(first: 1) {
                        nodes {
                            src
                        }
                    }
                }
                cursor
            }
            pageInfo {
                hasNextPage
            }
        }
    }
`;
