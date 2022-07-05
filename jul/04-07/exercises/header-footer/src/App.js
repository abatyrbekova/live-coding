// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Styles
import "./App.css";

// Data
const headerText = "I am the header";
const headerItems = ["Header item one", "Header item two", "Header item three"];
const footerText = "I am the footer";
const footerItems = ["Footer item one", "Footer item two", "Footer item three"];

function App() {
  return (
    <>
      <Header text={headerText} listItems={headerItems} />
      <Footer text={footerText} listItems={footerItems} />
    </>
  );
}

export default App;
