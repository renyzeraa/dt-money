export function valorEmReais(valor: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

export function formatarData(data: string) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(data));
}