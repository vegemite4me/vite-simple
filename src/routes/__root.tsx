import { MantineProvider } from '@mantine/core'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import '@mantine/core/styles.css';
import { theme } from '../theme'
import { HeaderSimple } from '../components/header/HeaderSimple';

const RootLayout = () => (
    <>
        <MantineProvider theme={theme}>
            <HeaderSimple />
            <Outlet />
            {/* <TanStackRouterDevtools /> */}
        </MantineProvider>
    </>
)

export const Route = createRootRoute({ component: RootLayout })