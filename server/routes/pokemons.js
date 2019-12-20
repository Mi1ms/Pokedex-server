const express = require('express');
const app = express();
const data = require("../database/pokedex.json");


app.get('/', (req, res) => {
  res.json(data);
  res.end();
})

app.get('/:id', (req, res) => {
  //
  console.log('query');
  // console.log(req.query);
  // return data;
  // let json = data
  // res.end(data);
})

module.exports = app;
