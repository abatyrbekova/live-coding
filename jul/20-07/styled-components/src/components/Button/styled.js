import styled from "styled-components";

// We can pass props to our styled components
export const Button = styled.button`
  // using the color passed to the element
  background-color: ${(props) => (props.color ? props.color : "red")};
  // using a different value based on a prop
  height: ${(props) => (props.fullWidth ? "100%" : "20%")};
`;
