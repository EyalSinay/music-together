import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const ConInfo = ({ lang, continent }) => {
  const [contData, setContData] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const drawcontinent = (contData) => {
    console.log("renderrrr");
    const contDraw = contData.map((country, index) => {
      console.log(country);
      return (
        <span key={index} className="country">
          {country.translate}
        </span>
      );
    });
    console.log(contDraw);
    console.log(contDraw[0]);
    return contDraw;
  };

  useEffect(() => {
    setSpinner(true);
    console.log(`continfo`, continent, lang);
    const fetchData = async () => {
      try {
        console.log("yes");
        const { data } = await axios.get(
          `https://word-tune.herokuapp.com/server/${continent}?lang=${lang}`
        );
        console.log(data);
        setContData(data);
        setSpinner(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    if (continent !== "") {
      fetchData();
    }
  }, [continent, lang]);

  if (spinner && continent !== "") {
    return <h1>LOADING......</h1>;
  }

  return (
    <div>
      {spinner === false && <h1 className="header">{continent}</h1>}
      {spinner === false && (
        <div>{continent !== "" && drawcontinent(contData)}</div>
      )}
    </div>
  );
};

export default ConInfo;
