import React from "react";
import { useContext } from "react";
import { Context } from "./context/countContext";

export default function Header() {
const {count} = useContext(Context);

  return (
    <div style={{ height: "70px", width: "100%", border: "1px solid" }}>
      hello from Header
      <h2> count: {count} </h2>
    </div>
  );
}
