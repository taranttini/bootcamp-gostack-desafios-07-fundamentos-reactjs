// TODO
const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export default formatValue;

//export const formatDate = (date: Date): string =>
//  Intl.DateTimeFormat('pt-BR').format(date);
