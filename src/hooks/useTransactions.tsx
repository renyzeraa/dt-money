import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from 'react'
import { api } from "../services/api";

interface TransactionsProps {
  value: number
  category: string
  title: string
  type: 'deposit' | 'withdraw'
  createdAt: string
  id: number
}

export type TransactionsInput = Omit<TransactionsProps, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: TransactionsProps[]
  createTransaction: (transaction: TransactionsInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  useEffect(() => {
    api.get('/transactions').then(response => {
      setTransactions(response.data.transactions)
    })
  }, [])

  async function createTransaction(transactionInput: TransactionsInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data
    setTransactions([...transactions, transaction])
  }

  const transactionValue = {
    transactions,
    createTransaction
  }

  return (
    <TransactionsContext.Provider value={transactionValue}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}