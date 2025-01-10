import incomeSvg from '../assets/income.svg'
import outcomeSvg from '../assets/outcome.svg'
import totalSvg from '../assets/total.svg'
import { useTransactions } from '../hooks/useTransactions'
import { valorEmReais } from '../utils/formatter'

export function Summary() {
  const { transactions } = useTransactions()
  const { deposit, total, withdraw } = transactions.reduce((acc, curr) => {
    acc.deposit += curr.type === 'deposit' ? curr.value : 0
    acc.withdraw += curr.type === 'withdraw' ? curr.value : 0
    acc.total = acc.deposit - acc.withdraw
    return acc;
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0
  })

  return (
    <section className='flex justify-between items-center gap-x-8 -mt-28'>
      <div className='px-[32px] text-color-title py-[24px] rounded flex-1 bg-white'>
        <header className='flex justify-between items-center mb-4'>
          <p className='text-base '>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong className='text-4xl font-medium'>
          {valorEmReais(deposit)}
        </strong>
      </div>
      <div className='px-[32px] text-color-title py-[24px] rounded flex-1 bg-white'>
        <header className='flex justify-between items-center mb-4'>
          <p className='text-base'>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </header>
        <strong className='text-4xl font-medium'>
          - {valorEmReais(withdraw)}
        </strong>
      </div>
      <div className='bg-green text-white px-[32px] py-[24px] rounded flex-1'>
        <header className='flex justify-between items-center mb-4'>
          <p className='text-base'>Total</p>
          <img src={totalSvg} alt="Total" />
        </header>
        <strong className='text-4xl font-medium'>
          {valorEmReais(total)}
        </strong>
      </div>
    </section>
  )
}