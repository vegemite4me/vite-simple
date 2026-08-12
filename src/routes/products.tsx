import { Button, Collapse, Text, Title } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router'
import { ProductInstructions } from '../components/ProductInstructions';
import { useDisclosure } from '@mantine/hooks';

export const Route = createFileRoute('/products')({
    component: RouteComponent,
})

function RouteComponent() {
    const [expanded, { toggle }] = useDisclosure(false);
    return (
        <div>
            <Title order={1}>Products</Title>
            <Button onClick={toggle}>{expanded ? 'Hide' : 'Show'} instructions</Button>
            <Collapse expanded={expanded}>
                <ProductInstructions />
            </Collapse>
            <Title order={2}>Table of Products</Title>
            <Text>Create the table here:</Text>
        </div>
    );
}
