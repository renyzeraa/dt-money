import incomeSvg from '../assets/income.svg'
import outcomeSvg from '../assets/outcome.svg'
import totalSvg from '../assets/total.svg'

export function Summary() {
  return (
    <section className='flex justify-between items-center gap-x-8 -mt-28'>
      <div className='px-[32px] text-color-title py-[24px] rounded flex-1 bg-white'>
        <header className='flex justify-between items-center mb-4'>
          <p className='text-base '>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong className='text-4xl font-medium'>
          R$ 1.200,00
        </strong>
      </div>
      <div className='px-[32px] text-color-title py-[24px] rounded flex-1 bg-white'>
        <header className='flex justify-between items-center mb-4'>
          <p className='text-base'>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </header>
        <strong className='text-4xl font-medium'>
          - R$ 300,00
        </strong>
      </div>
      <div className='bg-green text-white px-[32px] py-[24px] rounded flex-1'>
        <header className='flex justify-between items-center mb-4'>
          <p className='text-base'>Total</p>
          <img src={totalSvg} alt="Total" />
        </header>
        <strong className='text-4xl font-medium'>
          R$ 900,00
        </strong>
      </div>
    </section>
  )
}