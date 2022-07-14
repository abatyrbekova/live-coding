import { createContext, useState } from "react";

const CurrencyContext = createContext(null);

const CURRENCIES = {
  Euro: {
    code: "EUR",
    label: "Euro",
    conversionRate: 1, // base conversion rate
  },
  Usd: {
    code: "USD",
    label: "US Dollar",
    conversionRate: 1.19,
  },
};

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(CURRENCIES.Euro);
  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, CURRENCIES }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export { CurrencyContext, CurrencyProvider };
