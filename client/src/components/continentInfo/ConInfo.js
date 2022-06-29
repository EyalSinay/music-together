import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const ConInfo = ({ lang, continenet }) => {
  const [contData, setContData] = useState([]);

  const drawContinenet = (contData) => {
    const contDraw = contData.countrys.map((country) => {
      return (
        <span className="country">
          ({country.numOfSongs}){country.name},
        </span>
      );
    });
    return contDraw;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://word-tune.herokuapp.com/${continenet}?lang=${lang}`
        );
        console.log(data);
        setContData(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="header">{continenet}</h1>
      {drawContinenet}
    </div>
  );
};

export default ConInfo;
