import { useContext } from "react";

// Contexts
import { LanguageContext } from "../../contexts/LanguageContext";

const translations = {
  german: "Halloechen",
  english: "Hiya",
  croatian: "Bokich",
  arabic: "مرعبا",
};

export default function WelcomeMessage() {
  const { language } = useContext(LanguageContext);

  return <div>{translations[language]}</div>;
}
