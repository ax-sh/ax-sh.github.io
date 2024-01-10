import { PropsWithChildren } from 'react';

import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function QueryClientProviderWrapper({ children }: PropsWithChildren) {
  return <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>;
}
describe('Verify home page', () => {
  it('should have link to past work', () => {
    render(<Home />, { wrapper: QueryClientProviderWrapper });

    // const link = 'https://bit.ly/4418VWz';
    const workLink = screen.getByRole('link', { name: /works/gi });
    expect(workLink).toBeInTheDocument();
    expect(workLink.attributes);
  });
});
