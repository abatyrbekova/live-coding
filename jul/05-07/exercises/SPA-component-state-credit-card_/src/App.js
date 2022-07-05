import React from "react";

// Components
import CreditCard from "./components/CreditCard";

const creditCardData = {
  customerName: "Maria Gonzalez",
  expirationDate: "12/24",
  creditCardNumber: "12345678",
  bank: "Sparkasse",
};

function App() {
  return (
    <div className="App">
      <CreditCard creditCardDetails={creditCardData} />
    </div>
  );
}

export default App;
