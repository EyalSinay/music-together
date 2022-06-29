import react, { createContext } from "react";
import Navbar from "../navbar/Navbar";
import ConInfo from "../continentInfo/ConInfo";
import { useState, useContext } from "react";

export const LangContext = createContext("he");

const Home = () => {
  const [lang, setLang] = useState("he");
  const [continenet, setContinenet] = useState(null);

  const updatePage = (lang, continenet) => {
    setLang(lang);
    setContinenet(continenet);
  };

  return (
    <div>
      <Navbar updatePage={updatePage} />
      <ConInfo lang={lang} continent={continenet} />
    </div>
  );
};

export default Home;
