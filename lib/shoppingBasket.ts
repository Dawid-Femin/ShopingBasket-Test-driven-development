export const validateCurrency = (
    value: number,
    symbol?: string,
  ) => {
    return `${symbol || '$'}${value.toFixed(2)}`
  }