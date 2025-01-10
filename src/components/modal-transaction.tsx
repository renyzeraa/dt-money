import Modal from 'react-modal'
import closeSVG from '../assets/close.svg'
import incomeSVG from '../assets/income.svg'
import outcomeSVG from '../assets/outcome.svg'

interface ModalTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root')

export function ModalTransaction({ isOpen = false, onRequestClose }: ModalTransactionProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: '#0000008f',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          padding: '64px 48px',
          width: '100%',
          maxWidth: '576px',
          position: 'relative',
        }
      }}
    >
      <button
        type='button'
        onClick={onRequestClose}
        className="absolute top-1 right-1 cursor-pointer p-4 border-none bg-transparent hover:brightness-50 transition-all"
        title='Fechar'
      >
        <img src={closeSVG} alt="Botão de fechar" />
      </button>
      <form>
        <h2 className='text-color-title text-2xl mb-8'>Cadastrar Transação</h2>

        <input className='w-full px-6 h-16 rounded border border-[#d7d7d7] bg-[#e7e9ee] font-normal text-base placeholder:text-color-text' type="text" name="titulo" id="" placeholder='Título' />
        <input className='w-full px-6 h-16 rounded border border-[#d7d7d7] bg-[#e7e9ee] font-normal text-base placeholder:text-color-text mt-4' type="number" name="preco" id="" placeholder='Preço' />

        <div className='my-4 flex gap-2 items-center'>
          <button className='hover:border-[#aaa] transition-colors py-5 border border-[#d7d7d7] flex justify-center rounded bg-transparent gap-4 flex-1 items-center' type='button'>
            <img className='size-5' src={incomeSVG} alt="Entrada" />
            <span className='text-base inline-block ml-4 text-color-title'>Entrada</span>
          </button>
          <button className='hover:border-[#aaa] transition-colors py-5 border border-[#d7d7d7] flex justify-center rounded bg-transparent gap-4 flex-1 items-center' type='button'>
            <img className='size-5' src={outcomeSVG} alt="Saída" />
            <span className='text-base inline-block ml-4 text-color-title'>Saída</span>
          </button>
        </div>

        <input className='w-full px-6 h-16 rounded border border-[#d7d7d7] bg-[#e7e9ee] font-normal text-base placeholder:text-color-text mt-4' type="text" name="categoria" id="" placeholder='Categoria' />

        <button className='w-full px-6 h-16 font-semibold bg-green text-white rounded border-none text-base mt-6 hover:brightness-90 transition-all' type="submit">Cadastrar</button>
      </form>
    </Modal>
  )
}