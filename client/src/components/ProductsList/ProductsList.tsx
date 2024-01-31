import { BlockStack, Box, Divider, InlineError, InlineStack, Pagination, Spinner, Text } from '@shopify/polaris';
import Product from '../Product';
import useProducts from './hooks/useProducts';
import React from 'react';
import { extractError } from '@/utils/extractError';

function ProductsList() {
    const { products, page, isError, isFetching, error, hasNextPage, hasPreviousPage, totalPages, totalProducts, handleNextPage, handlePrevPage } =
        useProducts();

    if (isFetching) {
        return (
            <Box paddingBlockStart="300">
                <InlineStack align="center">
                    <Spinner size="small" />
                </InlineStack>
            </Box>
        );
    }

    if (isError) {
        return <InlineError message={extractError(error)} fieldID="productsFetchError" />;
    }

    return (
        <BlockStack gap="500">
            {totalProducts === 0 ? (
                <Text as="span" alignment="center" variant="bodyLg">
                    No products found.
                </Text>
            ) : (
                products.map(({ id, title, bodyHtml, images }, i) => (
                    <React.Fragment key={id}>
                        <Product title={title} imageSrc={images[0]} bodyHtml={bodyHtml} />
                        {i < products.length - 1 && <Divider />}
                    </React.Fragment>
                ))
            )}

            {totalPages > 1 && (
                <>
                    <Divider />
                    <InlineStack align="center">
                        <Pagination
                            hasPrevious={hasPreviousPage}
                            hasNext={hasNextPage}
                            onPrevious={handlePrevPage}
                            onNext={handleNextPage}
                            label={`${page}/${totalPages}`}
                        />
                    </InlineStack>
                </>
            )}
        </BlockStack>
    );
}

export default ProductsList;
