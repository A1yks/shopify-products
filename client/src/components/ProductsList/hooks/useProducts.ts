import { useState } from 'react';
import { useGetProductsQuery } from '@/store/api';

export const PRODUCTS_PER_PAGE = 4;

function useProducts() {
    const [page, setPage] = useState(1);
    const { data: productsResponse, isFetching, isError, error } = useGetProductsQuery({ page, limit: PRODUCTS_PER_PAGE });
    const products = productsResponse?.data.products || [];
    const totalProducts = productsResponse?.data.count || 0;
    const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
    const hasPreviousPage = page > 1;
    const hasNextPage = page * PRODUCTS_PER_PAGE < totalProducts;

    function handleNextPage() {
        setPage((prevPage) => prevPage + 1);
    }

    function handlePrevPage() {
        setPage((prevPage) => prevPage - 1);
    }

    return {
        products,
        totalPages,
        totalProducts,
        hasPreviousPage,
        hasNextPage,
        isFetching,
        isError,
        error,
        page,
        handleNextPage,
        handlePrevPage,
    };
}

export default useProducts;
