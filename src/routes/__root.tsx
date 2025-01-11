import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AppShell, createTheme, MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';

const theme = createTheme({});

// Create a client
const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => {
    return (
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme}>
          <DatesProvider settings={{ timezone: 'UTC' }}>
            <AppShell>
              <AppShell.Header></AppShell.Header>
              <AppShell.Main>
                <Outlet />
                {import.meta.env.mode === 'development' && <TanStackRouterDevtools />}
              </AppShell.Main>
            </AppShell>
          </DatesProvider>
        </MantineProvider>
      </QueryClientProvider>
    );
  },
});
