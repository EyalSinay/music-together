import React from "react";
import { useState, useContext } from "react";
import "./navbar.css";
export default function Navbar() {
  const [lang, setLang] = useState("he");

  const transContinenet = (value) => {};

  const ChangeLanguageHe = () => {
    setLang("he");
  };
  const ChangeLanguageAr = () => {
    setLang("ar");
  };
  return (
    <div>
      <div className="Header">
        <div>
          <button onClick={ChangeLanguageHe}>HE</button>
          <button onClick={ChangeLanguageAr}>AR</button>
        </div>
        {lang === "he" && (
          <div class="continents">
            <button>אפריקה</button>
            <button>אירופה</button>
            <button>דרום אמריקה</button>
            <button>צפון אמריקה</button>
            <button>אסיה</button>
            <button>אוקיאנא</button>
          </div>
        )}
        {lang === "ar" && (
          <div class="continents">
            <button>افريقيا</button>
            <button>اوروبا</button>
            <button>امريكا الجنوبيه</button>
            <button>امريكا الشماليه</button>
            <button>اسيا</button>
            <button>اوكيانا</button>
          </div>
        )}
        <div>
          <h3>Logo</h3>
        </div>
      </div>
    </div>
  );
}
