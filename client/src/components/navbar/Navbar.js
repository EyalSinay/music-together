import React from 'react';
import staticInfo from '../home/home_data';

function Navbar({ setContinant, setLang, setHome, lang }) {
  const mapButtens = () => {
    const buttons = [];

    for (const continant in staticInfo[lang].buttons) {
      buttons.push(
        <a
          className="item"
          key={continant}
          onClick={() => setContinant(continant)}
        >
          {staticInfo[lang].buttons[continant]}
        </a>
      );
    }

    return buttons;
  };

  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        {/* <div className="Header"> */}
        <a className="ui button" onClick={() => setLang('he')}>
          HE
        </a>
        <button className="ui button" onClick={() => setLang('ar')}>
          AR
        </button>

        {mapButtens()}

        <div>
          <h3 onClick={setHome}>WorldTune</h3>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Navbar;

{
  /* <div class="ui inverted segment">
  <div class="ui inverted secondary pointing menu">
    <a class="active item">
      Home
    </a>
    <a class="item">
      Messages
    </a>
    <a class="item">
      Friends
    </a>
  </div>
</div> */
}
