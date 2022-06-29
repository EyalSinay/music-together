import react, { createContext } from "react";
import Navbar from "../navbar/Navbar";
import ConInfo from "../continentInfo/ConInfo";
import { useState, useContext } from "react";

export const LangContext = createContext("he");

const Home = () => {
  const [lang, setLang] = useState("he");
  const [continent, setContinent] = useState("");

  const updatePage = (lang, continent) => {
    console.log(continent, lang);
    setLang(lang);
    setContinent(continent);
  };

  return (
    <div>
      <Navbar updatePage={updatePage} />
      <ConInfo lang={lang} continent={continent} />
    </div>
  );
};

export default Home;
