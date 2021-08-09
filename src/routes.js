const express = require("express");
const routes = express.Router();

const { Listening } = require("./messages");

const telegram = new Listening();

routes.get("/", function (req, res) {
  return res.send({ message: "Você esta no APP " });
});

routes.post("/post", telegram.postMessages);

module.exports = routes;
