import { useGetProductsQuery } from '@/store/api';
import { Spinner, Text } from '@shopify/polaris';
import { PRODUCTS_PER_PAGE } from '../ProductsList/hooks/useProducts';

function TotalResults() {
    const { data: productsResponse, isLoading } = useGetProductsQuery({ page: 1, limit: PRODUCTS_PER_PAGE });
    const totalProducts = productsResponse?.data.count ?? 0;

    if (isLoading) {
        return (
            <div>
                <Spinner size="small" />
            </div>
        );
    }

    return (
        <Text as="span" variant="headingMd">
            {totalProducts} {totalProducts === 1 ? 'result' : 'results'}
        </Text>
    );
}

export default TotalResults;
