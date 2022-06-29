const express = require('express');
const route = express.Router();
// const { Router } = require('express');


// ---------------MOCK ROUTS:---------------


route.get('/:continent', async (req, res) => {
  try {
    res.status(200).send("✌️");
  } catch (e) {
    res.status(400).send(e);
  }
});

route.get('/:continent', async (req, res) => {
  try {
    res.status(200).send("✌️");
  } catch (e) {
    res.status(400).send(e);
  }
});


module.exports = route;
