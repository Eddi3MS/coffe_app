export function formatToNumber(value: string): number {
  return Number(value.replace(",", "."));
}

export function formatToString(value: number): string {
  return value.toString().replace(".", ",");
}

export function calcTotal(price: string, quantity: number): number {
  return formatToNumber(price) * quantity;
}
