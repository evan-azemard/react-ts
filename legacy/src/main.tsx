import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from '@pages/HomePage'
import { ArticleList } from 'components/ArticleList'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
    <ArticleList />
  </StrictMode>,
)
