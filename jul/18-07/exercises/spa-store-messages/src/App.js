// Components
import Header from "./components/Header";
import Content from "./components/Content";

// Context
import { LanguageContextProvider } from "./contexts/LanguageContext";

// Styles
import "./App.css";

// 3. We wrap components with the provider
// all the children inside the provider will have access
// to the values we passed to the provider
function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <Header />
        <Content />
      </LanguageContextProvider>
    </div>
  );
}

export default App;
