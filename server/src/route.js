const express = require('express');
const Country = require('../mongodb/models/country_module.js');
const translate = require('./utils/translate.js')
const route = express.Router();
// const { Router } = require('express');


// ---------------DEMO_ROUTS:---------------
// const fs = require('fs');
// const loadData = () => {
//   const dataJSON = fs.readFileSync(__dirname + '/demo-data.json', 'utf-8');
//   return JSON.parse(dataJSON);
// }

route.get('/server', async (req, res) => {
  res.send("server is running");
});

route.get('/server/:continent', async (req, res) => {
  try {
    const continent = req.params.continent;
    const data = await Country.find({ continentName: continent });
    const lang = req.query.lang === "ar" ? "ar" : "he";
    const langDB = lang === "ar" ? "arabicCountryName" : "hebrewCountryName";
    for (let country of data) {
      if (!country[langDB]) {
        console.log("Translate...");
        country[langDB] = await translate(country.englishCountryName, lang);
        await country.save();
      }
    }
    const response = data.map(country => {
      return {
        countryName: country.englishCountryName,
        translate: country[langDB],
        numOfSongs: country.songsList.length
      }
    });
    res.status(200).send(response);
  } catch (e) {
    res.status(400).send(e);
  }
});

route.get('/server/:continent/:country', async (req, res) => {
  try {
    const continent = req.params.continent;
    const country = req.params.country;
    const data = await Country.findOne({ continentName: continent, englishCountryName: country });
    const lang = req.query.lang === "ar" ? "ar" : "he";
    const langDB_N = lang === "ar" ? "arabicCountryName" : "hebrewCountryName";
    const langDB_P = lang === "ar" ? "arabicBody" : "hebrewBody";

    if (!data[langDB_N]) {
      console.log("Translate...");
      data[langDB_N] = await translate(data.englishCountryName, lang);
      await data.save();
    }

    if (data[langDB_P].length === 0) {
      console.log("Translate body...");
      for (let paragraph of data.englishBody) {
        const transParagraph = await translate(paragraph, lang);
        data[langDB_P].push(transParagraph);
      }
      await data.save();
    }

    const response = {
      englishCountryName: data.englishCountryName,
      countryName: data[langDB_N],
      body: data[langDB_P],
      songsList: data.songsList
    }

    res.status(200).send(response);
  } catch (e) {
    res.status(400).send(e);
  }
});


module.exports = route;