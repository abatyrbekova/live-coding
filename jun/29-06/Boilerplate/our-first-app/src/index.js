import React from "react";
// ! Version 18
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";

import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ! Version 18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ! React version 16
// const text = (
//   <div>
//     More text
//     <span>This is my span</span>
//   </div>
// );

const text = <span>My span</span>;

ReactDOM.render(text, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
