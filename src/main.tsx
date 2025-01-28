import { HomePizza } from '@pages/HomePizza'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Article } from 'pages/Article';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HomePizza />
      <Article />
    </QueryClientProvider>
  </StrictMode>
)
