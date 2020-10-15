import config from '../config'

export default (amount, currency, locale = 'en-US') => {
  const currencyData = config.currencies[currency];
  if (!currencyData) {
    return currency
  }
  return currencyData.symbol + amount.toLocaleString({
    locale,
    maximumFractionDigits: 0
  });
}
