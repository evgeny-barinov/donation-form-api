export default {
  currencies: {
    USD: { name: "US Dollar", code: "USD", symbol: "$", rate: 1 },
    EUR: { name: "Euro", code: "EUR", symbol: "€", rate: 0.897597 },
    GBP: { name: "British Pound", code: "GBP", symbol: "£", rate: 0.81755 },
    RUB: { name: "Russian Ruble", code: "RUB", symbol: "₽", rate: 63.461993 }
  },
  presets: [40, 100, 200, 1000, 2500, 5000]
}

export const API_URL = process.env.VUE_APP_API_URL || "http://localhost:3000/";
