import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createServer } from 'miragejs'
import { App } from './app.tsx'
import './index.css'

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        { id: 1, description: 'Rent', amount: 1200, type: 'expense', category: 'Food' },
        { id: 2, description: 'Groceries', amount: 500, type: 'income', category: 'Sweets' },
        { id: 3, description: 'Phone bill', amount: 200, type: 'expense', category: 'Phone' },
      ]
    })
  },
})

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
