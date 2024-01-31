import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useProducts from './hooks/useProducts.ts';
import ProductsList from '.';
import { renderWithProviders } from '@/utils/test-utils.tsx';

jest.mock('./hooks/useProducts.ts');

describe('ProductsList', () => {
    it('renders spinner when fetching', () => {
        (useProducts as jest.Mock).mockReturnValue({
            isFetching: true,
        });

        act(() => {
            renderWithProviders(<ProductsList />);
        });

        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('renders error when there is an error', () => {
        (useProducts as jest.Mock).mockReturnValue({
            isError: true,
            error: new Error('An error occurred'),
        });

        act(() => {
            renderWithProviders(<ProductsList />);
        });

        expect(screen.getByText('An error occurred')).toBeInTheDocument();
    });

    it('renders products when there are products', () => {
        (useProducts as jest.Mock).mockReturnValue({
            products: [
                {
                    id: '1',
                    title: 'Product 1',
                    bodyHtml: '<p>Product 1 description</p>',
                    images: ['image1.jpg'],
                },
                {
                    id: '2',
                    title: 'Product 2',
                    bodyHtml: '<p>Product 2 description</p>',
                    images: ['image2.jpg'],
                },
            ],
        });

        act(() => {
            renderWithProviders(<ProductsList />);
        });

        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
    });

    it('renders pagination correctly', () => {
        (useProducts as jest.Mock).mockReturnValue({
            products: [],
            page: 1,
            isError: false,
            isFetching: false,
            error: null,
            hasNextPage: true,
            hasPreviousPage: false,
            totalPages: 5,
            totalProducts: 10,
            handleNextPage: jest.fn(),
            handlePrevPage: jest.fn(),
        });

        act(() => {
            renderWithProviders(<ProductsList />);
        });

        expect(screen.getByText('1/5')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Previous' })).toHaveClass('Polaris-Button--disabled');
    });
});
