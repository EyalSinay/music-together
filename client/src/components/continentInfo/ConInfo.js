import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const objCon = {
  title: "Asia",
  name: "אסיה",
  countrys: [
    {
      title: "Afghanistan",
      name: "אפגניסטן",
      numOfSongs: 3,
    },
    {
      title: "Armenia",
      name: "ארמניה",
      numOfSongs: 4,
    },
    {
      title: "Azerbaijan",
      name: "אזרביג'אן",
      numOfSongs: 5,
    },
    {
      title: "Bahrain",
      name: "בחריין",
      numOfSongs: 4,
    },
  ],
};

const ConInfo = ({ lang, continent }) => {
  const [contData, setContData] = useState(objCon);

  const drawcontinent = (contData) => {
    const contDraw = contData.countrys.map((country) => {
      return (
        <span className="country">
          ({country.numOfSongs}){country.name},
        </span>
      );
    });
    return contDraw;
  };

  // useEffect(() => {
  //   console.log(`continfo`, continent, lang);
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `https://word-tune.herokuapp.com/server/${continent}?lang=${lang}`
  //       );
  //       console.log(data);
  //       setContData(data);
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };
  //   if (continent !== null) {
  //     fetchData();
  //   }
  // }, []);

  return (
    <div>
      <h1 className="header">{continent}</h1>
      {drawcontinent(contData)}
    </div>
  );
};

export default ConInfo;
