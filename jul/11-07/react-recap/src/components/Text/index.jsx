// const Text = (props) => {
const Text = ({ text, color }) => {
  // return <p style={{ backgroundColor: props.color }}>{props.text}</p>;
  return <p style={{ backgroundColor: color }}>{text}</p>;
};

export default Text;
