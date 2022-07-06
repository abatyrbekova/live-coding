import React from "react";
import Product from "./Product";
import "./ShowProducts.css";

export default function ShowProducts(props) {
  return (
    <div className="container">
      {props.products.map((item, i) => (
        <Product
          index={i}
          handleDelete={props.handleDelete}
          handleSold={props.handleSold}
          key={i}
          product={item}
        />
      ))}
    </div>
  );
}
