import React from "react";

// Styles
import { Button } from "./styled";

export default function PrimaryButton({ text, handleClick, color, fullWidth }) {
  return (
    <Button fullWidth={fullWidth} color={color} onClick={handleClick}>
      {text}
    </Button>
  );
}
