// Components
import List from "../List";

const Header = (props) => {
  return (
    <header>
      <h3>{props.text}</h3>
      <List listItems={props.listItems} />
    </header>
  );
};

export default Header;
