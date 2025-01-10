import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import { App } from './app.tsx'
import './index.css'

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        { id: 1, title: 'frutas', value: 24, type: 'withdraw', category: 'mercado', createdAt: new Date('2024-07-02 09:00:00') },
        { id: 2, title: 'landing page', value: 1000, type: 'deposit', category: 'serviço', createdAt: new Date('2023-04-12 17:00:00') },
      ],
    })
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  },
})

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
