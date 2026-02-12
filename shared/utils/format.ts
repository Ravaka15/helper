export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("fr-FR").format(date);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}
