import { MantineProvider } from '@mantine/core'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { theme } from '../theme'

const RootLayout = () => (
    <>
        <MantineProvider theme={theme}>
            {/* <HeaderSimple /> */}
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>{' '}
                <Link to="/products" className="[&.active]:font-bold">
                    Products
                </Link>
            </div>
            <hr />
            <Outlet />
            {/* <TanStackRouterDevtools /> */}
        </MantineProvider>
    </>
)

export const Route = createRootRoute({ component: RootLayout })