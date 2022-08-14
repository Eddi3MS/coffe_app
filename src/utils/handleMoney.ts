export function formatToNumber(value: string): number {
  return Number(value.replace(",", "."));
}

export function formatToString(value: number): string {
  return value.toFixed(2).replace(".", ",");
}
