import ListItem from "../ListItem";

const List = (props) => {
  return (
    <ul>
      {props.listItems.map((item, i) => (
        <ListItem text={item} key={i} />
      ))}
    </ul>
  );
};

export default List;
