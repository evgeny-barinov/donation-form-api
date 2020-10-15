export default (currency, locale = 'en-US') => {
  const parts = new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).formatToParts(1);
  const first = parts[0];
  return first.value || currency;
}
