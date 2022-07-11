// Components
import Text from "./components/Text";

// Styles
import "./App.css";

const texts = [
  { color: "", text: "Normal text" },
  { color: "green", text: "Success text" },
  { color: "red", text: "Error text" },
];

function App() {
  return (
    <div className="App">
      {/* 1.  */}
      {/* <p style={{ backgroundColor: "" }}>Normal text</p> */}
      {/* <p style={{ backgroundColor: "green" }}>Success text</p>
      <p style={{ backgroundColor: "red" }}>Error text</p> */}
      {/* 2. */}
      {/* <Text color={""} text={"Normal text"} />
      <Text color={"green"} text={"Success text"} />
      <Text color={"red"} text={"Error text"} /> */}
      {/* 3. */}
      {texts.map((text, i) => {
        return <Text key={i} color={text.color} text={text.text} />;
      })}
    </div>
  );
}

export default App;
