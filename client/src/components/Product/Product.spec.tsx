import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import Product from '.';
import { renderWithProviders } from '@/utils/test-utils';
import styles from './Product.module.css';

describe('Product', () => {
    it('changes the button text when clicked', () => {
        renderWithProviders(<Product title="Test Product" bodyHtml="<p>Test Description</p>" imageSrc="test.jpg" truncLength={3} />);

        fireEvent.click(screen.getByText('Read full info'));

        expect(screen.getByText('Hide full info')).toBeInTheDocument();
    });

    it('toggles the description length when the button is clicked', () => {
        const truncLength = 3;
        const text = 'Test Description';
        const { container } = renderWithProviders(
            <Product title="Test Product" bodyHtml={`<p>${text}</p>`} imageSrc="test.jpg" truncLength={truncLength} />
        );

        expect(container.querySelector(`.${styles.description}`)?.textContent).toHaveLength(truncLength);

        fireEvent.click(screen.getByText('Read full info'));

        expect(container.querySelector(`.${styles.description}`)?.textContent).toHaveLength(text.length);
    });
});
