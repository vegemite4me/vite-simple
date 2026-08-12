import { Code, Divider, List, Title } from "@mantine/core";

export const ProductInstructions = () => {
    return (
        <>
            <Title order={2}>Instructions</Title>

            <List type="ordered">
                <List.Item>Update this page to show a table of products.</List.Item>
                <List.Item>The list of products can be retrieved from <Code>https://dummyjson.com/products</Code></List.Item>
                <List.Item>
                    Each row will contain one product showing the following attributes:
                    <List type="unordered">
                        <List.Item>Title</List.Item>
                        <List.Item>Price</List.Item>
                        <List.Item>Tags</List.Item>
                        <List.Item>Number of reviews</List.Item>
                    </List>
                </List.Item>
            </List>
            <Divider my="md" />
        </>
    );
}