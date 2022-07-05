import React from "react";

export default function CreditCard(props) {
  console.log(props);
  return (
    <div>
      <p>{props.creditCardDetails.customerName}</p>
      <p>{props.creditCardDetails.expirationDate}</p>
      <p>{props.creditCardDetails.creditCardNumber}</p>
      <p>{props.creditCardDetails.bank}</p>
    </div>
  );
}
