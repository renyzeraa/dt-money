import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="bg-blue">
      <div className="mx-auto max-w-[1120px] flex justify-between items-center pt-8 px-4 pb-40">
        <img src={logo} alt="logo dt money" />
        <button type='button' className="font-poppins text-base transition-colors rounded border-none bg-blue-light hover:bg-opacity-70 px-8 h-12 text-shape-principal font-semibold">Nova Transação</button>
      </div>
    </header>
  )
}