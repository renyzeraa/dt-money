import { twMerge } from "tailwind-merge"
import { formatarData, valorEmReais } from "../utils/formatter"
import { useTransactions } from "../hooks/useTransactions"

export function TransactionsTable() {
  const { transactions } = useTransactions()

  return (
    <div className="max-w-[1120px] mx-auto mt-16">
      <table className="w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            <th className="text-color-text text-left font-normal px-8 py-4 leading-6">Título</th>
            <th className="text-color-text text-left font-normal px-8 py-4 leading-6">Valor</th>
            <th className="text-color-text text-left font-normal px-8 py-4 leading-6">Categoria</th>
            <th className="text-color-text text-left font-normal px-8 py-4 leading-6">Data</th>
          </tr>
        </thead>

        <tbody className="text-color-text">
          {transactions.map(({ value, category, createdAt, title, id, type }) => {
            const isWithdraw = type === 'withdraw'
            return (
              <tr key={id} className="bg-shape-principal">
                <td className="border-none px-8 py-4 rounded-s text-color-title capitalize">{title}</td>
                <td className={twMerge("border-none px-8 py-4", isWithdraw ? 'text-red' : 'text-green')}>{isWithdraw ? '-' : ''} {valorEmReais(value)}</td>
                <td className="border-none px-8 py-4 capitalize">{category}</td>
                <td className="border-none px-8 py-4 rounded-e">{formatarData(createdAt)}</td>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    </div>
  )
}