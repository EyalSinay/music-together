import React from 'react';
import staticInfo from '../home/home_data';

function Navbar({ setContinant, setLang, lang }) {
  const mapButtens = () => {
    const buttons = [];

    for (const continant in staticInfo[lang].buttons) {
      buttons.push(
        <button
          className="item"
          key={continant}
          onClick={() => setContinant(continant)}
        >
          {staticInfo[lang].buttons[continant]}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="ui inverted segment">
      <div className="Header">
        <a className="ui button" onClick={() => setLang('he')}>
          HE
        </a>
        <button className="ui button" onClick={() => setLang('ar')}>
          AR
        </button>

        {mapButtens()}

        <div>
          <h3>Logo</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

{
  /* 
  <div className="ui inverted secondary pointing menu">
    <a className="active item">
      Home
    </a>
    <a className="item">
      Messages
    </a>
    <a className="item">
      Friends
    </a>
  </div>
</div> */
}
