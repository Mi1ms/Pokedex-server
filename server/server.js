const express = require('express');
const cors = require('cors');
const pokemons = require('./routes/pokemons');
const server = express();

server.use(cors());

server.use('/pokemons', pokemons);

server.listen(4200, () => {
  console.log("Server listen 4200");
});
