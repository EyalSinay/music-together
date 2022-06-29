import React from 'react';
import { useState, useEffect } from 'react';
import navbarInfo from './navbar_data';
import './navbar.css';
function Navbar({ updatePage }) {
  const [lang, setLang] = useState('he');
  const [continentName, setContinentName] = useState('');
  const [showContInfo, setShowContInfo] = useState(false);
  const [translatedContinent, setTranslatedContinent] = useState('');
  const [showDes, setShowDes] = useState(true);

  //     const translateCont = (e) => {
  //       setContinentName(e.target.innerText);
  //       setShowContInfo(true);
  // }
  //     if (e.target.innerText === "אפריקה") {
  //       setTranslatedContinent("africa");
  //       console.log(translatedContinent);
  //     }
  //     if (e.target.innerText === "אירופה") {
  //       setTranslatedContinent("europe");
  //       console.log(translatedContinent);
  //     }
  //   };

  useEffect(() => {
    updatePage(lang, translatedContinent);
  }, [lang]);

  const ChangeLanguageHe = () => {
    setLang('he');
  };
  const ChangeLanguageAr = () => {
    setLang('ar');
  };

  const intialPage = () => {
    setShowDes(true);
    updatePage(lang, '');
  };

  return (
    <div>
      <div className="Header">
        <div>
          <button onClick={ChangeLanguageHe}>HE</button>
          <button onClick={ChangeLanguageAr}>AR</button>
        </div>
        {lang === 'he' && (
          <div className="continents">
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent('africa');
                updatePage(lang, 'africa');
              }}
            >
              אפריקה
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent('europe');
                updatePage(lang, 'europe');
              }}
            >
              אירופה
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent('south america');
                updatePage(lang, 'south america');
              }}
            >
              דרום אמריקה
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent('north america');
                updatePage(lang, 'north america');
              }}
            >
              צפון אמריקה
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent('asia');
                updatePage(lang, 'asia');
              }}
            >
              אסיה
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent('oceana');
                updatePage(lang, 'oceana');
              }}
            >
              אוקיאנה
            </button>
          </div>
        )}
        {lang === 'ar' && (
          <div className="continents">
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent('africa');
                updatePage(lang, 'africa');
              }}
            >
              افريقيا
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent('europe');
                updatePage(lang, 'europe');
              }}
            >
              اوروبا
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent('south america');
                updatePage(lang, 'south america');
              }}
            >
              امريكا الجنوبيه
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent('north america');
                updatePage(lang, 'north america');
              }}
            >
              امريكا الشماليه
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent('asia');
                updatePage(lang, 'asia');
              }}
            >
              اسيا
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent('oceana');
                updatePage(lang, 'oceana');
              }}
            >
              اوكيانا
            </button>
          </div>
        )}
        <div>
          <h3 onClick={intialPage}>Logo</h3>
        </div>
      </div>
      {showContInfo && <div>{continentName}</div>}
      {lang === 'he' && showDes && (
        <div className="webDescriptionHe">
          <h1>{navbarInfo.title.he}</h1>
          <p>{navbarInfo.desc.he}</p>
        </div>
      )}
      {lang === 'ar' && showDes && (
        <div className="webDescriptionAr">
          <h1>{navbarInfo.title.ar}</h1>
          <p>{navbarInfo.desc.ar}</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
