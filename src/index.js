import React, { StrictMode } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { createRoot } from 'react-dom/client';

import App from './App';

const queryClient = new QueryClient();
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
