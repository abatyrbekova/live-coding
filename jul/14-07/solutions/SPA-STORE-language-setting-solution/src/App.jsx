import './App.css';
import Header from "./components/Header"
import Content from "./components/Content"
import { LanguageProvider } from "./LanguageContext";

function App() {

  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </LanguageProvider>
  );
}

export default App;
