// Components
import Button from "../Button";

// Styles
import "./styles.css";

export const redBackground = "liStyles";

const ListItem = (props) => {
  return (
    <li className={props.styles ? props.styles : redBackground}>
      {props.text}
      <Button text={props.buttonText} />
    </li>
  );
};

export default ListItem;
