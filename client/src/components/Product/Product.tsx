import { BlockStack, Text, InlineStack } from '@shopify/polaris';
import CanvasThumbnail from '../CanvasThumbnail';
import ProductDescription from '../ProductDescription';

export type ProductProps = {
    title: string;
    bodyHtml: string;
    imageSrc: string;
    truncLength?: number;
};

function Product({ title, bodyHtml, imageSrc, truncLength }: ProductProps) {
    return (
        <BlockStack gap="200">
            <InlineStack gap="400" blockAlign="center" wrap={false}>
                <CanvasThumbnail source={imageSrc} />
                <Text as="span" fontWeight="semibold" variant="bodyLg">
                    {title}
                </Text>
            </InlineStack>
            <ProductDescription bodyHtml={bodyHtml} truncLength={truncLength} />
        </BlockStack>
    );
}

export default Product;
