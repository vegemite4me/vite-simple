import { Burger, Container, Divider, Drawer, Group, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderSimple.module.css';
import { Link } from '@tanstack/react-router';

const links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/products', label: 'Products' },
];

export function HeaderSimple() {
    const [opened, { toggle, close }] = useDisclosure(false);

    const items = links.map((link) => (
        <Link
            to={link.link}>
            {link.label}
        </Link >
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <MantineLogo size={28} />
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="xs"
                    size="sm"
                    aria-label="Toggle navigation"
                />
            </Container>

            <Drawer
                opened={opened}
                onClose={close}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="xs"
                zIndex={1000000}
            >
                <ScrollArea h="calc(100vh - 80px" mx="-md">
                    <Divider my="sm" />
                    {items}
                </ScrollArea>
            </Drawer>
        </header>
    );
}