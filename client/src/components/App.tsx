import { BlockStack, Box, Card, Divider, Text } from '@shopify/polaris';
import ProductsList from './ProductsList';
import TotalResults from './TotalResults';

function App() {
    return (
        <Box maxWidth="560px" width="100%">
            <Card padding="600">
                <BlockStack gap="300">
                    <Text as="h3" variant="headingLg">
                        Products
                    </Text>
                    <Divider />

                    <TotalResults />
                    <Divider />

                    <ProductsList />
                </BlockStack>
            </Card>
        </Box>
    );
}

export default App;
