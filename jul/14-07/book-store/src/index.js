import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CurrencyProvider } from "./context/currencyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CurrencyProvider>
    <App />
  </CurrencyProvider>
);
