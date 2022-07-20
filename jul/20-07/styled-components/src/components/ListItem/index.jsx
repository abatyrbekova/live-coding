import React from "react";

// We had to pass the classname to be able to style it with styled components
export default function ListItem({ className }) {
  return <li className={className}>ListItem</li>;
}
