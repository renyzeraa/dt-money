export function TransitionsTable() {
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
          <tr className="bg-shape-principal">
            <td className="border-none px-8 py-4 rounded-s text-color-title">Desenvolvimento de Site</td>
            <td className="border-none px-8 py-4 text-green">R$ 497,00</td>
            <td className="border-none px-8 py-4">Venda</td>
            <td className="border-none px-8 py-4 rounded-e">05/01/2025</td>
          </tr>
          <tr className="bg-shape-principal">
            <td className="border-none px-8 py-4 rounded-s text-color-title">Curso de Java</td>
            <td className="border-none px-8 py-4 text-red">- R$ 297,00</td>
            <td className="border-none px-8 py-4">Curso</td>
            <td className="border-none px-8 py-4 rounded-e">05/11/2024</td>
          </tr>
          <tr className="bg-shape-principal">
            <td className="border-none px-8 py-4 rounded-s text-color-title">Curso de Flutter</td>
            <td className="border-none px-8 py-4 text-red">- R$ 997,00</td>
            <td className="border-none px-8 py-4">Curso</td>
            <td className="border-none px-8 py-4 rounded-e">25/12/2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}