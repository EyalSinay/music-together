import react, { createContext } from 'react';
import Navbar from '../navbar/Navbar';
import Welcome from '../welcome/welcome';
import ConInfo from '../continentInfo/ConInfo';
import { useState, useContext } from 'react';
import staticInfo from './home_data';
import { getContinent, getCountry } from '../../axios';

const Home = () => {
  const [lang, setLang] = useState('he');
  const [dataToDisplay, setDdataToDisplay] = useState(staticInfo);
  const [route, setRoute] = useState({ type: 'welcome', region: undefined });
  const [isSpinner, setIsSpinner] = useState(false);

  const setContinant = async (continant) => {
    try {
      setIsSpinner(true);
      setRoute({ type: 'continant', region: continant });
      const data = await getContinent(continant, lang);
      console.log(data);
      setDdataToDisplay(data);
    } catch (e) {
      console.warn(e);
    }
    setIsSpinner(false);
  };

  if (isSpinner) return <Spinner />;

  return (
    <div>
      <Navbar lang={lang} setContinant={setContinant} setLang={setLang} />
      {route.type === 'welcome' && <Welcome data={dataToDisplay} lang={lang} />}
      {/* <ConInfo lang={lang} continent={continent} /> */}
    </div>
  );
};

export default Home;

const Spinner = () => {
  return <h1>Loading...</h1>;
};
