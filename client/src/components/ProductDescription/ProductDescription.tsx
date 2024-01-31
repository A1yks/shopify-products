import truncateText from '@/utils/truncateText';
import styles from './Product.module.css';
import { Button } from '@shopify/polaris';
import useProductDesc from './hooks/useProductDesc';

export type ProductDescriptionProps = {
    bodyHtml: string;
    truncLength?: number;
};

const TRUNCATE_LENGTH = 150;

function ProductDescription({ bodyHtml, truncLength = TRUNCATE_LENGTH }: ProductDescriptionProps) {
    const { isFullInfoOpened, toggleFullInfo } = useProductDesc();
    const toggleButtonText = isFullInfoOpened ? 'Hide full info' : 'Read full info';

    return (
        <>
            <div
                dangerouslySetInnerHTML={{ __html: isFullInfoOpened ? bodyHtml : truncateText(bodyHtml, truncLength) }}
                className={styles.description}
            />
            {bodyHtml.length > truncLength && (
                <div>
                    <Button onClick={toggleFullInfo}>{toggleButtonText}</Button>
                </div>
            )}
        </>
    );
}

export default ProductDescription;
