// Components
import List from "../List";
const Footer = (props) => {
  return (
    <footer>
      <h3>{props.text}</h3>
      <List listItems={props.listItems} />
    </footer>
  );
};

export default Footer;
