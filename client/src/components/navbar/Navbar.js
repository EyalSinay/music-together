import React from 'react';
import staticInfo from '../home/home_data';

import './navbar.css';
function Navbar({ setContinant, setLang, lang }) {
  const mapButtens = () => {
    const buttons = [];

    for (const continant in staticInfo[lang].buttons) {
      buttons.push(
        <button key={continant} onClick={() => setContinant(continant)}>
          {staticInfo[lang].buttons[continant]}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div>
      <div className="Header">
        <div>
          <button onClick={() => setLang('he')}>HE</button>
          <button onClick={() => setLang('ar')}>AR</button>
        </div>
        {mapButtens()}

        <div>
          <h3>Logo</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
