const express = require("express");

const rotas = express();

rotas.get("/", (req, res) => {
  return res.status(200).json("tudo ok!");
});

module.exports = rotas;
